const prompt = require("prompt-sync")({ sigint: true });

//numeros primos entre 2 y 1000

/*  declaramos variables dentro del ciclo, en lugar de declararlas antes de forma externa
    let numero = 2
    let esPrimo = true;
    let i = 2;
*/

for (let numero = 2; numero <= 1000; numero++){
    let esPrimo = true;

    for(let i = 2; i < numero; i++){
        if (numero % i === 0){
            esPrimo = false;
        }
    }
    if (esPrimo){
        console.log(numero);
    }
}