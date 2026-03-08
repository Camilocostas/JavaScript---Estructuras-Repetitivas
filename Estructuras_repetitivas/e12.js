const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 12 - Patrón del abecedario
const abecedario = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

for (let i = 1; i <= 26; i++) {
    let linea = "";
    for (let j = 0; j < i; j++) {
        linea += abecedario[j];
        if (j < i - 1) linea += " ";
    }
    console.log(linea);
}