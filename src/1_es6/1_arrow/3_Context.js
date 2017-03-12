const DataSource = require('../lib/dataSource');

/*
 * 2. Try to refactor this method to es6 using arrow and change this binding.
 * https://github.com/lukehoban/es6features#arrows
 **/

function FooCtrl(FooService) {
  this.user = {};
  const that = this;

  FooService
    .getUser(function (response) { // eslint-disable-line prefer-arrow-callback
      that.user = response;
    });
}

const data = new DataSource();
const ctrs = new FooCtrl(data);

it('returns user age', () => {
  expect(data.user.age).toEqual(ctrs.user.age)
})

it('returns user name', () => {
  expect(data.user.name).toEqual(ctrs.user.name)
})
