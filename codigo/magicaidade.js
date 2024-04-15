var btnidade = document.querySelector(".enviar-idade");
var txtValor = document.querySelector(".entrada-valor");

var valor;
var resultadofinal;

var scResultado = document.querySelector(".resultado-idade");

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
  "Para descobrir o segredo da Mágica, precisamos fazer o processo inverso da conta, primeiro vamos somar ao resultado final o valor de 10, depois vamos dividir esse valor por 5, dessa forma chegamos ao resultado final.";

btnidade.addEventListener("click", function () {
  valor = parseInt(txtValor.value);
  resultadofinal = (valor + 10) / 5;

  tResultado.innerHTML = resultadofinal + " Anos ";

  scResultado.appendChild(tResultado);
  scResultado.appendChild(repBotao);
  repBotao.appendChild(botaoDica);
});

botaoDica.addEventListener("click", function () {
  botaoDica.innerHTML = " - Dica ";
  repBotao.appendChild(paragrafo);
});
