import { isAllArgsNumberType } from '../../utils/validators'

// Arithmetic sequence-the sum of n elements
export function arithmeticSequenceSum (a, r, n) {
  const checkTypes = isAllArgsNumberType(a, r, n)
  if (typeof checkTypes === 'object') return checkTypes
  const arr = new Array(n).fill(0)
  return arr.map((elem, i) => a + r * i)
  // return arr.reduce((acc, elem, i) => acc + a + r * i, 0)
}
