"use strict";
let button1 = document.getElementById('button1');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somaNum(num1, num2) {
    return num1 + num2;
}
if (button1) {
    button1.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNum(Number(input1.value), Number(input2.value)));
        }
    });
}
