// Array splitting and sorting
export function flattenAndSort (arr) {
  return arr
    .reduce((total, amount) => total.concat(amount), [])
    .sort((a, b) => a - b)
}
