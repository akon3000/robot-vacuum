const Robot = require('./Robot')

class Vacuum extends Robot {
  constructor(area = [], position) {
    super()
    this.setArea(area)
    this.setPosition(position)
  }

  getPosition() {
    const [axisX, axisY, direction] = this.position

    return {
      axisX,
      axisY,
      direction
    }
  }
}

module.exports = Vacuum