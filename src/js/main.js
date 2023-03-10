// FUNÇÃO DE REPRODUZIR O SOM
function tocarSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//REFERÊNCIA CONSTANTE
const listaDeBotoes = document.querySelectorAll('.botao');

// LÓGICA DE ENQUANTO / REFERÊNCIA E VALOR INICIAL / ENQUANTO A REFERÊNCIA FOR MENOR QUE LENGTH / OPERAÇÃO (contador = contador + 1)
for (let contador = 0; contador < listaDeBotoes.length; contador++) {
    
    //SELECIONAR O ELEMENTO DO ÍNDICE
    const botao = listaDeBotoes[contador];
    //SELECIONAR O SEGUNDO ELEMENTO DO ÍNDICE DA SUBLISTA (classList)
    const instrumento = botao.classList[1];
    
    const idAudio = `#audio_${instrumento}`;
    
    console.log(idAudio)
    //REFERÊNCIA (lista) SELECIONANDO O ELEMENTO "x" DO ÍNDICE / EXECUTAR FUNÇÃO / ABERTURA DE FUNÇÃO ANÔNIMA / EXECUÇÃO DE FUNÇÃO (tocarSom)
    botao.onclick = function () {
        tocarSom(idAudio);
    }
}
