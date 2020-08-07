import { replaceWithAlphPositions } from './replaceWithAlphPositions'

describe('Replace letters in their positions', () => {
  test('should return resultString', () => {
    const resultString = '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
    expect(replaceWithAlphPositions('The sunset sets at twelve o’clock.')).toBe(resultString)
  })
  test('should return empty string', () => {
    expect(replaceWithAlphPositions('....!$')).toBe('')
  })
  test('should be string', () => {
    expect(typeof replaceWithAlphPositions('Hello')).toEqual('string')
  })
})
