import { isAllArgsNumberType } from '../../utils/validators'

// Arithmetic sequence-the sum of n elements
export function arithmeticSequenceSum (a, r, n) {
  if (isAllArgsNumberType(a, r, n)) {
    return Array
      .from({ length: n }, (value, key) => key)
      .map((elem, index) => a + r * index)
  // return Array
  //  .from({ length: n }, (value, key) => key)
  //  .reduce((acc, elem, i) => acc + a + r * i, 0)
  } else return new Error('All args should be a number type')
}
