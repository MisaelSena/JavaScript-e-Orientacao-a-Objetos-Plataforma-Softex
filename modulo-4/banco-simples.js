function Banco(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;

    this.buscarSaldo = function getSaldo(){
       return this.saldo;
    }

    this.numConta = function getConta(){
        return this.conta;
     }

    this.deposito = function deposito(valorDepositado) {
        this.saldo += valorDepositado;
    }

    this.saque = function saque(valorSaque) {
        this.saldo -= valorSaque;
    }

}

let conta = new Banco(123, 1000, "CC","132-5");

console.log("Conta: "+conta.numConta()+" Saldo Inicial: "+conta.buscarSaldo());
conta.deposito(100);
console.log("Saldo Após Depósito: "+conta.buscarSaldo());
conta.saque(40);
console.log("Saldo Após Saque: "+conta.buscarSaldo());
