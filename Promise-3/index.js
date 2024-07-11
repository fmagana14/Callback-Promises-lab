function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}

greet(123) // Passing a number instead of a string
  .then(str => uppercaser(str))
  .then(str => console.log(str))
  .catch(err => console.log(err)); // Output: Greet expects a string!


// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 


greet('Your name') 
  .then(str => uppercaser(123)) // Passing a number instead of a string
  .then(str => console.log(str))
  .catch(err => console.log(err)); // Output: Argument to uppercaser must be string

// Challenges: get greet() to fail by passing a non string value
// What happens? 

// Challenge: get uppercaser() to fail by passing a non string value
// What happens? 

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
