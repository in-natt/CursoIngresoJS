/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	//Declaracion de variables
	var num1;
	var num2;
	var num1Parseado;
	var num2Parseado;
	var resto;

	//Asignacion
	num1 = txtIdNumeroDividendo.value;
	num2 = txtIdNumeroDivisor.value;

	//Parseo
	num1Parseado = parseInt(num1);
	num2Parseado = parseInt(num2);

	//Operacion
	resto = num1Parseado % num2Parseado;

	alert("El RESTO es: " + resto);

}
