/*
 * 1. Try to refactor code below to es6 using template strings
 * https://github.com/lukehoban/es6features#template-strings
*/

const name = 'John';
const age = 30;

const sentence = 'Mr ' + name + ' is ' + age + ' years old'; // eslint-disable-line prefer-template
const multiline = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' +
  'Ut fermentum augue a hendrerit rhoncus. Morbi consequat porta molestie. \n' +
  'Sed quis cursus urna, at egestas lorem. Maecenas varius, nunc ut euismod semper, \n' +
  'quam velit aliquam augue, at accumsan ipsum ante ut tellus. Mauris ultrices libero \n' +
  'et placerat aliquet. Aenean suscipit mauris sem, id porttitor mi mollis in. Ut sodales, \n' +
  'elementum laoreet aliquet, tortor felis ornare metus, non venenatis arcu odio et risus.\n'

it('returns concated string into sentence', () => {
  expect(sentence).toEqual('Mr John is 30 years old')
})

it('returns multiline string', () => {
  expect(multiline).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nUt fermentum augue a hendrerit rhoncus. Morbi consequat porta molestie. \nSed quis cursus urna, at egestas lorem. Maecenas varius, nunc ut euismod semper, \nquam velit aliquam augue, at accumsan ipsum ante ut tellus. Mauris ultrices libero \net placerat aliquet. Aenean suscipit mauris sem, id porttitor mi mollis in. Ut sodales, \nelementum laoreet aliquet, tortor felis ornare metus, non venenatis arcu odio et risus.\n')
})
