const array = [1, 2, 3, 4, 5];

const multiplicado = array.map((multi) => multi * 2);

//ou

function multiplNoThis(arr){
    return arr.map( function(item){
        return item * 2;
    } );
}
console.log('funcao: ', multiplNoThis(array));

console.log(multiplicado);
console.log(array);

//com this agora.
/*
const arr = [6, 2];

const espelho = {
    quantidade: 2,
};

const escova = {
    quantidade: 4,
};

function multiplica(array, arg){
    return array.map(function(mult){
      return  mult * this.quantidade;
    } , arg);
}

console.log(multiplica(arr, espelho));
console.log(multiplica(arr, escova));
//console.log(multiplica(arr)); //NaN*/