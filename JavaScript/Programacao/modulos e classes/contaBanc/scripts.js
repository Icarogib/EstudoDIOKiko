class ContaBancaria{
    constructor ( agencia, numero, tipo ){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get Saldo(){
        return this._saldo;
    }

    set Saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
		if (valor > this._saldo) {
			return console.log("Saque negado. saldo insuficiente!");
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
    constructor ( agencia, numero, cartaoCred ){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this._cartaoCred = cartaoCred;
    }

    set cartaoCredito(valor) {
		this._cartaoCred = valor;
	}

	get cartaoCredito() {
		return this._cartaoCred;
	}

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }

    sacar(valor){
        if(valor > 500)
            return 'Limite de saque! Voce so pode sacar ate 500 reais';

        this._saldo = this._saldo - valor;
    }

}