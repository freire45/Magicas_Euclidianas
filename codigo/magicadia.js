var btndia = document.querySelector(".enviar-dia");
var txtValor = document.querySelector(".entrada-valor-dia");

var valor;
var valor2;
var resultadofinal;
var resto;

var scResultado = document.querySelector(".resultado-dia");

var tResultado = document.createElement("h2");
tResultado.id = "resultado";

var repBotao = document.createElement("div");
repBotao.id = "repBotao";

var botaoDica = document.createElement("button");
botaoDica.innerHTML = " + Dica ";
botaoDica.id = "botao-Dica";

var paragrafo = document.createElement("p");
paragrafo.classList.add("paragrafoHistoria");
paragrafo.id = "paragHist";
paragrafo.innerHTML =
  "Para descobrir o segredo da Mágica, precisamos fazer o processo inverso da conta, primeiro vamos multiplicar o resultado por 7, adicionar 20 ao valor e depois dividir por 5, dessa forma chegamos ao dia de nascimento.";

btndia.addEventListener("click", function () {
  valor = parseFloat(txtValor.value);
  resultadofinal = Math.round((valor * 7 + 20) / 5);

  if (resultadofinal > 0) {
    resultadofinal = Math.round((valor * 7 + 20) / 5);
    tResultado.innerHTML = resultadofinal;
  }

  if (resultadofinal == -0.71) {
    tResultado.innerHTML = "3";
  }

  if (resultadofinal > 2.85) {
    resultadofinal = Math.round((valor * 7 + 20) / 5);
    tResultado.innerHTML = resultadofinal;
  }

  scResultado.appendChild(tResultado);
  scResultado.appendChild(repBotao);
  repBotao.appendChild(botaoDica);
});

botaoDica.addEventListener("click", function () {
  botaoDica.innerHTML = " - Dica ";
  repBotao.appendChild(paragrafo);
});
