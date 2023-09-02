//Javascript utilizado no verifica-aprovacao.html que possui os botões para execução do código.
//O código abaixo tem apenas um cálculo simples para atender a solicitação do exercício. Ainda sem o os tratamentos de erro.
document.addEventListener("click",(event)=>{
    const idBotao = event.target.id;
    console.log(idBotao);

    switch (idBotao) {
        case "calcularAprovacao":
            calculoAprovacao();
            break;

        case "calcularTerceiraNota":
            notaParaAprovacao();
            break;
    
        default:
            break;
    }
})

function calculoAprovacao() {
    const nota1 = prompt("Nota 1:");
    const nota2 = prompt("Nota 2:");
    const nota3 = prompt("Nota 3:");
    const media = (Number(nota1)+Number(nota2)+Number(nota3))/3;

    if (media>=7) {
        alert(`Aluno aprovado com média ${media.toFixed(2)}`);
    } else {
        alert(`Aluno reprovado com média ${media.toFixed(2)}`);
    }
}

function notaParaAprovacao() {
    const nota1 = prompt("Nota 1:");
    const nota2 = prompt("Nota 2:");
    const notaNecessaria = 21-Number(nota1)-Number(nota2);

    if (notaNecessaria>10) {
        alert(`A nota da terceira prova para ser aprovado com média 7 deve ser: ${notaNecessaria.toFixed(2)}. Você será reprovado por média!`);
    } else {
        alert(`A nota da terceira prova para ser aprovado com média 7 deve ser: ${notaNecessaria.toFixed(2)}`);
    }
    

}