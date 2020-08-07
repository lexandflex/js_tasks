import { sequenceSum } from './sequenceSum'

describe('Sequence sum', () => {
  test('Should return 12', () => {
    expect(sequenceSum(2, 6, 2)).toBe(12)
  })
  test('Should return 0', () => {
    expect(sequenceSum(2, -4, -3)).toBe(0)
  })
  test('Should return number', () => {
    expect(typeof sequenceSum(-2, -3, 5)).toBe('number')
  })
})
