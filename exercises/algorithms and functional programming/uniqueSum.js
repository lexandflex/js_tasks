import { isArrayConsistOfNumbers } from '../../utils/validators'

// Unique values sum
export function uniqueSum (arr) {
  const arrayCheck = isArrayConsistOfNumbers(arr)
  if (typeof arrayCheck === 'object') return arrayCheck
  const uniqueArr = []
  arr.map(v => {
    if (!uniqueArr.includes(v)) uniqueArr.push(v)
  })
  return uniqueArr.reduce((acc, v) => acc + v, 0)
}
