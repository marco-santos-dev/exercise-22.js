// 22. Palíndromo. Leia uma palavra e inverta seu conteúdo utilizando um for decrescente. Informe se a palavra é um palíndromo, ou seja, se pode ser lida da mesma forma de trás para frente.

const word = prompt("Digite uma palavra:").toLowerCase();

let reversedWord = "";

for (let index = word.length - 1; index >= 0; index--) {
    reversedWord += word[index];
}

if (word === reversedWord) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}

console.log(`Palavra invertida: ${reversedWord}`);