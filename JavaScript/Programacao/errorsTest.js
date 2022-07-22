const refError = new Error('Parametros nao lancados');
refError.name = 'ReferenceError';

const objError = new Error('Erro no tipo');
objError.name = 'TypeError';

const rngError = new Error('Erro no tamanho');
rngError.name = 'RangeError';

const array = [1, 4, 6, 12];

function recebeArray(arr, num){
    if( arr.length != num )
        throw rngError;
    
    if( typeof arr !== 'object' || typeof num !== 'number' )
        throw objError;
    
    if( !arr || !num )
        throw refError;

    return arr;
}

function tryCatchArr(arr, numero){
    try{
        recebeArray(arr, numero);
    }catch(e){
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
        }
    }
}
console.log(tryCatchArr(array, 4));

//versao professora:

/*
function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}
}

console.log(validaArrays([1, 2, 3], 0));*/