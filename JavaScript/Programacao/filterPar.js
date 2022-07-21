const array = [1, 4, 5, 22, 23, 54, 67, 88];

function filtraPar(arr){
    return arr.filter(function(pares){
        return pares % 2 == 0;
    });
}

console.log(filtraPar(array));

/*
//o da professora agora:

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

console.log(filtraPares(array));*/