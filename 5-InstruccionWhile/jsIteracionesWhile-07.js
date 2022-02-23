/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var numeroParseado;

	contador = 0;
	acumulador = 0;
	respuesta = "si"

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroParseado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroParseado;
		contador++;
		respuesta = prompt("Desea ingresar otro numero? (si/no): ");
	}
	
	promedio = acumulador / contador;
	txtIdSuma.value = "La suma acumulada es: " + acumulador; //boton 1
	txtIdPromedio.value = "El promedio es: " + promedio; //boton 2
}