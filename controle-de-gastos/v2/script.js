var saldo = localStorage.getItem("saldo");
localStorage.setItem("saldo" , 2);
var valorSaldo = 0;

var descricao = localStorage.getItem("descricao");
localStorage.setItem("descricao");
var localStorage = "inicial exemplo";

function getDados () {
    var valor = document.querySelector("#valor");
    valor.innerHTML = `R$${valorSaldo}`;
    validaCor(valor);

    var descricao = document.querySelector("#descricao");
    valor.innerHTML = `${descricao}`
    validaCor(valor);
}
//Aqui ele coloca a cor da fonte e define o tipo de operação
function validaCor(valor) {
  if(String(valorSaldo).indexOf("-") !== -1){
    valor.style.color = "red";
    }else{
    valor.style.color = "green";
    }
}

getDados();
function UpdateSaldo(type){
  if(type === 'diminuir'){
    var valor = document.querySelector('#despesa').value;
    valor === "" || valor === null ? valor = 0 : true
    valorSaldo = parseInt(valorSaldo) - parseInt(valor);
    getDados();
    document.querySelector("#despesa").value = "";

  }else if (type === 'adicionar'){
    var valor = document.querySelector('#ganho').value;
    valor === "" || valor === null ? valor = 0 : true
    valorSaldo = parseInt(valorSaldo) + parseInt(valor);
    getDados();
    document.querySelector("#ganho").value = "";
  }
}