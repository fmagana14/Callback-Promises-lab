const tortise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tortise Wins!");
  }, 1000);
});

const hare = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hare wins!");
  }, 2000);
});

const rabbit = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Rabbit wins!");
  }, 500);
});

const dog = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dog wins!");
  }, 1500);
});

Promise.race([tortise, hare, rabbit, dog])
  .then(result => {
    console.log(result); // Expected output: "Rabbit wins!"
  })
  .catch(error => {
    console.error("Error:", error);
  });
