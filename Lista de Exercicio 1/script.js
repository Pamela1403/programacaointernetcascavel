function calcularTroco() {
    let pago = parseFloat(document.getElementById("valorPago").value);
    let preco = parseFloat(document.getElementById("precoProduto").value);

    if (isNaN(pago) || isNaN(preco)) {
        document.getElementById("resultado1").innerText = "Por favor, insira valores válidos.";
        return;
    }

    let troco = pago - preco;

    if (troco < 0) {
        document.getElementById("resultado1").innerText = "Valor pago insuficiente.";
    } else {
        document.getElementById("resultado1").innerText = "Troco: R$ " + troco.toFixed(2);
    }
}

function calcular() {
    let valorQuilo = parseFloat(document.getElementById("valorQuilo").value);
    let quantidade = parseFloat(document.getElementById("quantidade").value);

    if (isNaN(valorQuilo) || isNaN(quantidade)) {
        document.getElementById("resultado2").innerText = "Por favor, insira números válidos.";
        return;
    }

    let total = valorQuilo * quantidade;
    document.getElementById("resultado2").innerText = "Total a pagar: R$ " + total.toFixed(2);
}

function calcularReajuste() {
    let saldo = parseFloat(document.getElementById("saldo").value);

    if (isNaN(saldo)) {
        document.getElementById("resultado3").innerText = "Por favor, insira um saldo válido.";
        return;
    }

    let saldoReajustado = saldo * 1.01;
    document.getElementById("resultado3").innerText = "Saldo com reajuste de 1%: R$ " + saldoReajustado.toFixed(2);
}

function calcularMedia() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultado4").innerText = "Por favor, insira os três números válidos.";
        return;
    }

    let media = (n1 + n2 + n3) / 3;
    document.getElementById("resultado4").innerText = "Média aritmética: " + media.toFixed(2);
}


function calcularMaior() {
    let a = parseFloat(document.getElementById("valorA").value);
    let b = parseFloat(document.getElementById("valorB").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado5").innerText = "Por favor, insira dois valores válidos.";
        return;
    }

    let maior = (a > b) ? a : b;
    document.getElementById("resultado5").innerText = "O maior valor é: " + maior;
}


function calcularMenor() {
    let v1 = parseFloat(document.getElementById("val1").value);
    let v2 = parseFloat(document.getElementById("val2").value);
    let v3 = parseFloat(document.getElementById("val3").value);
    let v4 = parseFloat(document.getElementById("val4").value);

    if (isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4)) {
        document.getElementById("resultado6").innerText = "Por favor, insira quatro valores válidos.";
        return;
    }

    let menor = Math.min(v1, v2, v3, v4);
    document.getElementById("resultado6").innerText = "O menor valor é: " + menor;
}


function verificarImpar() {
    let num = parseInt(document.getElementById("numeroImpar").value);

    if (isNaN(num)) {
        document.getElementById("resultado7").innerText = "Por favor, insira um número válido.";
        return;
    }

    let resultado = (num % 2 !== 0) ? "O número é ímpar." : "O número não é ímpar.";
    document.getElementById("resultado7").innerText = resultado;
}