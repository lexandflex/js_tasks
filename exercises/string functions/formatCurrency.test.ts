import { formatCurrency } from './formatCurrency'

describe('Duplicates counter', () => {
  test('should return 2,546.25', () => {
    expect(formatCurrency(2546.2562)).toBe('2,546.25')
  })
  test('should return 1,500.34', () => {
    expect(formatCurrency('1500.342626')).toBe('1,500.34')
  })
  test('should return 100.21', () => {
    expect(formatCurrency(100.2134)).toBe('100.21')
  })
  test('should return NaN', () => {
    expect(formatCurrency('100,2134')).toBe('NaN')
  })
  test('should return NaN', () => {
    expect(formatCurrency('1hello World')).toBe('NaN')
  })
  test('should be string', () => {
    expect(typeof formatCurrency('107.  85')).toEqual('string')
  })
})
