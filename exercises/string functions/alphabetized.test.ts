import { alphabetized } from './alphabetized'

describe('Alphabetized', () => {
  test('should return eHllo', () => {
    expect(alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!')).toBe('eHllo')
  })
  test('should return BbeehHilloTy', () => {
    expect(alphabetized('The Holy      Bible.')).toEqual('BbeehHilloTy')
  })
  test('should be string', () => {
    expect(typeof alphabetized('The Holy      Bible.')).toEqual('string')
  })
  test('should be empty string', () => {
    expect(alphabetized('? ! .')).toEqual('')
  })
})
