// Shear combination
export function pattern (amount: number): Array<string> {
  const arr = Array.from({ length: amount }, (value, index) => index + 1)
  return arr.map(() => {
    arr.unshift(arr.pop())
    return arr.join('')
  }).reverse()
}
