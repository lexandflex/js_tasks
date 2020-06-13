import { isTwoDimensionalArrayConsistOfNumbers } from '../../utils/validators'

// Diagonal matrix sum
export function diagonalSum (array) {
  if (isTwoDimensionalArrayConsistOfNumbers(array)) {
    return array.reduce((acc, value, index) => acc + value[index], 0)
  } else return new Error('Two dimensional arrays should consist of numbers')
}
