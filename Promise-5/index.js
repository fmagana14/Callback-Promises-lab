function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('French toast');
    } else if (timeOfDay === 'lunch') {
      resolve('Sandwich');
    } else if (timeOfDay === 'dinner') {
      resolve('I think ill go to BJs ');
    } else {
      reject("I'm not really hungry");
    }
  });
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch')
  .then(food => {
    console.log(food); // Output: Sandwich
  })
  .catch(err => {
    console.log(err);
  });

// Handle this Promise: 
whatToEat('elevens')
  .then(food => {
    console.log(food);
  })
  .catch(err => {
    console.log(err); // Output: I don't eat between meal snacks!
  });

  // whatToEat('breakfast')
  // .then(food => {
  //   console.log(food); // Output: French toast
  // })
  // .catch(err => {
  //   console.log(err); // Output: I don't eat between meal snacks!
  // });

  // whatToEat('dinner')
  // .then(food => {
  //   console.log(food); // Output: I think ill go to BJs
  // })
  // .catch(err => {
  //   console.log(err); // Output: I don't eat between meal snacks!
  // });
