// Machine-readable names
export function toMachineName (name: string, separator: string): string {
  const re = /[_\W\s]/g
  const splitedArr = name.toLowerCase().split(re)
  const filteredArr = splitedArr.filter(value => value.length > 0)
  if (!Number.isNaN(+filteredArr[0])) filteredArr.shift()
  return filteredArr.join(separator)
}
