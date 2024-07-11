const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fourth promise resolved");
  }, 10);
});

const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise failed");
  }, 1500);
});

Promise.all([promise1, promise2, promise3, promise4, failingPromise])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error("Error:", error);
  });
