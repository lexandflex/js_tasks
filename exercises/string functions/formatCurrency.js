import { isAllArgsNumberType } from '../../utils/validators'

// Сurrency format
export function formatCurrency (amount) {
  if (isAllArgsNumberType(amount)) return (Math.trunc(amount * 100) / 100).toLocaleString()
  else return new Error('All args should be a number type')
}
