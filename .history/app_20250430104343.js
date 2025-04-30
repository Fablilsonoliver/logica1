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

    aprovacao = media > 7 ? "Aprovado!" : "Reprovado.";
    resultadoFinal.innerHTML = `A sua media foi de ${media.toFixed(2)}. ${aprovacao}`
    }
}


function meta() {
    const dia1 = Number (document.getElementById("dia1").value)
    const dia2 = Number (document.getElementById("dia2").value)
    const dia3 = Number (document.getElementById("dia3").value)
    const resultadoFinal = document.getElementById("resultdoMeta");

      resultadoFinal.innerHTML = `A sua media foi de ${media.toFixed(2)}. ${aprovacao}`
}