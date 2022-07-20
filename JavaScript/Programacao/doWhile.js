function doWhileTest(){
    let numero = 6;

    do{
        console.log(numero);
        numero++;
    }while(numero <= 5);
    
    return numero;
}

console.log(doWhileTest());