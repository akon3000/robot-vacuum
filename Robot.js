class Robot {
  constructor() {
    this.area = null
    this.position = null
    this.commands = ['L', 'R', 'M']
    this.directions = ['E', 'W', 'N', 'S']
  }

  setArea(area) {
    if (
      !Array.isArray(area) ||
      area.length < 2 ||
      !Number.isInteger(area[0]) ||
      !Number.isInteger(area[1]) ||
      area[0] < 1 ||
      area[1] < 1
    ) {
      throw Error('Robot setArea(): arguments is not support.')
    }
  
    this.area = area
  }

  setPosition(position) {
    if (
      !Array.isArray(position) ||
      position.length < 3 ||
      !Number.isInteger(position[0]) ||
      !Number.isInteger(position[1]) ||
      position[0] < 0 ||
      position[1] < 0 ||
      position[0] > this.area[0] - 1 ||
      position[1] > this.area[1] - 1 ||
      !this.directions.find(direction => direction === position[2])
    ) {
      throw Error('Robot setPosition(): arguments is not support.')
    }

    this.position = position
  }

  rotateLeft() {
    const [, , directionRobot] = this.position
    const [E, W, N, S] = this.directions

    switch (directionRobot) {
      case E:
        this.position[2] = N
        break
      case W:
        this.position[2] = S
        break
      case N:
        this.position[2] = W
        break
      case S:
        this.position[2] = E
        break
    }
  }

  rotateRight() {
    const [, , directionRobot] = this.position
    const [E, W, N, S] = this.directions

    switch (directionRobot) {
      case E:
        this.position[2] = S
        break
      case W:
        this.position[2] = N
        break
      case N:
        this.position[2] = E
        break
      case S:
        this.position[2] = W
        break
    }
  }

  move() {
    const [areaX, areaY] = this.area
    const [axisX, axisY, directionRobot] = this.position
    const [E, W, N, S] = this.directions

    if (
      (axisX === 0 && directionRobot === W) ||
      (axisX === (areaX - 1) && directionRobot === E) ||
      (axisY === 0 && directionRobot === S) ||
      (axisY === (areaY - 1) && directionRobot === N)
    ) {
      return
    }

    switch (directionRobot) {
      case E:
        this.position[0] = this.position[0] + 1
        break
      case W:
        this.position[0] = this.position[0] - 1
        break
      case N:
        this.position[1] = this.position[1] + 1
        break
      case S:
        this.position[1] = this.position[1] - 1
    }
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

module.exports = Robot