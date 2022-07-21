const array = [ 10, 25, 40, 50];

function somaTudo(array){
    return array.reduce(function(anterior, atual){
        console.log({anterior});
        console.log({atual});
        return anterior + atual;
    });
}

console.log(somaTudo(array));