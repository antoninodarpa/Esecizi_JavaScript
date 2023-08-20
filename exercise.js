const promise1 = (isLogged) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged) {
        resolve(Math.random());
      } else {
        reject(new Error("User is not logged in"));
      }
    }, 1000);
  });
};

const promise2 = (randomNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("Random number is not greater than 0.5"));
      }
    }, 1000);
  });
};
