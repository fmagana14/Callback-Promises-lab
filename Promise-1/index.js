// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---"); //call reject seconnd
    reject("--- Oops ---"); //call reject seconnd
    resolve('>>> Success! <<<');

  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// console.log displays the project rejected message

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// when calling both it will display a console.log of success.

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// the order does matter, once i put the reject over the resolve the terminal displayed the reject first. this means the function will call whatever comes first. 

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// the terminal displays whatever comes first, so for this example it will display the reject first and dismiss the resolve all together. 

