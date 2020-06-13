import { isArrayConsistOfNumbers } from '../../utils/validators'

// Unique values sum (with filter)
export function uniqueSum (arr) {
  if (isArrayConsistOfNumbers(arr)) {
    return arr
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .reduce((acc, value) => acc + value, 0)
  } else return new Error('Array should consist of numbers')
}

// Unique values sum (with Set)
// export function uniqueSum (arr) {
//  if (isArrayConsistOfNumbers(arr)) return [...new Set(arr)].reduce((acc, value) => acc + value, 0)
//   else return new Error('Array should consist of numbers')
// }
