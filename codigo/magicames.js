var btnmes = document.querySelector(".enviar-mes");
var txtValor = document.querySelector(".entrada-valor-mes");

var valor;
var resultadofinal;
var resto;

var scResultado = document.querySelector(".resultado-mes");

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
  "Para descobrir o segredo da Mágica, precisamos fazer o processo inverso da conta, primeiro vamos multiplicar o resultado final por 5, depois vamos subtrair 12 e por fim vamos dividir por 7 para achar o resultado final.";

btnmes.addEventListener("click", function () {
  valor = Math.trunc(parseInt(txtValor.value));
  resto = Math.trunc(valor % 5);

  resultadofinal = Math.round((valor * 5 + resto - 12) / 7);

  if (resultadofinal === 1) {
    tResultado.innerHTML = "1 (Janeiro)";
  }
  if (resultadofinal === 2) {
    tResultado.innerHTML = "2 (Fevereiro)";
  }
  if (resultadofinal === 3) {
    tResultado.innerHTML = "3 (Março)";
  }
  if (resultadofinal === 4) {
    tResultado.innerHTML = "4 (Abril)";
  }
  if (resultadofinal === 5) {
    tResultado.innerHTML = "5 (Maio)";
  }
  if (valor === 10) {
    tResultado.innerHTML = "6 (Junho)";
  }
  if (resultadofinal === 7) {
    tResultado.innerHTML = "7 (Julho)";
  }
  if (resultadofinal === 8) {
    tResultado.innerHTML = "8 (Agosto)";
  }
  if (resultadofinal === 9) {
    tResultado.innerHTML = "9 (Setembro)";
  }
  if (valor === 16) {
    tResultado.innerHTML = "10 (Outubro)";
  }
  if (resultadofinal === 11) {
    tResultado.innerHTML = "11 (Novembro)";
  }
  if (resultadofinal === 12) {
    tResultado.innerHTML = "12 (Dezembro)";
  }

  scResultado.appendChild(tResultado);
  scResultado.appendChild(repBotao);
  repBotao.appendChild(botaoDica);
});

botaoDica.addEventListener("click", function () {
  botaoDica.innerHTML = " - Dica ";
  repBotao.appendChild(paragrafo);
});
