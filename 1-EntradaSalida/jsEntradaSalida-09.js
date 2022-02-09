/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//Declaracion de variables
	var sueldo;
	var sueldoParseado;
	var resultado;
	var texto;

	//Asignacion
	sueldo = txtIdSueldo.value;
	texto = "Su SUELDO con un 10 % de aumento es: $"

	//Parseo
	sueldoParseado = parseFloat(sueldo);
	
	//Operacion
	resultado = sueldoParseado * 1.10;

	txtIdResultado.value = texto + resultado

}
