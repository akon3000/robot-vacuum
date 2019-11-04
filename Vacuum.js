const Robot = require('./Robot')

class Vacuum extends Robot {
  constructor(area = [], position) {
    super()
    this.setArea(area)
    this.setPosition(position)
  }

  move() {
    console.log('move')
  }

  excute(commands) {
    if (
      !Array.isArray(commands) ||
      commands.some(cmd => !this.commands.find(command => command === cmd))
    ) {
      throw Error('Vacuum excute(): arguments is not support.')
    }

    const [L, R, M] = this.commands

    commands.forEach(cmd => {
      switch(cmd) {
        case L:
          this.rotateLeft()
          break
        case R:
          this.rotateRight()
          break
        case M: 
          this.move()
          break
      }
    })
  }
}

module.exports = Vacuum