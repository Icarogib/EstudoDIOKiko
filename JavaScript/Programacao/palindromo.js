//solucao 1
function comparaPalind(string){
    if(!string) return "A string nao existe!!";

    if(string === string.split("").reverse().join(""))
        return string +" eh palindromo!";
    else
        return string +" nao eh palindromo!";
}

function comparaPalind2(string){
    if(!string) return "A string nao existe!!";

    for(let i = 0; i < string.length/2; i++){
        if(string[i] !== string[string.length - 1 - i ])
            return string +" nao eh palindromo!";
    }
    return string +" eh palindromo!";

}

console.log(comparaPalind("Gato"));
console.log(comparaPalind("abba"));
console.log(comparaPalind2("Gato"));
console.log(comparaPalind2("ovo"));