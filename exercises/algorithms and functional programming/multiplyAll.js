import { isAllArgsNumberType } from '../../utils/validators'

// Multiply all the elements of the array
export function multiplyAll (arr) {
  if (Array.isArray(arr)) {
    return function (mult) {
      if (isAllArgsNumberType(mult)) return arr.map(value => value * mult)
      else return new Error('All args should be a number type')
    }
  } else {
    return function () {
      return new Error('Array is expected')
    }
  }
}
