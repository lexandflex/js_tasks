import { isAllArgsStringType } from '../../utils/validators'

// Duplicates counter
export function countDuplicates (text) {
  if (isAllArgsStringType(text)) {
    return text
      .toLowerCase()
      .split('')
      .filter((value, index, arr) => {
        return arr.indexOf(value) !== index && arr.lastIndexOf(value) === index
      }).length
  } else return new Error('All args should be a string type')
}
