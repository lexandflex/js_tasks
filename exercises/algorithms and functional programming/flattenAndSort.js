import { isTwoDimensionalArrayConsistOfNumbers } from '../../utils/validators'

// Array splitting and sorting
export function flattenAndSort (arr) {
  const arrayCheck = isTwoDimensionalArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  return arr
    .reduce((total, amount) => total.concat(amount), [])
    .sort((a, b) => a - b)
}
