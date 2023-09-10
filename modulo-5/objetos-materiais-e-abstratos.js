/*
Objetos Materiais:

    Carro:
        Atributos:
            Marca
            Modelo
            Ano
        Métodos:
            Acelerar
            Frear
            Trocar Marcha

    Animal:
        Atributos:
            Nome
            Peso
            Cor
        Métodos:
            Emite Som
            Andar
            Dormir

Objetos Abstratos:

    Conta Bancária:
        Atributos:
            Saldo
            Conta
            Titular
        Métodos:
            Depositar
            Sacar
            Mostrar saldo

    Agenda:
        Atributos:
            Data
            Compromisso
            Local
        Métodos:
            Agendar
            Mostrar Agendamentos
            Limpar Agenda
*/

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(){
        console.log("Carro Acelerando!");
    }
    frear(){
        console.log("Carro Freando!");
    }
    trocarMarcha(){
        console.log("Trocando Marcha!");
    }
}

class Animal{
    constructor(nome, peso, cor){
        this.nome = nome;
        this.peso = peso;
        this.cor = cor;
    }

    emiteSom(som){
        console.log(`O ${this.nome} está ${som}`);
    }
    anda(){
        console.log(`O ${this.nome} está andando`);
    }
    dorme(){
        console.log(`O ${this.nome} está dormindo`);
    }
}

class ContaBancaria{
    constructor(saldo, conta, titular){
        this.saldo = saldo;
        this.conta = conta;
        this.titular = titular;
    }

    getSaldo(){
        return this.saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
}

class Compromisso{
    constructor(data, compromisso, local){
        this.data = data;
        this.compromisso = compromisso;
        this.local = local;        
    }  

}

class Agenda extends Compromisso{
    constructor(data, compromisso, local, listaCompromissos){
        super(data, compromisso, local)
        this.listaCompromissos = [];
    }
    mostrarAgendamentos(){
        console.log('Agendamentos:')
        console.log(this.listaCompromissos);
    }
    agendar(compromisso){        
        this.listaCompromissos.push(compromisso);        
    }
    limparAgenda(){
        this.listaCompromissos = [];
        console.log('Agendamentos após limpeza:')
        console.log(this.listaCompromissos);
    }
}
const gol = new Carro("VW","Gol",2014);

gol.acelerar();
gol.frear();
gol.trocarMarcha();

const cachorro = new Animal("Cachorro", 10, "Caramelo");

cachorro.anda();
cachorro.dorme();
cachorro.emiteSom("Latindo");

const conta = new ContaBancaria(1000000,123,"Misael");

console.log(`O saldo inicial da conta é ${conta.getSaldo()}`);
conta.depositar(500000);
console.log(`O saldo da conta após o depósito é ${conta.getSaldo()}`);
conta.sacar(150000);
console.log(`O saldo da conta após o saque é ${conta.getSaldo()}`);

const compromisso1 = new Compromisso("12/09/2023","Aula Backend","SOFTEX");

const agenda = new Agenda();

agenda.agendar(compromisso1);
agenda.mostrarAgendamentos();
agenda.limparAgenda();

