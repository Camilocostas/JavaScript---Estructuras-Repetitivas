const prompt = require("prompt-sync")({ sigint: true });

//Suma de los primeros 30 números pares

let suma = 0;
for (let i = 0; i < 30; i++){
    let numero_par = 2 * i;
    suma += numero_par;
}   
console.log("La suma de los primeros 30 numeros pares es: " + suma);
