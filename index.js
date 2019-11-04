const Vacuum = require('./Vacuum')

const vacuumA = new Vacuum([1, 2], [0, 1, 'E'])

vacuumA.excute(['L', 'R', 'M'])