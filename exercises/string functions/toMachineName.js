// Machine-readable names
export function toMachineName (name, separator) {
  const re = /[_\W\s]/g
  const splitedArr = name.toLowerCase().split(re)
  const filteredArr = splitedArr.filter(value => value.length > 0)
  if (!isNaN(+filteredArr[0])) { filteredArr.shift() }
  return filteredArr.join(separator)
}
