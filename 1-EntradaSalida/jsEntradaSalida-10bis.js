/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego pedir
porcentaje por PROMPT() y mostrar el importe total con
el Descuento ingresado en el cuadro de texto "RESULTADO"
*/
function mostrarDescuento()
{

	//Declaracion de variables
	var importe;
	var importeParseado;
	var resultado;
	var texto;
	var porcentaje;
	var porcentajeParseado;
	var descuento

	
	//Asignacion
	porcentaje = prompt("Ingrese un porcentaje Descontar", 25);

	importe = txtIdImporte.value;

	texto = "Su importe con un Descuento del " + porcentaje + "% es: $";
	
	
	//Parseo
	importeParseado = parseInt(importe);

	porcentajeParseado = parseInt(100 - porcentaje);
	
	//Operacion
	descuento = "0." + porcentajeParseado;

	resultado = importeParseado * descuento;
	
	txtIdResultado.value = texto + resultado;

}
