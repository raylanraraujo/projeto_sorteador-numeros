function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(doNumero, ateNumero);
        sorteados.push(numero)
    }
    alert(`Os números sorteado: ${sorteados}`)
}

function obterNumeroAleatorio(min , max) {
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}