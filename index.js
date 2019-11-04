const Vacuum = require('./Vacuum')

const vacuumA = new Vacuum([6, 6], [0, 0, 'E'])

vacuumA.excute(['M'])

console.log(vacuumA.getPosition())