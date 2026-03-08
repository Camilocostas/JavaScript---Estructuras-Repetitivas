const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 13 - Factorial
let numero = parseInt(prompt("Ingrese un número entero no negativo: "));

while (isNaN(numero) || numero < 0) {
    console.log("Error: ingrese un número entero no negativo.");
    numero = parseInt(prompt("Ingrese un número entero no negativo: "));
}

let factorial = 1n; 
let n = BigInt(numero); // BigInt: soporta números enormes sin perder precisión

for (let i = 1n; i <= n; i++) {
    factorial *= i;
}

console.log(`${numero}! = ${factorial}`);