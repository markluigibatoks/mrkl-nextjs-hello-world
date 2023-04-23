import { Preload, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor, Loader, useGLTF, useAnimations, OrbitControls, Sky, Environment, Cloud, Stars, Sparkles, RandomizedLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Layout from "@/components/layout"
import { useRouter } from 'next/router'

import { getAllHelloWorldIds, getAllHelloWorldData } from '@/lib/hello-world'

export async function getStaticProps({ params }) {
  const src = getAllHelloWorldData(params.id);

  return {
    props: {
      src
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllHelloWorldIds();
  return {
    paths,
    fallback: false,
  };
}

export function Model({ src }) {

  const router = useRouter()

  const { scene, animations } = useGLTF(src)
  const { names, actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions[names[0]].play()
  })

  return <primitive object={scene} scale={router.query.id === 'hummingbird' ? 1 : 0.01}/>
}

export default function HelloWorld ({ src }) {

  const [dpr, setDpr] = useState(2)

  return (
    <>
      <Layout>
        <Canvas>
          <PerformanceMonitor factor={1} onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor, 1))} />
            <Suspense fallback={null}>
              <hemisphereLight intensity={0.45} />
              <spotLight angle={0.4} penumbra={1} position={[20, 30, 2.5]} castShadow shadow-bias={-0.00001} />
              <directionalLight color="red" position={[-10, -10, 0]} intensity={1.5} />
              <Cloud scale={1.5} position={[20, 0, 0]} />
              <Cloud scale={1} position={[-20, 10, 0]} />
              <Environment preset="city" />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Sky />
              <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, -10]} />
              <Sparkles />
              <Model src={src.src}/>
              <AdaptiveDpr pixelated />
              <AdaptiveEvents />
              <Preload all />
            <OrbitControls />
          </Suspense>
        </Canvas>
        <Loader />
      </Layout>
    </>
  )
}

