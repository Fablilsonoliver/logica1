function mediaDaNota(nota0, nota1, nota2, nota3) {

const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4;

if (mediaFinal >= 7) {
    return "Aprovado";
} else {
    return "Reprovado";
}

// return mediaFinal >= 7 ? "Aprovado" : "Reprovado";
}

const nota0 = Number(prompt("Digite uma nota."));
const nota1 = Number(prompt("Digite a segunda nota."));
const nota2 = Number(prompt("Digite a terceira nota."));
const nota3 = Number(prompt("Digite a quarta nota."));

document.write(mediaDaNota(nota0, nota1, nota2, not))