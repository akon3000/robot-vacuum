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
}

module.exports = Robot