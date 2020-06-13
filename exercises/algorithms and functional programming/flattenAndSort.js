import { isTwoDimensionalArrayConsistOfNumbers } from '../../utils/validators'

// Array splitting and sorting
export function flattenAndSort (arr) {
  if (isTwoDimensionalArrayConsistOfNumbers(arr)) {
    return arr
      .reduce((total, amount) => total.concat(amount), [])
      .sort((a, b) => a - b)
  } else return new Error(('Two dimensional arrays should consist of numbers'))
}
