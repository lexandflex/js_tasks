import { isAllArgsNumberType } from '../../utils/validators'

// Functional addition
export function add (n) {
  if (isAllArgsNumberType(n)) {
    return function (num) {
      if (isAllArgsNumberType(num)) return num + n
      else return new Error('All args must be a number type')
    }
  } else {
    return function () {
      return new Error('All args must be a number type')
    }
  }
}
