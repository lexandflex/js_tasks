import { isAllArgsStringType } from '../../utils/validators'

// Decode roman numbers
export function romanToNumber (number) {
  if (isAllArgsStringType(number)) {
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
      .map(value => obj[value])
      .reduce((acc, value, i, arr) => acc + (arr[i + 1] > value ? -value : value), 0)
  } else return new Error('All args should be a string type')
}
