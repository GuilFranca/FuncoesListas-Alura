// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        return 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

let IMC = calculoIMC(1.68,70);
console.log(IMC);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorialNumero(numero) {
    fatorial = 1;
    for (let i = 1;i <= numero;i++) {
        fatorial *= i;
        console.log(fatorial);
    }
    return fatorial;
}

console.log(fatorialNumero(5));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function convercaoDolar(dolar) {
    return dolar * 4.80;
}

let valor = convercaoDolar(1);
console.log(valor);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(altura,largura) {
    let area = altura * largura;
    let perimetro = altura * 2 + largura * 2;
    console.log(`Área: ${area}\nPerimetro: ${perimetro}`);
}

areaPerimetro(5,10);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function circulo(raio) {
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area.toFixed(2)}\nPerimetro: ${perimetro.toFixed(2)}`);
}

circulo(5);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1;i <= 10;i++) {
        console.log(`${numero} X ${i} = ${numero * i}`)
    }
}

tabuada(10);