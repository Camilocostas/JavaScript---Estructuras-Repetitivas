const prompt = require("prompt-sync")({ sigint: true });

// Solicitar n al usuario
let n = parseInt(prompt("Ingrese un número superior a 6: "));

// Validar que n sea superior a 6
while (n <= 6) {
    console.log("Error: El número debe ser superior a 6.");
    n = parseInt(prompt("Ingrese un número superior a 6: "));
}

// Mostrar múltiplos de 3 entre 6 y n
let resultado = "";
for (let i = 6; i <= n; i++) {
    if (i % 3 === 0) {
        resultado += i + " ";
    }
}
console.log(`\nMúltiplos de 3 entre 6 y ${n}:`);
console.log(resultado);