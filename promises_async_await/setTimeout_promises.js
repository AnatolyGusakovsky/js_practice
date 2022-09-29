// The built-in function setTimeout uses callbacks. Create a promise-based alternative.
//   The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   // your code
// }
// delay(3000).then(() => alert('runs after 3 seconds'));


function delay(ms) {
  const start_time = new Date();
  const end_time = +start_time + ms;

  return new Promise( function(resolve, reject) {

    while(+new Date() < end_time) {
    }
    resolve(ms);
  })
}

delay(5000).then(() => console.log('runs after 5 seconds'));