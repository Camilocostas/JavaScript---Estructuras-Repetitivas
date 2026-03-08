const prompt = require("prompt-sync")({ sigint: true });

// Programa que visualice un rombo en forma vertical
let num_lineas = 5;
let espacio = '';
let asterisco = '';

// Parte superior del rombo
for (let fila = 1; fila <= num_lineas; fila++) {
    for (let espacios = num_lineas - fila; espacios > 0; espacios--) {
        espacio += ' ';
    }
    
    
    for (let x = 1; x < 2 * fila; x++) {
        asterisco += '*';
    }
    
    console.log(espacio + asterisco);
    espacio = '';
    asterisco = '';
}

// Parte inferior del rombo
for (let fila = num_lineas - 1; fila >= 1; fila--) {
    for (let espacios = num_lineas - fila; espacios > 0; espacios--) {
        espacio += ' ';
    }

    for (let x = 1; x < 2 * fila; x++) {
        asterisco += '*';
    }
    
    console.log(espacio + asterisco);
    espacio = '';
    asterisco = '';
}       