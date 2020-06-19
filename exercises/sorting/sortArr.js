// Sorted object list
export function sortArr (list, sortBy) {
  if (list.every(value => Object.keys(value).includes(sortBy))) {
    return list.sort((a, b) => b[sortBy] - a[sortBy])
  } else {
    return list
  }
}
