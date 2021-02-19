import Stats from 'three/examples/jsm/libs/stats.module.js';

function createStats(container, type = 0, style = 'position: absolute; top: 0; left: 0') {
  const stats = new Stats()
  stats.showPanel(type)
  stats.domElement.style.cssText = style
  container.appendChild(stats.dom)

  stats.tick = () => {
    stats.update()
  }

  return stats
}

function createStat(type) {

}

export { createStats }