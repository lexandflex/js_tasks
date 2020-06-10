import { isAllArgsNumberType } from '../../utils/validators'

// Сurrency format
export function formatCurrency (amount) {
  const checkTypes = isAllArgsNumberType(amount)
  if (typeof checkTypes === 'object') return checkTypes
  return (Math.trunc(amount * 100) / 100).toLocaleString()
}
