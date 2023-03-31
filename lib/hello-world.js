export function getAllHelloWorldIds () {
  return ['phoenix', 'hummingbird'].map(id => {
    return {
      params: {
        id: id
      }
    }
  })
}

export function getAllHelloWorldData (id) {
  const paths = {
    phoenix: '/phoenix_bird/scene.gltf',
    hummingbird: '/hummingbird_flying/scene.gltf'
  }
  
  return {
    src: paths[id]
  }
}