import { isAllArgsNumberType } from '../../utils/validators'

// Functional addition
export function add (n) {
  return function (num) {
    const checkTypes = isAllArgsNumberType(num)
    if (typeof checkTypes === 'object') return checkTypes
    return num + n
  }
}
