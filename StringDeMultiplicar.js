function stringMultiplicar(n) {
    var resultado="";
    var tabla;
    for (var i=1;i<=10;i++){
        tabla =n*i;
        resultado += n+"x"+i+"="+tabla;
        if((i+1)<=10){
            resultado +="/";
        }
    }
    return resultado;
}