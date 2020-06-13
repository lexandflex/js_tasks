import { isArrayConsistOfNumbers } from '../../utils/validators'

// Three maximum values sum
export function maxTripletSum (arr) {
  if (isArrayConsistOfNumbers(arr)) {
    const result = Array.from({ length: 3 }, (value, index) => index + 1)
    result.map((value, index) => {
      const maxEl = Math.max.apply(null, arr)
      result[index] = maxEl
      arr = arr.filter(value => value !== maxEl)
    })
    return result.reduce((acc, v) => (acc += v), 0)
  } else return new Error('Array should consist of numbers')
}
