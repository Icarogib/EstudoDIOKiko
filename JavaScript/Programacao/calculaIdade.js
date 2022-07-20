const pessoa = [
    {   nome: 'Pedro',
        idade: 21,
    },
    {   nome: 'Robson',
        idade: 20,
    },
    {   nome: 'Icaro',
        idade: 25,
    },
    {   nome: 'Joao',
        idade: 22,
    },
];

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
//console.log(pessoa);
console.log(calculaIdade.call(pessoa[0], 10));
console.log(calculaIdade.apply(pessoa[1], [10]));

//let joao = calculaIdade.bind({ nome: 'Joao', idade: 32, anos:10});
//console.log(joao());