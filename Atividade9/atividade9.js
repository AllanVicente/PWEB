function Ordenar(a, b, c) {
    
    a=Number(document.getElementById("1").value);
    b=Number(document.getElementById("2").value);
    c=Number(document.getElementById("3").value);
    
    var x, y,z

    if((a<=b)&&(a<=c)){
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
    return (document.getElementById("ordenado").innerHTML = "Os números em ordem crescente são: " + x + ", " + y + ", " + z);
}