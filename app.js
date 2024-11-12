function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if ( doNumero >= ateNumero){        //verifica se o intervalor é válido
        alert('Insira um intervalo');
        return; //não retorna nada, mas tem o papel de interromper a função nesse ponto
    }
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

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    // sorteados = []; --> na aula não foi incluído nada sobre limpar o array sorteados;
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
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
