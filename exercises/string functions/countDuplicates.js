import { isAllArgsStringType } from '../../utils/validators'

// Duplicates counter
export function countDuplicates (text) {
  const checkTypes = isAllArgsStringType(text)
  if (typeof checkTypes === 'object') return checkTypes
  const uniqValues = []
  const repeatValues = []
  text
    .toLowerCase()
    .split('')
    .map(v => {
      if (!uniqValues.includes(v)) uniqValues.push(v)
      else if (!repeatValues.includes(v)) repeatValues.push(v)
    })
  return repeatValues.length
}
