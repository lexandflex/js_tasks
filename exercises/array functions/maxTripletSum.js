import { isArrayConsistOfNumbers } from '../../utils/validators'

// Three maximum values sum
export function maxTripletSum (arr) {
  const arrayCheck = isArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  const result = Array(3).fill(0)
  result.map((v, i) => {
    const maxEl = Math.max.apply(null, arr)
    result[i] = maxEl
    arr = arr.filter(value => value !== maxEl)
  })
  return result.reduce((acc, v) => (acc += v), 0)
}
