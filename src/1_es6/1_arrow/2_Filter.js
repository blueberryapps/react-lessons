/*
* 2. Try to refactor this method to es6 using arrow
* https://github.com/lukehoban/es6features#arrows
**/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const es5OddNumbers = numbers.filter(function (number) { // eslint-disable-line prefer-arrow-callback, max-len
  return number % 2;
});

it('returns array with correct values', () => {
  expect(es5OddNumbers).toEqual([1, 3, 5, 7, 9])
})
