// Decode roman numbers
export function romanToNumber (number: string): number {
  const re = /[^IVXLCDM]/
  if (re.exec(number) !== null) return NaN
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
}
