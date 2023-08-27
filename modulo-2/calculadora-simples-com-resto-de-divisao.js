function calculadora() {
    const numero1 = parseInt(prompt("Informe o primeiro número inteiro:"));
    const numero2 = parseInt(prompt("Informe o segundo número inteiro:"));
    const operacao = prompt("Informe a Operação(+,-,* ou /):");
    let resultado;
    
    switch (operacao) {
        case "+":
            resultado = numero1+numero2;
            alert("Resultado: "+resultado);
            break;
        case "-":
            resultado = numero1-numero2;
            alert("Resultado: "+resultado);
            break;
        case "*":
            resultado = numero1*numero2;
            alert("Resultado: "+resultado);
            break;
        case "/":
            const modulo = numero1 % numero2;
            resultado = numero1/numero2;
            if (modulo>0) {
                alert("Resultado: "+parseInt(resultado)+" com resto: "+modulo);
            } else {
                alert("Resultado: "+parseInt(resultado));
            }            
            break;
    
        default:
            alert("Valores ou operação inválidos!")
            break;
    }
    
}

calculadora();
