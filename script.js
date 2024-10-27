//solicitar el peso y la altura al usuario
let peso = parseFloat(prompt("ingrese su peso"));
let altura = parseFloat(prompt("ingrese su altura"));

//creo la variable de imc donde voy a dividir el peso y la altura al cuadrado
let imc = peso / (altura * altura);
