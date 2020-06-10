import { isTwoDimensionalArrayConsistOfNumbers } from '../../utils/validators'

// Arrays average sum
export function sumAverage (arr) {
  const arrayCheck = isTwoDimensionalArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  return Math.floor(
    arr
      .map(val =>
        val.reduce((acc, v) => acc + v / val.length, 0))
      .reduce((acc, value) => acc + value, 0),
  )
}
