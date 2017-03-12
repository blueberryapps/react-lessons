/*
 * 2. Try to refactor code below to es6 using rest
 * https://github.com/lukehoban/es6features#default--rest--spread
 */

function getAllArgs(a, b) {
  const args = Array.prototype.slice.call(arguments, getAllArgs.length); // eslint-disable-line prefer-rest-params, max-len

  return {
    parameters: {a: a, b: b},
    restArguments: args
  };
}

it('returns correct parameters', () => {
  expect(getAllArgs(1, 2, 3, {foo: 'bar'}).parameters)
    .toEqual({a: 1, b: 2})
})

it('returns correct rest arguments', () => {
  expect(getAllArgs(1, 2, 3, {foo: 'bar'}).restArguments)
    .toEqual([3, {foo: 'bar'}])
})

const args = [1, 2, 3, {foo: 'bar'}]

it('returns correct rest arguments with passing dynamic arguments', () => {
  expect(getAllArgs(...args).restArguments)
    .toEqual([3, {foo: 'bar'}])
})
