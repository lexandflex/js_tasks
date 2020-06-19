// Unique values sum (only with reduce)
export function uniqueSumByReduce (arr) {
  return arr.reduce((acc, value, index, array) =>
    array.indexOf(value) === index ? acc + value : acc, 0)
}
