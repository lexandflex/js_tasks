// Diagonal matrix sum
export function diagonalSum (array: Array<Array<number>>): number {
  return array.reduce((acc, value, index) => acc + value[index], 0)
}
