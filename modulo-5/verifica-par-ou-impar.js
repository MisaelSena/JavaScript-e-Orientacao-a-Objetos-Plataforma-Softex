function verificaParOuImpar(num) {
    const numero = num;
    const modulo = numero%2;
    if (modulo===0) {
        console.log(`O número ${numero} é par!`);
    } else {
        console.log(`O número ${numero} é ímpar!`);
    }
}

verificaParOuImpar(7);