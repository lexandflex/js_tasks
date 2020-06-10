import { isArrayConsistOfNumbers } from '../../utils/validators'

// Diagonal matrix sum
export function diagonalSum (array) {
  const arrayCheck = isArrayConsistOfNumbers(array)
  if (typeof arrayCheck === 'object') return arrayCheck
  return array.reduce((acc, v, i) => acc + v[i], 0)
}
