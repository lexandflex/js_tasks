// Unique values sum
export function uniqueSum (arr: Array<number>): number {
  return arr.reduce((acc, value, index, array) => (array.indexOf(value) === index ? acc + value : acc), 0)
}
