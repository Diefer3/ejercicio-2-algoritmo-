//solicitar el peso y la altura al usuario
let peso = parseFloat(prompt("ingrese su peso"));
let altura = parseFloat(prompt("ingrese su altura"));

//creo la variable de imc donde voy a dividir el peso y la altura al cuadrado
let imc = peso / (altura * altura);

//creo las condicinales que terminando los parametros
if (imc < 19.5 ){
    clasificacion = "bajo peso";

} else if (imc >= 19.5 && imc < 45.5){
    clasificacion = "peso normal";

}else if (imc >=45.5 && imc < 60.5 ){
    clasificacion "sobrepeso";

}else {
    clasificacion = "obesidad"
}
