// Sorted object list
export function sortArr (list, sortBy) {
  if (Array.isArray(list)) {
    if (!list.every(value => Object.keys(value).includes(sortBy))) {
      return new Error('Not all array items consist of sorting key')
    }
    return list.sort((a, b) => b[sortBy] - a[sortBy])
  } else return new Error(list + ' is not array')
}
