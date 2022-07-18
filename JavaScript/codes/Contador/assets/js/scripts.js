var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


/*
function negativeColor(){
    if(currentNumberWrapper < 0)
        currentNumberWrapper.style.color = 'red';
    else
        currentNumberWrapper.style.color = 'black';
}
*/
function increment(){
    if(currentNumber < 10){
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumber >= 0)
            currentNumberWrapper.style.color = 'black';
    }
}

function decrement(){
    if(currentNumber > -10){
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumber < 0)
            currentNumberWrapper.style.color = 'red';
    }
}



/*codigo da professora*/

/*let count = 0; 

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}*/