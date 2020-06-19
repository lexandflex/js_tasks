// Сurrency format
export function formatCurrency (amount) {
  return (Math.trunc(amount * 100) / 100).toLocaleString()
}
