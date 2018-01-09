// @flow

var test: string = 'test'

var test2 = function test2 (number: number): number {
  return number
}

export default {
  test: () => {
    return test
  },
  test2: test2
}
