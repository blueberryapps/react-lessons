/*
 * 1. Try to refactor this method to es6 using 3_destructing
 * https://github.com/lukehoban/es6features#destructuring
 */

const user = {
  name: 'John',
  age: undefined,
};

/*
* START REFACTOR HERE
**/

const name = user.name || '';
const getAge = (user) => user.age || 18;

it('returns name', () => {
  expect(name).toEqual('John')
})

it('returns age', () => {
  expect(getAge(user)).toEqual(18)
})

