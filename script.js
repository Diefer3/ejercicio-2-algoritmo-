//solicitar el peso y la altura al usuario
let peso = parseFloat(prompt("ingrese su peso"));
let altura = parseFloat(prompt("ingrese su altura"));

//creo la variable de imc donde voy a dividir el peso y la altura al cuadrado
let imc = peso / (altura * altura);

//creo las condicinales que determinan los parametros
if (imc < 18.5 ){
    clasificacion = "bajo peso";

} else if (imc >= 18.5 && imc < 24.9){
    clasificacion = "peso normal";

}else if (imc >=25 && imc < 29.9 ){
    clasificacion = "sobrepeso";

}else {
    clasificacion = "obesidad"
}

//muestro el resultado de imc por document.write
document.write("tu imc es:" + imc.toFixed(2)+"<br>");
document.write("clasificacion" + clasificacion);
 