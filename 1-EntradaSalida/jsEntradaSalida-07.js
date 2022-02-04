/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {

	//Declaracion de variables
	var num1;
	var num2;
	var num1Parseado;
	var num2Parseado;
	var suma;

	//Asignacion
	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	//Parseo
	num1Parseado = parseInt(num1);
	num2Parseado = parseInt(num2);

	//Operacion
	suma = num1Parseado + num2Parseado;

	alert("El resultado de la SUMA es: " + suma);

}

function restar() {

	//Declaracion de variables
	var num1;
	var num2;
	var num1Parseado;
	var num2Parseado;
	var resta;

	//Asignacion
	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	//Parseo
	num1Parseado = parseInt(num1);
	num2Parseado = parseInt(num2);

	//Operacion
	resta = num1Parseado - num2Parseado;

	alert("El resultado de la RESTA es: " + resta);

}

function multiplicar() {

	//Declaracion de variables
	var num1;
	var num2;
	var num1Parseado;
	var num2Parseado;
	var multiplicar;

	//Asignacion
	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	//Parseo
	num1Parseado = parseInt(num1);
	num2Parseado = parseInt(num2);

	//Operacion
	multiplicar = num1Parseado * num2Parseado;

	alert("El resultado de la MULTIPLICACION es: " + multiplicar);

}

function dividir() {

	//Declaracion de variables
	var num1;
	var num2;
	var num1Parseado;
	var num2Parseado;
	var dividir;

	//Asignacion
	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	//Parseo
	num1Parseado = parseInt(num1);
	num2Parseado = parseInt(num2);

	//Operacion
	dividir = num1Parseado / num2Parseado;

	alert("El resultado de la DIVISION es: " + dividir);

}

