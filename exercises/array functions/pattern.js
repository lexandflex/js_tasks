import { isAllArgsNumberType } from '../../utils/validators'

// Shear combination
export function pattern (amount) {
  const checkTypes = isAllArgsNumberType(amount)
  if (typeof checkTypes === 'object') return checkTypes
  const arr = Array.from({ length: amount }, (v, i) => i + 1)
  const res = arr.map(() => {
    arr.unshift(arr.pop())
    return arr.join('')
  })
  return res.reverse()
}
