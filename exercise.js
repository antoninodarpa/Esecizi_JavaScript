function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40, 50));
