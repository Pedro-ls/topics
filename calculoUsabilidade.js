function calcularUsabilidade(){

    var resultadoResponsividade = document.getElementById('responsividade').value * (document.getElementById('pesoResponsividade').value / 100)
    var resultadoFlexAmbiente = document.getElementById('flexibilidade_ambiente').value * (document.getElementById('pesoFlexAmbiente').value/100)
    var resultadoFlexGeral = document.getElementById('flexibilidade_geral').value * (document.getElementById('pesoFlexGeral').value/100)
    var resultadoPerfomancePagina = document.getElementById('performace_pagina').value * (document.getElementById('pesoPerfomancePagina').value/100)

    var resultadoSatisfacao = document.getElementById('satisfacao').value * (document.getElementById('pesoSatisfacao').value/100)
    var resultadoAprendizado = document.getElementById('aprendizado').value * (document.getElementById('pesoCapacidadeAprendizado').value/100)
    var resultadoSegurancaUso = document.getElementById('seguranca').value * (document.getElementById('pesoSegurancaUso').value/100)
    var resultadoUtilidade = document.getElementById('utilidade').value * (document.getElementById('pesoUtilidade').value/100)

    var somaResultadosEficiencia = resultadoResponsividade + resultadoFlexAmbiente + resultadoFlexGeral + resultadoPerfomancePagina
    var resultadoEficiencia = somaResultadosEficiencia * (parseFloat(document.getElementById('pesoEficiencia').value)/100)

   

    var resultadoUsabilidade = ((resultadoEficiencia +  resultadoSatisfacao + resultadoAprendizado + resultadoSegurancaUso + resultadoUtilidade) * (parseFloat(document.getElementById('pesoUsabilidade').value)) / 100).toFixed(4)

    //alert('Score eficiencia: ' + resultadoEficiencia )
    //alert('Score satisfação: ' + resultadoSatisfacao )
    //alert('Score aprendizado: ' + resultadoAprendizado )
    //alert('Score segurança no uso: ' + resultadoSegurancaUso )
    //alert('Score utilidade: ' + resultadoUtilidade )
    alert('Score usabilidade: ' + resultadoUsabilidade )
}