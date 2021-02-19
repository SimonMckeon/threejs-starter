import { BoxBufferGeometry, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from "three";

function createMaterial() {
  const textureLoader = new TextureLoader()
  const textureImage = require('../assets/textures/uv-test-bw.png')
  const texture = textureLoader.load(textureImage)

  return new MeshStandardMaterial({
    map: texture
  })
}

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2)
    const material = createMaterial()
    const cube = new Mesh(geometry, material)

    cube.rotation.set(-0.5, -0.1, 0.8)

    const radiansPerSecond = MathUtils.degToRad(15)

    cube.tick = delta => {
      cube.rotation.x += radiansPerSecond * delta
      cube.rotation.y += radiansPerSecond * delta
      cube.rotation.z += radiansPerSecond * delta
    }

    return cube
}

export { createCube }