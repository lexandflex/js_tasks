// Multiply all the elements of the array
export function multiplyAll (arr) {
  return function (mult) {
    return arr.map(value => value * mult)
  }
}
