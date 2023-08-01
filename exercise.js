let num1 = 10;
let num2 = 20;
console.log("Prima dello scambio: ", num1, num2); // Prima dello scambio: 10 20

// Scambio di variabili utilizzando la destrutturazione
[num1, num2] = [num2, num1];

console.log("Dopo lo scambio: ", num1, num2); // Dopo lo scambio: 20 10

