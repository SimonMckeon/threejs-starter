import { AmbientLight, DirectionalLight, HemisphereLight } from 'three'

function createLights() {
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 5)

  const directLight = new DirectionalLight('white', 8)
  directLight.position.set(10, 10, 10)
  return { ambientLight, directLight }
}

export { createLights }