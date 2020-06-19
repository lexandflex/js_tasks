// Duplicates counter
export function countDuplicates (text) {
  return text
    .toLowerCase()
    .split('')
    .filter((value, index, arr) => {
      return arr.indexOf(value) !== index && arr.lastIndexOf(value) === index
    }).length
}
