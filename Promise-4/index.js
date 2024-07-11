const food = new Promise((resolve, reject) => {
  // resolve food here (challenge 1):
  resolve('Pizza'); 
});

// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the promise `food` with the `.then()` syntax 
// and print your favorite food to the console. 

food.then(favoriteFood => {
  console.log(favoriteFood); // Output: Pizza
}).catch(err => {
  console.log(err); // this shouldn't run becase the promis is sent successfully 
});