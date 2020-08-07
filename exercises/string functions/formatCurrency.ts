// Сurrency format
export function formatCurrency (amount: number | string): string {
  return (Math.trunc(+amount * 100) / 100).toLocaleString()
}
