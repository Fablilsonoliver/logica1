function mediaDaNota(nota0, nota1, nota2, nota3){

const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4;

if (mediaFinal >= 7) {
    return "Aprovado";
} else {
    return "Reprovado";
}

 const classificacao = mediaFinal >= 7 ? "Aprovado" : "Reprovado";
 return classificacao
}