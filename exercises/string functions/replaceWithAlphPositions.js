import { isAllArgsStringType } from '../../utils/validators'

// Replace letters in their positions
export function replaceWithAlphPositions (text) {
  if (isAllArgsStringType(text)) {
    return text
      .toLowerCase()
      .split('')
      .filter(symb => symb >= 'a' && symb <= 'z')
      .map(value => value.charCodeAt() - 96)
      .join(' ')
  } else return new Error('All args should be a string type')
}
