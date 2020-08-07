// Multiply all the elements of the array
export function multiplyAll (arr: Array<number>) {
  return function (mult: number): Array<number> {
    return arr.map(value => value * mult)
  }
}
