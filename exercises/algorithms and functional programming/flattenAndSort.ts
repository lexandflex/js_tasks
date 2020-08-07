// Array splitting and sorting
export function flattenAndSort (arr: Array<Array<number>>): Array<number> {
  return arr
    .reduce((total, amount) => total.concat(amount), [])
    .sort((a, b) => a - b)
}
