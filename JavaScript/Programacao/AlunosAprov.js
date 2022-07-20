//Solucao 1
/*
function aprovados(alunos, notas){
    var arrayAux = [];
    
    for(let i = 0; i < alunos.length; i++){
        if(notas[i] >= 7){
            console.log(`Aluno ${alunos[i]} passou por media`);
            arrayAux.push(alunos[i]);
        }else
            console.log(`Aluno ${alunos[i]} nao passou por media`);
    }
    return arrayAux;
}

const alunos = ['Joao', 'Pedrao', 'Robson', 'Icaro'];
const notas = [7, 5, 8, 2];

console.log(aprovados(alunos, notas));
*/

//Solucao 2

const alunos = [
    {nome: 'Joao',
     nota: 2,
     sala: '2B',
    },
    {nome: 'Pedrao',
     nota: 7,
     sala: '2B',
    },
    {nome: 'Roberto',
     nota: 6,
     sala: '2A',
    },
    {nome: 'Icaro',
     nota: 8,
     sala: '2A',
    },
];

function alunosAprov(array, media){
    let arrayApr = [];

    for(let i = 0; i < array.length; i++){
        const {nome, nota} = array[i];

        if(nota >= media){
            arrayApr.push(nome);
        }
    }
    return arrayApr;
}

console.log(alunosAprov(alunos, 7));