import { maxTripletSum } from './maxTripletSum'

describe('Sum of the 3 biggest nums', () => {
  test('should return 17', () => {
    expect(maxTripletSum([3, 2, 6, 8, 2, 3])).toBe(17)
  })
  test('should be greater than 17', () => {
    expect(maxTripletSum([3.58, 2, 6, 8, 2, 3])).toBeGreaterThan(17)
  })
  test('', () => {
    expect(typeof maxTripletSum([17, 33, -98, 8, 22, 3])).toEqual('number')
  })
})
