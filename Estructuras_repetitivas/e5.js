// imprimir cuadrados del 1 al 20
const prompt = require("prompt-sync")({ sigint: true });

console.log("Cuadrados del 1 al 20 : ");

for (let i = 1; i <= 20; i++){
    let cuadrado = i * i;  
    console.log(i + " potencia = : " + cuadrado );
}