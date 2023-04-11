function calcMedia()
{
    var nome = prompt("Entre com o seu nome: ");
    var nota1 = parseFloat(prompt("Informar 1ª nota: "));
    var nota2 = parseFloat(prompt("Informar 2ª nota: "));
    var nota3 = parseFloat(prompt("Informar 3ª nota: "));

    var media = (nota1 + nota2 + nota3)/3;

    return nome + ", sua média é " + media;
}