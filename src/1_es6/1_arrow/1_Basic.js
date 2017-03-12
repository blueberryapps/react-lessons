/*
 * 1. Try to refactor this method to es6 using arrow
 * https://github.com/lukehoban/es6features#arrows
**/

const numbers = [1, 2, 3, 4, 5];
const timesTwo = numbers.map(function (number) { // eslint-disable-line prefer-arrow-callback
  return number * 2;
});

it('returns array with correct values', () => {
  expect(timesTwo).toEqual([2, 4, 6, 8, 10])
})
