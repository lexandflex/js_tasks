import { sortArr } from './sortArr'

let arr: Array<Record<string, number>>
beforeEach(() => {
  arr = [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
  ]
})

describe('Sorted object list', () => {
  test('should be array', () => {
    expect((Array.isArray(sortArr(arr, 'a')))).toBe(true)
  })
  test('should return result array', () => {
    const result: Array<Record<string, number>> = [
      { a: 4, b: 12 },
      { a: 3, b: 2 },
      { a: 2, b: 40 },
      { a: 1, b: 3 },
    ]
    expect(sortArr(arr, 'a')).toStrictEqual(result)
  })
  test('should return the same array', () => {
    expect(sortArr(arr, 'с')).toStrictEqual(arr)
  })
})
