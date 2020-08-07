// Replace letters in their positions
export function replaceWithAlphPositions (text: string): string {
  return text
    .toLowerCase()
    .split('')
    .filter(symb => symb >= 'a' && symb <= 'z')
    .map(value => value.charCodeAt(0) - 96)
    .join(' ')
}
