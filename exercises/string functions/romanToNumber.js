import { isAllArgsStringType } from '../../utils/validators'

// Decode roman numbers
export function romanToNumber (number) {
  const checkTypes = isAllArgsStringType(number)
  if (typeof checkTypes === 'object') return checkTypes
  const re = /[^IVXLCDM]/
  if (re.exec(number) !== null) return new Error('Enter a Roman number')
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  return number
    .split('')
    .map(v => obj[v])
    .reduce((acc, val, i, arr) => acc + (arr[i + 1] > val ? -val : val), 0)
}
