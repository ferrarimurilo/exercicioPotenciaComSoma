const prompt = require("prompt-sync")({sigint: true});

let variavel = +0;

console.log("Iremos calcular o exponencial")

let base = +prompt("Digite o número da base: ");
let expoente = +prompt("Digite o número do expoente: ");

variavel = base

for(j = 0; j < expoente; j++){
    for(i = 0; i < base; i ++){
        variavel += variavel;
    }
    console.log(variavel);
}

// Não consegui // REFAZER