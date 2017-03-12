/*
 * 1. Try to refactor code below to es6 using default
 * https://github.com/lukehoban/es6features#default--rest--spread
 */

function getName(firstName, lastName) {
  const fName = firstName || '';
  const lName = lastName || '';

  return `Mr/Mrs ${fName} ${lName}`.trim();
}

it('returns correct name and last name', () => {
  expect(getName('Eva', 'Tester')).toEqual('Mr/Mrs Eva Tester')
})

it('returns default values', () => {
  expect(getName()).toEqual('Mr/Mrs')
})

it('returns default values', () => {
  expect(getName(undefined, undefined)).toEqual('Mr/Mrs')
})
