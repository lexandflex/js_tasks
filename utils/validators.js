
function isTwoDimensionalArrayConsistOfNumbers (arr) {
  try {
    if (!Array.isArray(arr)) throw new Error('Array is expected')
    arr.map(v => {
      if (!Array.isArray(v)) throw new Error('The array must consist of arrays')
      if (v.some(v => typeof v !== 'number')) {
        throw new Error('Nested arrays must consist of numbers')
      }
    })
  } catch (e) {
    return e
  }
}

function isArrayConsistOfNumbers (arr) {
  try {
    if (!Array.isArray(arr)) throw new Error('Array is expected')
    arr.map(v => {
      if (typeof v !== 'number') throw new Error('The array must consist of numbers')
    })
  } catch (e) {
    return e
  }
}

function isAllArgsNumberType (...args) {
  try {
    if (args.some(v => typeof v !== 'number')) {
      throw new Error('Incorrect data type: number is expected')
    }
  } catch (e) {
    return e
  }
}

function isAllArgsStringType (...args) {
  try {
    if (args.some(v => typeof v !== 'string')) {
      throw new Error('Incorrect data type: string is expected ')
    }
  } catch (e) {
    return e
  }
}

function isArray (arr) {
  if (!Array.isArray(arr)) return new Error('Array is expected')
}

export {
  isTwoDimensionalArrayConsistOfNumbers, isArrayConsistOfNumbers, isAllArgsNumberType,
  isAllArgsStringType, isArray,
}
