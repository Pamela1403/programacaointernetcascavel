
function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  clearResults();
}


function clearResults() {
  document.querySelectorAll('.result').forEach(el => el.textContent = '');
}

// 1 - Triângulo
function ex1() {
  let x = parseFloat(document.getElementById("triX").value);
  let y = parseFloat(document.getElementById("triY").value);
  let z = parseFloat(document.getElementById("triZ").value);
  let res = document.getElementById("res1");

  if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
    res.textContent = "Por favor, insira lados positivos válidos.";
    res.style.color = 'red';
    return;
  }

  if (x < y + z && y < x + z && z < x + y) {
    if (x === y && y === z) {
      res.textContent = "Triângulo Equilátero";
    } else if (x === y || y === z || x === z) {
      res.textContent = "Triângulo Isósceles";
    } else {
      res.textContent = "Triângulo Escaleno";
    }
    res.style.color = 'green';
  } else {
    res.textContent = "Não forma triângulo";
    res.style.color = 'red';
  }
}

// 2 - IMC
function ex2() {
  let peso = parseFloat(document.getElementById("imcPeso").value);
  let altura = parseFloat(document.getElementById("imcAltura").value);
  let res = document.getElementById("res2");

  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    res.textContent = "Informe peso e altura válidos.";
    res.style.color = 'red';
    return;
  }

  let imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc < 35) classificacao = "Obesidade grau 1";
  else if (imc < 40) classificacao = "Obesidade grau 2";
  else classificacao = "Obesidade grau 3";

  res.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
  res.style.color = 'green';
}

// 3 - Imposto veículo
function ex3() {
  let ano = parseInt(document.getElementById("impAno").value);
  let valor = parseFloat(document.getElementById("impValor").value);
  let res = document.getElementById("res3");

  if (isNaN(ano) || ano < 1900 || ano > 2100 || isNaN(valor) || valor <= 0) {
    res.textContent = "Informe ano e valor válidos.";
    res.style.color = 'red';
    return;
  }

  let taxa = ano < 1990 ? 0.01 : 0.015;
  let imposto = valor * taxa;

  res.textContent = `Imposto a pagar: R$ ${imposto.toFixed(2)}`;
  res.style.color = 'green';
}

// 4 - Aumento salário
function ex4() {
  let salario = parseFloat(document.getElementById("salarioAntigo").value);
  let cargo = document.getElementById("cargoFunc").value.trim().toLowerCase();
  let res = document.getElementById("res4");

  if (isNaN(salario) || salario <= 0 || cargo === "") {
    res.textContent = "Informe salário e cargo válidos.";
    res.style.color = 'red';
    return;
  }

  let aumento = 0;

  if (cargo === "gerente") aumento = 0.1;
  else if (cargo === "engenheiro") aumento = 0.2;
  else if (cargo === "técnico") aumento = 0.3;
  else aumento = 0.4;

  let novoSalario = salario * (1 + aumento);
  let dif = novoSalario - salario;

  res.innerHTML = `
    Salário antigo: R$ ${salario.toFixed(2)}<br/>
    Novo salário: R$ ${novoSalario.toFixed(2)}<br/>
    Diferença: R$ ${dif.toFixed(2)}
  `;
  res.style.color = 'green';
}

// 5 - Crédito bancário
function ex5() {
  let saldo = parseFloat(document.getElementById("saldoMed").value);
  let res = document.getElementById("res5");

  if (isNaN(saldo) || saldo < 0) {
    res.textContent = "Informe saldo válido.";
    res.style.color = 'red';
    return;
  }

  let credito = 0;

  if (saldo <= 200) credito = 0;
  else if (saldo <= 400) credito = saldo * 0.2;
  else if (saldo <= 600) credito = saldo * 0.3;
  else credito = saldo * 0.4;

  res.textContent = `Saldo médio: R$ ${saldo.toFixed(2)} - Crédito concedido: R$ ${credito.toFixed(2)}`;
  res.style.color = 'green';
}

// 6 - Lanchonete (corrigido)
function ex6() {
  let codigo = parseInt(document.getElementById("codLanche").value);
  let qtde = parseInt(document.getElementById("qtdeLanche").value);
  let res = document.getElementById("res6");

  if (isNaN(codigo) || isNaN(qtde) || qtde <= 0) {
    res.textContent = "Informe código e quantidade válidos.";
    res.style.color = 'red';
    return;
  }

  let preco = 0;
  if (codigo === 100) preco = 1.2;
  else if (codigo === 101) preco = 1.3;
  else if (codigo === 102) preco = 1.5;
  else if (codigo === 103) preco = 1.2;
  else if (codigo === 104) preco = 1.0;
  else if (codigo === 105) preco = 1.3;
  else {
    res.textContent = "Código inválido.";
    res.style.color = 'red';
    return;
  }

  let total = preco * qtde;
  res.textContent = `Total a pagar: R$ ${total.toFixed(2)}`;
  res.style.color = 'green';
}

// 7 - Sistema de vendas
function ex7() {
  let preco = parseFloat(document.getElementById("precoProd").value);
  let cond = document.getElementById("condPag").value;
  let res = document.getElementById("res7");

  if (isNaN(preco) || preco <= 0) {
    res.textContent = "Informe preço válido.";
    res.style.color = 'red';
    return;
  }

  let total = preco;
  if (cond === 'a') total = preco * 0.9;
  else if (cond === 'b') total = preco * 0.85;
  else if (cond === 'c') total = preco;
  else if (cond === 'd') total = preco * 1.1;
  else {
    res.textContent = "Condição inválida.";
    res.style.color = 'red';
    return;
  }

  res.textContent = `Valor a pagar: R$ ${total.toFixed(2)}`;
  res.style.color = 'green';
}

// 8 - Salário professor
function ex8() {
  let nivel = parseInt(document.getElementById("nivelProf").value);
  let horas = parseFloat(document.getElementById("horasAula").value);
  let res = document.getElementById("res8");

  if (isNaN(horas) || horas <= 0 || isNaN(nivel) || nivel < 1 || nivel > 3) {
    res.textContent = "Informe nível e horas válidos.";
    res.style.color = 'red';
    return;
  }

  let valorHora = 0;
  if (nivel === 1) valorHora = 12;
  else if (nivel === 2) valorHora = 17;
  else valorHora = 25;

  let salario = valorHora * horas * 4.5;

  res.textContent = `Salário mensal: R$ ${salario.toFixed(2)}`;
  res.style.color = 'green';
}


window.onload = () => {
  showSection('triangulo');
};
