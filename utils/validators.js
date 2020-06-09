/* eslint-disable no-throw-literal */

function isTwoDimensionalArrayConsistOfNumbers (arr) {
  try {
    if (!Array.isArray(arr)) throw 'Array is expected'
    arr.map((v) => {
      if (!Array.isArray(v)) throw 'The array must consist of arrays'
      if (v.some((v) => typeof v !== 'number')) { throw 'Nested arrays must consist of numbers' }
    })
  } catch (e) {
    return new Error(e)
  }
}

function isArrayConsistOfNumbers (arr) {
  try {
    if (!Array.isArray(arr)) throw 'Array is expected'
    arr.map((v) => {
      if (typeof v !== 'number') throw 'The array must consist of numbers'
    })
  } catch (e) {
    return new Error(e)
  }
}

function isAllArgsNumberType (...args) {
  try {
    if (args.some((v) => typeof v !== 'number')) { throw 'Incorrect data type: number is expected ' }
  } catch (e) {
    return new Error(e)
  }
}

function isAllArgsStringType (...args) {
  try {
    if (args.some((v) => typeof v !== 'string')) { throw 'Incorrect data type: string is expected ' }
  } catch (e) {
    return new Error(e)
  }
}

function isArray (arr) {
  if (!Array.isArray(arr)) return new Error('Array is expected')
}

export { isTwoDimensionalArrayConsistOfNumbers, isArrayConsistOfNumbers, isAllArgsNumberType, isAllArgsStringType, isArray }
