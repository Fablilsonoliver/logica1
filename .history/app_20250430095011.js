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

    while(i <= 4) {
        document.write(`${igredientes[i]}<br>`);
        i++;
    }
}
let igredientesDeBolo = ['ovo', 'leite', 'farinha', 'fermento', 'tudo que há de bom'];
let igredientesCapuccino = ['cafe', 'leite', 'chocolate', 'canela'];

receita(igredientesDeBolo);
receita(igredientesCapuccino);


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



function classificacao() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const resultadoFinal = document.getElementById("resultadoFinal");
    let aprovacao;
        
    const media = (nota1 + nota2 + nota3)/3;
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0 
        || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite uma nota válida!");
    } else {
}
    aprovacao = media > 7 ? "Aprovado!" : "Reprovado.";

    numer > 0 ? "Positivo" : numero = 0 ? "zero" : "negativo";

    resultadoFinal.innerHTML = `A sua media foi de ${media.toFixed(2)}. ${aprovacao}`
    }
}
