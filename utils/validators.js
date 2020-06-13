function isTwoDimensionalArrayConsistOfNumbers (arr) {
  if (Array.isArray(arr)) {
    return !arr
      .some(item => !Array.isArray(item) || item.some(subItem => typeof subItem !== 'number'))
  } else return false
}

function isArrayConsistOfNumbers (arr) {
  if (Array.isArray(arr)) {
    return !arr.some(item => typeof item !== 'number')
  } else return false
}

function isAllArgsNumberType (...args) {
  return !args.some(value => typeof value !== 'number')
}

function isAllArgsStringType (...args) {
  return !args.some(value => typeof value !== 'string')
}

function isAllArgsFunctions (...args) {
  return !args.some(value => typeof value !== 'function')
}

export {
  isTwoDimensionalArrayConsistOfNumbers,
  isArrayConsistOfNumbers,
  isAllArgsNumberType,
  isAllArgsStringType,
  isAllArgsFunctions,
}
