import { isAllArgsStringType } from '../../utils/validators'

// Machine-readable names
export function toMachineName (name, separator) {
  const checkTypes = isAllArgsStringType(name, separator)
  if (typeof checkTypes === 'object') return checkTypes
  const firstPoisiotn = +name.split('')[0]
  if (!isNaN(firstPoisiotn)) { name = name.slice(String(firstPoisiotn).length + 1, name.length) }
  const re = /[_\W\s*]/
  return name
    .split(re)
    .map(n => n)
    .join(separator)
    .toLowerCase()
}
