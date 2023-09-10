class Pessoa {
    nome;
    peso;
    constructor(nome,peso){
        this._nome = nome;
        this._peso = peso;
    }

    getNome(){
        return this._nome;
    }
    getPeso(){
        return this._peso;
    }

    setPeso(peso){
        this._peso = peso;
    }
}

const pessoa = new Pessoa("Misael",88);

console.log(`${pessoa.getNome()} pesa ${pessoa.getPeso()}`);
pessoa.setPeso(75);
console.log(`${pessoa.getNome()} agora pesa ${pessoa.getPeso()}`);

