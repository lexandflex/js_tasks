import { toMachineName } from './toMachineName'

describe('Machine-readable names', () => {
  test('should return resultString', () => {
    expect(toMachineName('Hello, my name is Andrew', '-')).toBe('hello-my-name-is-andrew')
  })
  test('should return empty string', () => {
    expect(toMachineName('Lorem        ipsum sit                 DOLOR', '_')).toBe('lorem_ipsum_sit_dolor')
  })
  test('should return empty string', () => {
    expect(toMachineName('3 basics and 1 advance', '  ')).toBe('basics  and  1  advance')
  })
  test('should be string', () => {
    expect(typeof toMachineName('Hello', '-')).toEqual('string')
  })
})
