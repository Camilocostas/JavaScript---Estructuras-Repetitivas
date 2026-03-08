const prompt = require("prompt-sync")({ sigint: true });

// visualizacion de figura triangular tipo triangulo rectangulo
let num_lineas = 5;
let asterisco = '';

// Parte superior del rombo
for (let fila = 0; fila < 5; fila++) {
    for (let x = 0; x <= fila; x++){
        asterisco += '*';
    }
    console.log(asterisco);
    asterisco = '';
}