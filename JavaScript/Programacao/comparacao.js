function comparaNum(a, b){
    const soma = a+b;
    let dez = ' menor ';
    let vint = ' menor ';
    
    if( soma > 10)
        dez = ' maior ';

    if( soma > 20 )
        vint = ' maior '

    if( a === b )
        return "Os numeros " + a + " e " + b + " sao iguais. Sua soma é " + (soma) + ", que é" + dez + "que 10 e" + vint + "que 20\n";
    else
        return "Os numeros " + a + " e " + b + " nao sao iguais. Sua soma é " + (soma) + ", que é" + dez + "que 10 e" + vint + "que 20\n";
}

console.log(comparaNum(2, 2));