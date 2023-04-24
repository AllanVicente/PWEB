/*Durante o lançamento de um filme, 45 pessoas assistiram. Na saída
foi realizada uma pesquisa informando a idade, sexo e a opinião,
onde: ótimo=4, bom=3, regular=2, péssimo=1.
Fazer uma aplicação utilizando JavaScript que receba os dados
(idade, sexo e opinião) e retornar:
    a média da idade das pessoas que responderam ao questionário;
    a idade da pessoa mais velha;
    a idade da pessoa mais nova;
    a quantidade de pessoas que responderam péssimo;
    a porcentagem de pessoas que responderam ótimo e bom;
    o número de mulheres e homens que responderam ao questionário.*/
var pessoa = [];

function addPessoa(){

    if (pessoa.length >= 45) {
        alert("Limite de 45 pessoas atingido!");
        return;
    }


    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var opiniao = document.querySelector('input[name="opiniao"]:checked').value;

    if (idade < 0 ) {
        alert("Idade inválida!!!");
        return;
    }

    if (document.getElementById("idade").value.trim().length === 0) {
        alert("Informe sua idade!!!");
        return;
      }
  
    pessoa.push([idade, sexo, opiniao]);

    document.getElementById("idade").value = "";

}


function mediaIdade(){
    var somaIdade = 0;

    for (var i = 0; i < pessoa.length; i++) {
      somaIdade += parseInt(pessoa[i][0]);
    }
  
    var mediaIdade = somaIdade / pessoa.length;

    return (mediaIdade)
}

function idadeMaisVelha(){
    var v=0;
    for (var i = 0; i < pessoa.length; i++) {
        if (pessoa[i][0] > v){
            v = pessoa[i][0];
        }
      }
  
      return (v)

}

function idadeMaisNova(){
    var n=99;
    for (var i = 0; i < pessoa.length; i++) {
        if (pessoa[i][0] < n){
            n = pessoa[i][0];
        }
      }
  
      return (n)
    
}

function respostaPessimo(){
    var somaPessimo = 0;
    for(var i=0; i < pessoa.length; i++){
        if (pessoa[i][2] == 1){
            somaPessimo++;
        }
    }
    return (somaPessimo)
}

function respostaOtimoBom(){
    var somaOtimoBom = 0;
    for(var i=0; i < pessoa.length; i++){
        if (pessoa[i][2] == 3 || pessoa[i][2] == 4){
            somaOtimoBom++;
        }
    }
    return (somaOtimoBom)
}

function numHM(){
    var somaH = 0;
    var somaM = 0;
    for(var i=0; i < pessoa.length; i++){
        if (pessoa[i][1] == "M"){
            somaH++;
        }else
            somaM++;
    }
    return (somaH + " homen(s) e " + somaM + " mulher(es).");
}

function dadosLevantados(){
    document.getElementById("dadosLevantados").innerHTML = "A média da idade do público foi de " + mediaIdade() + " anos sendo " + 
                                                                    idadeMaisVelha() + " a idade da pessoa mais velha e " +
                                                                    idadeMaisNova() + " a idade da pessoa mais nova. O número de pessoas que avaliou o filme como péssimo foi de " +
                                                                    respostaPessimo() + " e como bom ou òtimo de " +
                                                                    respostaOtimoBom() + ". Dos presentes haviam " + 
                                                                    numHM();
}
