/*
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego pedir porcentaje por PROMPT() y
mostrar el importe con el aumento ingresado en el cuadro de texto "txtIdResultado".*/
function mostrarAumento()
{

	//Declaracion de variables
	var sueldo;
	var sueldoParseado;
	var resultado;
	var texto;
	var porcentaje;
	var porcentajeParseado;

	
	//Asignacion
	porcentaje = prompt("Ingrese un porcentaje a calcular", 15);

	sueldo = txtIdSueldo.value;

	texto = "Su SUELDO con un Aumento de " + porcentaje + "% es: $";
	
	
	//Parseo
	sueldoParseado = parseFloat(sueldo);

	porcentajeParseado = parseFloat("1."+ porcentaje);
	
	//Operacion
	resultado = sueldoParseado * porcentajeParseado;
	
	txtIdResultado.value = texto + resultado;

}
