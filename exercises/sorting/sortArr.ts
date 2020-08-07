// Sorted object list
export function sortArr (list: Array<Record<string, number>>, sortBy: string): Array<Record<string, number>> {
  if (list.every(value => Object.keys(value).includes(sortBy))) {
    return list.sort((a, b) => b[sortBy] - a[sortBy])
  }
  return list
}
