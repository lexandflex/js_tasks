import { isAllArgsStringType } from '../../utils/validators'

// Replace letters in their positions
export function replaceWithAlphPositions (text) {
  const checkTypes = isAllArgsStringType(text)
  if (typeof checkTypes === 'object') return checkTypes
  return text
    .toLowerCase()
    .split('')
    .filter(symb => symb >= 'a' && symb <= 'z')
    .map(v => v.charCodeAt() - 96)
    .join(' ')
}
