function Pessoa(nome, idade, profissao, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.cidade = cidade;
}

const pessoas = [];

const pessoa1 = new Pessoa("Misael", 32, "Programador", "Camocim");
const pessoa2 = new Pessoa("Andreza", 29, "Analista de RH", "Camocim");
const pessoa3 = new Pessoa("Elisson", 25, "Operador", "Camocim");
const pessoa4 = new Pessoa("Marilene", 70, "Aposentada", "Camocim");

pessoas.push(pessoa1,pessoa2,pessoa3,pessoa4);

for (const pessoa of pessoas) {
    for (const dado in pessoa) {
        console.log(`${dado}: ${pessoa[dado]}`);        
    }
    console.log('**********************');
}
