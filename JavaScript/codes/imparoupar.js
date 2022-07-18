function parimpar(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 ){
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

let array = [1,3,6,7,9,10,12,13];

parimpar(array);