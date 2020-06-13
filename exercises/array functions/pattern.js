import { isAllArgsNumberType } from '../../utils/validators'

// Shear combination
export function pattern (amount) {
  if (isAllArgsNumberType(amount)) {
    const arr = Array.from({ length: amount }, (value, index) => index + 1)
    const res = arr.map(() => {
      arr.unshift(arr.pop())
      return arr.join('')
    })
    return res.reverse()
  } else return new Error('All args should be a number type')
}
