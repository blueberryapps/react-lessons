/*
* Check the example
**/

function delay(duration = 0) {
  return new Promise((resolve) => {
    console.log('called delay', duration);
    setTimeout(resolve, duration);
  });
}

const timeStart = new Date();

it('returns result after some time', (done) => {

  const promise = delay(300)
    .then(() => {
      console.log('Real Duration #1', new Date() - timeStart);
    })
    .then(() => {
      console.log('Real Duration #2', new Date() - timeStart);
      throw new Error('ERROR');
    })
    .catch((err) => {
      console.log('catched error', err);
      return Promise.all([delay(100), delay(200)]);
    })
    .then(() => done())

})
