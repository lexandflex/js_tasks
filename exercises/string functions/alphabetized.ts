// Alphabetized
export function alphabetized (text: string): string {
  return text
    .replace(/[^a-z]/gi, '')
    .split('')
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    .join('')
}
