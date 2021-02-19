class Resizer {
  constructor(container, camera, renderer) {
    this.setSize(container, camera, renderer)

    window.addEventListener('resize', () => {
      this.setSize(container, camera, renderer)
      this.onResize()
    })
  }

  setSize(container, camera, renderer) {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()

    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(1)
  }

  onResize() {
    // noop - enables external implementations to hook into resize event
  }
}

export default Resizer