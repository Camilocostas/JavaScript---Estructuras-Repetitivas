const prompt = require("prompt-sync")({ sigint: true });

// visualizacion de figura triangular con numeros
let num_lineas = 7;

// Parte superior del rombo
for (let fila = 1; fila <= 4; fila++) {
    let linea = "";
    for (let x = 1; x <= fila; x++){
        linea += x + "";
    }
        console.log(linea);
}

    for (let fila = 3; fila >= 1; fila --) {
        let linea = ""; 
        for (let x = 1; x <= fila; x++){
            linea += x + "";
        }
    console.log(linea);
    }

