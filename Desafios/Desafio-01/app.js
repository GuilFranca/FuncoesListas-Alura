let titulo = document.querySelector('h1')
titulo.innerHTML = ('Hora do Desafio')

function btnClick() {
    console.log('O botão foi clicado!')
}

function alerta() {
    alert('Eu amo JS!')
}

function cidade() {
    let cidade = prompt('Digite uma cidade.')
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function soma() {
    let numero_1 = parseFloat(prompt('Digite um número'))
    let numero_2 = parseFloat(prompt('Digite outro número'))
    alert(`${numero_1} + ${numero_2} = ${numero_1 + numero_2}`)
}