// suma de dos numeros enteros
const prompt = require("prompt-sync")({ sigint: true });

let suma = 0;

for (let i = 1; i <= 100; i++){
    suma += i;
}
console.log(suma);

