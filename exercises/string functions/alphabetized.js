import { isAllArgsStringType } from '../../utils/validators'

// Alphabetized
export function alphabetized (text) {
  const checkTypes = isAllArgsStringType(text)
  if (typeof checkTypes === 'object') return checkTypes
  const result = text
    .split('')
    .filter(
      symb => (symb >= 'a' && symb <= 'z') || (symb >= 'A' && symb <= 'Z'),
    )
  return result
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    .join('')
}
