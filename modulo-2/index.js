/*  OBSERVAÇÃO: Ao iniciar Javascript e Orientação a Objetos, criei um repositório
    já com o node e separei os módulos do curso em pastas para resolver os exercícios.

    ABAIXO SEGUE DESCRIÇÃO DO EXERCÍCIO RESOLVIDO EM AULAS PASSADAS:
    
    Faça uma função calculadora de dois números com três parâmetros: 
    os dois primeiros serão os números da operação e o terceiro será a 
    entrada que definirá a operação a ser executada. Considera a seguinte 
    definição:
    1. Soma
    2. Subtração
    3. Multiplicação
    4. Divisão

    Caso seja inserido um número de operação que não exista, o resultado 
    deverá ser 0.
*/

const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt("Informe o 1º número: "));
const operacao = prompt("Informe a operação (+,-,* ou /): ");
const numero2 = parseFloat(prompt("Informe o 2º número: "));
let resultado = 0;

function calculadora() {
    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            console.log(`O resultado da soma é: ${resultado}`);        
            break;
    
        case "-":
            resultado = numero1 - numero2;
            console.log(`O resultado da subtração é: ${resultado}`);        
            break;

        case "*":
            resultado = numero1 * numero2;
            console.log(`O resultado da Multiplicação é: ${resultado}`);        
            break;
        
        case "/":
            resultado = numero1 / numero2;
            console.log(`O resultado da Divisão é: ${resultado}`);        
            break;
    
        default:
            console.log(`Valores incorretos! O resultado é: ${resultado}`);            
            break;
    }
    
}
calculadora();



