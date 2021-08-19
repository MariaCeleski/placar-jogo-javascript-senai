placarMaisUm = 0;
placarMaisDois = 0;
placarMenosUm = 0;
placarMenosDois = 0;
var nome1, nome2, plac1, plac2;

function somarEsquerda() {
  var placarMaisUm = parseInt(document.getElementById("placar1").value);
  document.getElementById("placar1").value = placarMaisUm + 1;
  if(placarMaisUm  == 4){
    alert("Parabéns, vc  atingiu 05 pontos. É o vencedor!")
  }
}

function somarDireita() {
  var placarMaisDois = parseInt(document.getElementById("placar2").value);
  document.getElementById("placar2").value = placarMaisDois + 1;
  if(placarMaisDois  == 4){
    alert("Parabéns, vc  atingiu 05 pontos. É o vencedor!")
    }
}

function diminuirEsquerda() {
  var placarMenosUm = parseInt(document.getElementById("placar1").value);
  document.getElementById("placar1").value = placarMenosUm - 1;
}

function diminuirDireita() {
  var placarMenosDois = parseInt(document.getElementById("placar2").value);
  document.getElementById("placar2").value = placarMenosDois - 1;
}

function limparCampos() {
  document.getElementById("jogador1").value = "";
  document.getElementById("jogador2").value = "";
  document.getElementById("placar1").value = "0";
  document.getElementById("placar2").value = "0";
}

function trocarLados() {
  nome1 = document.getElementById("jogador1").value;
  nome2 = document.getElementById("jogador2").value;
  plac1 = document.getElementById("placar1").value;
  plac2 = document.getElementById("placar2").value;

  document.getElementById("jogador1").value = nome2;
  document.getElementById("jogador2").value = nome1;
  document.getElementById("placar1").value = plac2;
  document.getElementById("placar2").value = plac1;
}
//Iniciar contagem de tempo
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cronometro;

function iniciar() {
    cronometro = setInterval(() => { timer(); }, tempo);
}

function pausar() {
    clearInterval(cronometro);
}

function limpar() {
    clearInterval(cronometro);
    hh = "0";
    mm = "0";
    ss = "0";

    document.getElementById('contador').innerText = '00:00:00';
}

function timer() {
    ss++; 

    if (ss == 59) {
        ss = 0; 
        mm++; 

        if (mm == 59) {
            mm = 0;
            hh++;
        }
    }

    var formatoTempo = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    document.getElementById('contador').innerText = formatoTempo;

    return formatoTempo;
}

