// Arrays average sum
export function sumAverage (arr:Array<Array<number>>): number {
  return Math.floor(
    arr.reduce((acc, subValue) => acc + subValue.reduce((prev, value) => prev + value / subValue.length, 0), 0),
  )
}
