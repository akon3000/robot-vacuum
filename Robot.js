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
}

module.exports = Robot