const prompt = require("prompt-sync")({ sigint: true });

const totalFilas = 5;

for (let fila = 1; fila <= totalFilas * 2 - 1; fila++) {
    const asteriscos = fila <= totalFilas ? fila : totalFilas * 2 - fila;
    console.log("*".repeat(asteriscos));
}