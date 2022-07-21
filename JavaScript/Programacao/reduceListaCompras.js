const saldo = 50;

const lista = [{
        nome: 'Detergente',
        preco: 5,
    },{
        nome: 'Pano',
        preco: 10,
    },{
        nome: 'Papel Higienico',
        preco: 20,
    },];

function comprar (acomprar, saldoDisp){
    return acomprar.reduce(function(anterior, atual, index){
        /*console.log({index});
        console.log({anterior});
        console.log({atual});*/
        return anterior - atual.preco;
    }, saldoDisp);
}

console.log(lista);
console.log('Sobrou na carteira: ', comprar(lista, saldo));