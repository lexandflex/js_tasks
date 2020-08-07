// Arithmetic sequence-the sum of n elements
export function arithmeticSequenceSum (a:number, r:number, n:number): number {
  return Array
    .from({ length: n }, (value, key) => key)
    .reduce((acc, elem, index) => acc + a + r * index, 0)
}
