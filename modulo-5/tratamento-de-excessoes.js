/*
    Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números 
    precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro 
    do código. Utilize os métodos try(), catch() e finally() para realizar a captura e 
    o tratamento dessa exceção.
*/

try {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
    
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Por favor, insira números válidos.");
    }
  
    const resultado = numero1 / numero2;
  
    if (!isFinite(resultado)) {
      throw new Error("A divisão resultou em um valor infinito.");
    }
  
    console.log(`Resultado da divisão: ${resultado}`);
  } catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
  } finally {
    console.log("Este bloco será executado independentemente de haver uma exceção ou não.");
  }
  