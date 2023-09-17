/* 
    Liste, pelo menos, dois métodos comuns usados para manipular strings em 
    JavaScript. Depois, desenvolva um código que exemplifique o uso de um desses métodos.
*/

const frase = "Misael Sena é programador!";
const palavras = frase.split(" "); // Divide a frase em palavras usando o espaço como separador
console.log(palavras); 

const texto = "JavaScript é sensacional!";
const novoTexto = texto.replace("JavaScript", "Node.js");
console.log(novoTexto);

