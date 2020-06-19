// Diagonal matrix sum
export function diagonalSum (array) {
  return array.reduce((acc, value, index) => acc + value[index], 0)
}
