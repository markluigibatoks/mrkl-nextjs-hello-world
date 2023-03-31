import { useGLTF, OrbitControls, Sky, Environment, Cloud } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Layout from "@/components/layout"

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
  const model = useGLTF(src)
  return (
     <primitive object={model.scene} />
  )
}

export default function HelloWorld ({ src }) {

  return (
    <>
      <Layout>
        <Canvas>
            <Suspense fallback={null}>
              <hemisphereLight intensity={0.45} />
              <spotLight angle={0.4} penumbra={1} position={[20, 30, 2.5]} castShadow shadow-bias={-0.00001} />
              <directionalLight color="red" position={[-10, -10, 0]} intensity={1.5} />
              <Cloud scale={1.5} position={[20, 0, 0]} />
              <Cloud scale={1} position={[-20, 10, 0]} />
              <Environment preset="city" />
              <Sky />
              <Model src={src.src}/>
            <OrbitControls />
          </Suspense>
        </Canvas>
      </Layout>
    </>
  )
}

