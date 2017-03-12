/*
* 4a. Refactor this forEach to use reduce
**/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let sum = 0

numbers.forEach(function(v) {
  sum += v
});

it('returns sum of all values in array', () => {
  expect(sum).toEqual(45)
})
