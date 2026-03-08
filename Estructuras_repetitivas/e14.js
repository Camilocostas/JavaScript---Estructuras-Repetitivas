const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 14 - Tabla de m filas x n columnas

let filas = parseInt(prompt("Ingrese el número de filas (m): "));
let columnas = parseInt(prompt("Ingrese el número de columnas (n): "));

while (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    console.log("Error: ingrese números enteros positivos.");
    filas = parseInt(prompt("Ingrese el número de filas (m): "));
    columnas = parseInt(prompt("Ingrese el número de columnas (n): "));
}

let caracter = prompt("Ingrese el carácter a imprimir: ");
if (caracter === "") caracter = "*";
// Solo toma el primer carácter si el usuario escribe varios
caracter = caracter[0];

console.log(`\nTabla de ${filas} filas x ${columnas} columnas:\n`);

for (let i = 0; i < filas; i++) {
    console.log(caracter.repeat(columnas));
}