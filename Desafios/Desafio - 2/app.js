// Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log('Olá, mundo!');
}

helloWorld();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function helloName(nome) {
    console.log(`Olá, ${nome}!`);
}

helloName('Guilherme');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
    console.log(numero * 2);
}

dobro(10);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3) {
    console.log((n1 + n2 + n3) / 3 );
}

media(10,10,10);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(num1,num2) {
    let maiorNumero = num1;

    if (maiorNumero < num2) {
        maiorNumero = num2;
    }

    console.log(`O maior número é ${maiorNumero}`);
}

maiorNumero(1,5);

function elevearAoQuadrado(number) {
    console.log(number * number);
}

elevearAoQuadrado(5);