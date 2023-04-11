function Soma() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var resultado = val1 + val2;
    document.getElementById("res").innerHTML = resultado;
  }
  
  function Subtracao() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var resultado = val1 - val2;
    document.getElementById("res").innerHTML = resultado;
  }
  
  function Produto() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var resultado = val1 * val2;
    document.getElementById("res").innerHTML = resultado;
  }
  
  function Divisao() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var resultado = val1 / val2;
    document.getElementById("res").innerHTML = resultado;
  }
  
  function Resto() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var resultado = val1 % val2;
    document.getElementById("res").innerHTML = resultado;
  }
  