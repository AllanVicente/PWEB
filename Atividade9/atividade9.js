
function Ordenar(a, b, c) {

    a=parseFloat(document.getElementById("1").value);
    b=parseFloat(document.getElementById("2").value);
    c=parseFloat(document.getElementById("3").value);
    
    var numeros=[a,b,c];
    
    numeros.sort((a, b) => a - b)
    
    return (document.getElementById("ordenado").innerHTML = "Os números em ordem crescente são: " + numeros + ".");


    /*if((a<=b)&&(a<=c)){
        x=a;
        if(b<=c){
            y=b;
            z=c;
        }
        else{
            y=c;
            z=b;
        }
    }
    else if(b<c){
        x=b;
        if(a<=c){
            y=a;
            z=c;
        }
        else{
            y=c;
            z=a;
        }
    }
    else{
        x=c;
        if(a<=b){
            y=a;
            z=b;
        }
        else{
            y=b;
            z=a;
        }
    }
    
    return (document.getElementById("ordenado").innerHTML = "Os números em ordem crescente são: " + x + ", " + y + ", " + z);*/
}

function Maior(a, b, c) {

    a=parseFloat(document.getElementById("1").value);
    b=parseFloat(document.getElementById("2").value);
    c=parseFloat(document.getElementById("3").value);
    
    var numeros=[a,b,c];
    
    max = Math.max(...numeros);
    return (document.getElementById("maior").innerHTML = "O maior valor informado foi: " + max + ".");
}