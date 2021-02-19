
import { createCamera } from './components/camera'
import { createScene } from './components/scene'
import { createCube } from './components/cube'
import { createLights } from './components/lights'
import { createStats } from './components/stats'

import Loop from './systems/Loop'
import Resizer from './systems/Resizer'
import { createRenderer } from './systems/renderer'

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

    const fpsStats = createStats(container, 0)
    const msStats = createStats(container, 1, 'position: absolute; top: 0; left: 80px')
    const memoryStats = createStats(container, 2, 'position: absolute; top: 0; left: 160px')

    // Demo content
    const cube = createCube()
    const { ambientLight, directLight } = createLights()

    _loop.updatables.push(fpsStats, msStats, memoryStats, cube)

    _scene.add(ambientLight, directLight, cube)

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