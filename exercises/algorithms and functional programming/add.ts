// Functional addition
export function add (n: number) {
  return function (num: number) : number {
    return num + n
  }
}
