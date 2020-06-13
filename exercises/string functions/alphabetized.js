import { isAllArgsStringType } from '../../utils/validators'

// Alphabetized
export function alphabetized (text) {
  if (isAllArgsStringType(text)) {
    const result = text
      .split('')
      .filter(
        symb => (symb >= 'a' && symb <= 'z') || (symb >= 'A' && symb <= 'Z'),
      )
    return result
      .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
      .join('')
  } else return new Error('All args should be a string type')
}
