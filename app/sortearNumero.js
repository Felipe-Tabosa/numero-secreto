const menorValor = 1;
const maiorValor = 1000;
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMaiorValor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor

console.log('Número secreto:', numeroSecreto);