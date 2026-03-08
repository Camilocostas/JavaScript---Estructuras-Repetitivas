// primeras 30 primeras potencias de 4
const prompt = require("prompt-sync")({ sigint: true });

let potencia  = 1;

for (let i = 1; i <= 30; i++){
    potencia *= 4;  
    console.log("valor base 4 : "+ i + "= : " + potencia );
}

