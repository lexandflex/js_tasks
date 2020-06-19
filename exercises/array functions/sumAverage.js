// Arrays average sum
export function sumAverage (arr) {
  console.log(arr)
  return Math.floor(
    arr.reduce((acc, subValue) => {
      return acc + subValue.reduce((acc, value) => acc + value / subValue.length, 0)
    }
    , 0),
  )
}
