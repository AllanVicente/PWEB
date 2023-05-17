
function Limpar(){
    document.forms.formulario1.elements["email"].value = "";
    document.forms.formulario1.elements["nome"].value = "";
    document.forms.formulario1.elements["comentario"].value = "";
}

function Validar(){

    // usando a posicao no formulario
    if (document.forms.formulario1.elements[1].value == "" || document.forms.formulario1.elements[1].length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements[1].focus();
        return false;
    };

    // usando o nome no formulario
    if (document.forms.formulario1.elements["email"].value == "" || document.forms.formulario1.elements["email"].value.indexOf('@') == -1 || document.forms.formulario1.elements["email"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.email.focus();
        return false;
    }

    //usando o nome no formulario  de maneira direta
    if (document.forms.formulario1.elements.comentario.value == "" || document.forms.formulario1.elements.idMensagem.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
        document.getElementById("comentario").focus();
        return false;
    }

    var x = document.getElementsByName("pesquisa");

    for (var i = 0; i < x.length; i++) {
        if (x[i].checked == false ) {
            alert("Escolha uma opção da pesquisa!!!");
            return false;
        }
    }

    return true;
}