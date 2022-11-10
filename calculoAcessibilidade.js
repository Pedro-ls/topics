function calcularAcessibilidade(){

    var resultadoPerfomancePagina = document.getElementById('performace_pagina_2').value * (document.getElementById('pesoPerformancePagina_2').value/100)

    var resultadoPercepcao = resultadoPerfomancePagina * (document.getElementById('pesoPercepcao').value/100)

    var resultadoOperablidade = document.getElementById('operabilidade').value * (document.getElementById('pesoOperabilidade').value/100)

    var resultadoAcessibilidade = (resultadoPercepcao + resultadoOperablidade ) * parseFloat(document.getElementById('pesoAcessibilidade').value/100).toFixed(4)

    alert('Score acessibilidade: ' + resultadoAcessibilidade)
}