import { isArray, isAllArgsNumberType } from '../../utils/validators'

// Multiply all the elements of the array
export function multiplyAll (arr) {
  const arrayCheck = isArray(arr)
  if (typeof arrayCheck === 'object') {
    return function () {
      return arrayCheck
    }
  }
  return function (mult) {
    const checkTypes = isAllArgsNumberType(mult)
    if (typeof checkTypes === 'object') return checkTypes
    return arr.map(v => v * mult)
  }
}
