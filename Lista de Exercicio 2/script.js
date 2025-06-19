function calcularCotacoes() {
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    if (isNaN(cotacao)) {
        document.getElementById("resultado1").innerText = "Insira uma cotação válida.";
        return;
    }

    let r1 = cotacao * 1.01;
    let r2 = cotacao * 1.02;
    let r5 = cotacao * 1.05;
    let r10 = cotacao * 1.10;

    document.getElementById("resultado1").innerText =
        "1%: R$ " + r1.toFixed(2) + "\n" +
        "2%: R$ " + r2.toFixed(2) + "\n" +
        "5%: R$ " + r5.toFixed(2) + "\n" +
        "10%: R$ " + r10.toFixed(2);
}

function calcularOmelete() {
    let pessoas = parseInt(document.getElementById("pessoas").value);
    if (isNaN(pessoas)) {
        document.getElementById("resultado2").innerText = "Insira um número válido de pessoas.";
        return;
    }

    let ovos = pessoas * 2;
    let queijo = pessoas * 50;

    document.getElementById("resultado2").innerText = 
        "Você vai precisar de " + ovos + " ovos e " + queijo + "g de queijo.";
}

function calcularOperacoes() {
    let a = parseInt(document.getElementById("numA").value);
    let b = parseInt(document.getElementById("numB").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado3").innerText = "Insira dois números válidos.";
        return;
    }

    let soma = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = b !== 0 ? (a / b).toFixed(2) : "divisão por zero";

    document.getElementById("resultado3").innerText =
        "Soma: " + soma + "\n" +
        "Subtração: " + sub + "\n" +
        "Multiplicação: " + mult + "\n" +
        "Divisão: " + div;
}

function calcularPizza() {
    let sabor1 = document.getElementById("sabor1").value;
    let sabor2 = document.getElementById("sabor2").value;
    let sabor3 = document.getElementById("sabor3").value;
    let sabor4 = document.getElementById("sabor4").value;
    let refri = parseInt(document.getElementById("refri").value);

    if (!sabor1 || !sabor2 || !sabor3 || !sabor4 || isNaN(refri)) {
        document.getElementById("resultado4").innerText = "Preencha todos os campos corretamente.";
        return;
    }

    let total = (4 * 12) + (refri * 7);

    document.getElementById("resultado4").innerText =
        "Sabores: " + sabor1 + ", " + sabor2 + ", " + sabor3 + ", " + sabor4 + "\n" +
        "Total a pagar: R$ " + total.toFixed(2);
}