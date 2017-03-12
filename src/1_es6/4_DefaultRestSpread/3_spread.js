/*
 * 2.1 Try to refactor code below to es6 using spread
 * https://github.com/lukehoban/es6features#default--rest--spread
 */

const second = ['2', '3'];
const first = ['1', '4', '5'];

const insertSecondArrayToSecondPosition = (first, second) => {
  return first.slice(0, 1).concat(second).concat(first.slice(1));
}

it('returns concated array', () => {
  expect(insertSecondArrayToSecondPosition(first, second))
    .toEqual(['1', '2', '3', '4', '5'])
})


/*
 * 2.2 Try to refactor 'copy of array' code below to es6 using spread
 */

const addFourToArray = (array) => {
  const arr2 = array.slice();
  arr2.push(4);
  return arr2;
}

it('creates new array without modification of old one', () => {
  const arr = [1, 2, 3];
  expect(addFourToArray(arr)).not.toEqual(arr);
})
