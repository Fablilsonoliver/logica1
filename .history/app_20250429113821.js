// function = declaro uma função
// mediaDaNota = nome da função (SEMPRE em camelCase)
// nota0, nota1, nota2, nota3 = argumentos, ou seja, variaveis.
// {} = é aonde vai acontecer a logica em bloco

function mediaDaNota(nota0, nota1, nota2, nota3) {

// const = tipo de variavel, é imutavel
// mediaFinal = nome da variavel em camelCase
// O que ela faz?
// soma as variaveis e divide pela quantidade de variaveis

const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4;

// if = condição
// (mediaFinal >= 7) = a condição está verificando se a variavel 'mediaFinal' é maior ou igual a 7

// else = se não atender nenhuma outra condição anterior, ela entra no 'else'
// return = informa a resposta final

if (mediaFinal >= 7) {
    return "Aprovado";
} else {
    return "Reprovado";
}

// return mediaFinal >= 7 ? "Aprovado" : "Reprovado";
}

// igredientes = array
function receita(igredientes) {
    let i = 0;

    while(i <= 5) {
        document.write(`${igredientes[i]}`);
        i++;
    }
}
let igredientes = ['ovo', 'leite', 'farinha', 'fermento', 'tudo que há de bom'];

receita(igredientes);


// ++ adicionando mais '1'
// 

function tabuada(numero) {
    let i = 1;
    let lista = [];
    let resultado;

    while (i <= 10) {
        resultado = numero * i;
        lista +=`${numero} * ${i} = ${resultado}<br>`;
        i++;
    }

    return lista;
}

const numeroDigitado = Number(prompt("Digite um numero"));
document.write(tabuada(numeroDigitado));

