import { isTwoDimensionalArrayConsistOfNumbers } from '../../utils/validators'

// Arrays average sum
export function sumAverage (arr) {
  if (isTwoDimensionalArrayConsistOfNumbers(arr)) {
    return Math.floor(
      arr
        .map(subValue =>
          subValue.reduce((acc, value) => acc + value / subValue.length, 0))
        .reduce((acc, value) => acc + value, 0),
    )
  } else return new Error('Two dimensional arrays should consist of numbers')
}
