const prompt = require("prompt-sync")({ sigint: true });

//programa que solicite un valor n y visualice n=6

let n = parseInt(prompt("Ingrese un numero no negativo: "));

//filas de mayor a menor
for (let fila = n; fila >= 1; fila--){
    let linea = "";
//numeros de cada fila, siempre comenzando en 1
    for(let numero = 1; numero<= fila; numero++){
        linea += numero + " ";
    }
    console.log(linea);
}


