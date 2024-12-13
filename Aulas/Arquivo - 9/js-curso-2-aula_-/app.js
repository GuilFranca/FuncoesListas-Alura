let tentativas = 1;

// Cria uma função para deixar o código mais limpo
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p','Escolha um número entre 1 e 10')

function limparCampo() {
    // Seleciona a tag
    chute = document.querySelector('input');
    // Pega o valor dentro da tag e converte para uma string vazia
    chute.value = ''; 
}

// Criar função para verificar clique
function verificarChute() {
    // Com .value é selecionado somente o valor enviado pelo input
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p',mensagemTentativas);
        // Selecionando o elemento pelo ID e removendo o atributo de desabilitar o mesmo.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
        limparCampo();
        // Selecionando o elemento pelo ID e adicionando o atributo de desabilitar o mesmo.
    }
}

// Criar função para criação de números aleátorios
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);