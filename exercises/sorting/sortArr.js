import { isArray } from '../../utils/validators'
// Sorted object list
export function sortArr (list, sortBy) {
  const arrayCheck = isArray(list)
  if (typeof arrayCheck === 'object') return arrayCheck
  return list.sort((a, b) => b[sortBy] - a[sortBy])
}
