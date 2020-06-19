// Replace letters in their positions
export function replaceWithAlphPositions (text) {
  return text
    .toLowerCase()
    .split('')
    .filter(symb => symb >= 'a' && symb <= 'z')
    .map(value => value.charCodeAt() - 96)
    .join(' ')
}
