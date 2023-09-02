document.addEventListener("click",(event)=>{
    const idBotao = event.target.id;
    console.log(idBotao);

    switch (idBotao) {
        case "soma":
            soma();
            break;

        case "subtracao":
            const numero1Sub = prompt("Numero 1:");
            const numero2Sub = prompt("Numero 2:");
            const resultadoSub = subtracao(numero1Sub,numero2Sub);
            alert(`Resultado: ${resultadoSub}`);
            break;

        case "multiplicacao":
            //Arrow Function
            const numero1Mult = Number(prompt("Numero 1:"));
            const numero2Mult = Number(prompt("Numero 2:"));
            const multiplicacao = (numero1Mult,numero2Mult)=>{return numero1Mult*numero2Mult;}
            const resultadoMult = multiplicacao(numero1Mult,numero2Mult);    
            alert(`Resultado: ${resultadoMult}`);                
            break;
    
        default:
            break;
    }
})
//Função Tradicional
function soma() {
    const numero1 = prompt("Numero 1:");
    const numero2 = prompt("Numero 2:");
    const soma = Number(numero1)+Number(numero2);
    alert(`Resultado: ${soma}`);
}
//Função Tradicional com parâmetros e retorno
function subtracao(numero1,numero2) {    
    const subtracao = Number(numero1)-Number(numero2);
    return subtracao;
}