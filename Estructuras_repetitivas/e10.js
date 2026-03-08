const prompt = require("prompt-sync")({ sigint: true });

// Orden inverso del alfabeto. utilizamos codigo ASCII para convertir números a letras. El código ASCII de 'A' es 65 y el de 'Z' es 90.
for (let inicio = 90; inicio >= 65; inicio--) {  // 90=Z, 65=A
    let linea = "";
    for (let letra = inicio; letra >= 65; letra--) {
        linea += String.fromCharCode(letra);  // Convierte número a letra
    }
    console.log(linea);
}