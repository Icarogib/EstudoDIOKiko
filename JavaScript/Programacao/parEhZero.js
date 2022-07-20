function trocaPorZero(array){
    for(let i = 0; i < array.length; i++){
        if(!array || !array.length)
            return -1;            

        if(array[i] == 0)
            console.log(`Elemento ${array[i]}[${i}] ja é 0`);

        if(array[i] % 2 == 0){
            console.log(`Elemento ${array[i]}[${i}] trocado por 0`);
            array[i] = 0;
        }
    }
    return array;
}

var lista = [1, 6, 13, 15, 22, 25, 27, 28, 33];

console.log(trocaPorZero(lista));