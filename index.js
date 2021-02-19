
import { createCamera } from './components/camera'
import { createScene } from './components/scene'
import { createCube } from './components/cube'

import Loop from './systems/Loop'
import Resizer from './systems/Resizer'
import { createRenderer } from './systems/renderer'
import { createLights } from './components/lights'


let _camera,
    _scene,
    _renderer,
    _loop

class App {
  constructor(container) {
    _camera = createCamera()
    _scene = createScene()
    _renderer = createRenderer()

    _loop = new Loop(_camera, _scene, _renderer)

    container.append(_renderer.domElement)

    // Demo content
    const cube = createCube()
    const lights = createLights()

    _loop.updatables.push(cube)

    _scene.add(cube, lights)

    new Resizer(container, _camera, _renderer)
  }

  render() {
    _renderer.render(_scene, _camera)
  }

  start() {
    _loop.start()
  }

  stop() {
    _loop.stop()
  }
}

export default App