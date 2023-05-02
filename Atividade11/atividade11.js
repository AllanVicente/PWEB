/*1. Crie uma função construtora para o Retângulo receber
(x,y) ou seja, base e altura, com um método para calcular
a área. Criar um objeto e executar o método que calcula a
área. Não precisa utilizar get e set na função construtora.*/



function Retangulo(base, altura) {

  this.base = base;
  this.altura = altura;
  this.area = function () {
    return document.getElementById("resultado").innerHTML = "A área do retaângulo é: " + this.base * this.altura + " m²";
  }

}

function calcAreaRetangulo() {
  var b = document.getElementById("base").value;
  var a = document.getElementById("altura").value;
  var retangulo = new Retangulo(b, a);
  retangulo.area();
}



/*2. Crie uma nova função tipo Conta, com as propriedades
nome correntista, banco, numero da conta e saldo. Crie
utilizando herança duas novas funções: Corrente com
Saldo Especial e Poupanca com Juros, Data Vencimento.
Receber os dados via get e set. Criar um objeto de cada
uma: Corrente e Poupanca e mostrar os seus dados.*/


function Conta() {
  var nomeCorrentista;
  var banco;
  var numConta;
  var saldo;

  this.getNomeCorrentista = function () {
    return nomeCorrentista;
  };

  this.setNomeCorrentista = function (value) {
    nomeCorrentista = value;
  };

  this.getBanco = function () {
    return banco;
  };

  this.setBanco = function (value) {
    banco = value;
  };

  this.getNumConta = function () {
    return numConta;
  };

  this.setNumConta = function (value) {
    numConta = value;
  };

  this.getSaldo = function () {
    return saldo;
  };

  this.setSaldo = function (value) {
    saldo = value;
  };
}

function Corrente() {
  var saldoEspecial;

  this.getSaldoEspecial = function () {
    return saldoEspecial;
  };

  this.setSaldoEspecial = function (value) {
    saldoEspecial = value;
  };
}

function Poupanca() {
  var juros;
  var dataVencimento;

  this.getJuros = function () {
    return juros;
  };

  this.setJuros = function (value) {
    juros = value;
  };

  this.getDataVencimento = function () {
    return dataVencimento;
  };

  this.setDataVencimento = function (value) {
    dataVencimento = value;
  };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var nCorrente = new Corrente();
var nPoupanca = new Poupanca();

nCorrente.setNomeCorrentista("João da Silva");
nCorrente.setBanco("BB");
nCorrente.setNumConta("321");
nCorrente.setSaldo("R$ 0,01");
nCorrente.setSaldoEspecial("R$ 600,00");
alert("O correntista " + nCorrente.getNomeCorrentista() + "\n" +
    " possui o saldo de " + nCorrente.getSaldo() + "\n" +
    " no banco " + nCorrente.getBanco() + "\n" +
    " na conta corrente nº " + nCorrente.getNumConta() + "\n" +
    " com saldo especial de " + nCorrente.getSaldoEspecial() + ".");

nPoupanca.setNomeCorrentista("Maria Ferreira");
nPoupanca.setBanco("CEF");
nPoupanca.setNumConta("123");
nPoupanca.setSaldo("R$ 500,00");
nPoupanca.setJuros("11%");
nPoupanca.setDataVencimento("10/06/2023");
alert("O correntista " + nPoupanca.getNomeCorrentista() + "\n" +
  " possui " + nPoupanca.getSaldo() + "\n" +
  " no banco " + nPoupanca.getBanco() + "\n" +
  " na conta poupança de nº " + nPoupanca.getNumConta() + "\n" +
  " com juros de " + nPoupanca.getJuros() + "\n" +
  " e data de vencimento em " + nPoupanca.getDataVencimento() + ".");



