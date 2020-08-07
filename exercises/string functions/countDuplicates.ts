// Duplicates counter
export function countDuplicates (text: string) :number {
  return text
    .toLowerCase()
    .split('')
    .filter((value, index, arr) => arr.indexOf(value) !== index && arr.lastIndexOf(value) === index).length
}
