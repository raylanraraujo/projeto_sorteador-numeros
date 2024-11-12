function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(doNumero, ateNumero);

        while(sorteados.includes(numero)){ // para verificar se o número sorteado está dentro do array sorteados
            numero = obterNumeroAleatorio(doNumero, ateNumero); // para verificar se o 
        }
        sorteados.push(numero)
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao();
}


function obterNumeroAleatorio(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado') ){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
