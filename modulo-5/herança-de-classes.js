class Pessoa {  
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

class Funcionario extends Pessoa {
    constructor(nome, peso, matricula, cargo){
        super(nome, peso)
        this._matricula = matricula;
        this._cargo = cargo;
    }

    getMatricula(){
        return this._matricula;
    }
    getCargo(){
        return this._cargo;
    }
    setCargo(novoCargo){
        this._cargo = novoCargo;
    }
}

const funcionario1 = new Funcionario("Misael",88,123,"Analista de Dados");
const funcionario2 = new Funcionario("Andreza",65,321,"Operadora de TLMKT");

console.log(funcionario1);
console.log(funcionario2);