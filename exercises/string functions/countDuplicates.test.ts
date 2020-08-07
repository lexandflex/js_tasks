import { countDuplicates } from './countDuplicates'

describe('Сurrency format', () => {
  test('should return 0', () => {
    expect(countDuplicates('abcde')).toBe(0)
  })
  test('should return 2', () => {
    expect(countDuplicates('aabbcde')).toBe(2)
  })
  test('should return 2', () => {
    expect(countDuplicates('aabBcde')).toBe(2)
  })
  test('should return 1', () => {
    expect(countDuplicates('indivisibility')).toBe(1)
  })
  test('should be number', () => {
    expect(typeof countDuplicates('The Holy      Bible.')).toEqual('number')
  })
  test('should be 6', () => {
    expect(countDuplicates('aA11&&#$%#$%')).toEqual(6)
  })
})
