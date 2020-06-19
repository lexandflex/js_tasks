// Alphabetized
export function alphabetized2 (text) {
  return text
    .replace(/[^a-z]/gi, '')
    .split('')
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    .join('')
}
