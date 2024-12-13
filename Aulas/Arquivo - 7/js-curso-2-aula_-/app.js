// Cria uma função para deixar o código mais limpo
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p','Escolha um número entre 1 e 10')

// Criar função para verificar clique
function verificarChute() {
    // Com .value é selecionado somente o valor enviado pelo input
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p','Você descobriu o número secreto!');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}.`);
        }
    }
}

// Criar função para criação de números aleátorios
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);