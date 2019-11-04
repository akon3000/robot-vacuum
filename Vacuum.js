const Robot = require('./Robot')

class Vacuum extends Robot {
  constructor(area = [], position) {
    super()
    this.setArea(area)
    this.setPosition(position)
  }

  rotate() {

  }

  move() {

  }

  excute(commands = []) {

  }
}

module.exports = Vacuum