import { isAllArgsStringType } from '../../utils/validators'

// Machine-readable names
export function toMachineName (name, separator) {
  if (isAllArgsStringType(name, separator)) {
    const firstPoisiotn = +name.split('')[0]
    if (!isNaN(firstPoisiotn)) { name = name.slice(String(firstPoisiotn).length + 1, name.length) }
    const re = /[_\W\s*]/
    return name
      .split(re)
      .map(value => value)
      .join(separator)
      .toLowerCase()
  } else return new Error('All args should be a string type')
}
