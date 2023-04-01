export function getAllHelloWorldIds () {
  return ['hummingbird', 'painted', 'dragon'].map(id => {
    return {
      params: {
        id: id
      }
    }
  })
}

export function getAllHelloWorldData (id) {
  const paths = {
    hummingbird: '/hummingbird_flying/scene.gltf',
    painted: '/stylized_hand_painted_scene/scene.gltf',
    dragon: '/dragon_flying/scene.gltf'
  }
  
  return {
    src: paths[id]
  }
}