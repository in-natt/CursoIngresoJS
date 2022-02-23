/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroParseado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroParseado = parseInt(numeroIngresado);
		if (numeroParseado < 0) {
			multiplicacionNegativos = multiplicacionNegativos * numeroParseado;
			contador++;
		}
		else {
			sumaPositivos = sumaPositivos + numeroParseado;
			contador++;
		}
		respuesta = prompt("Desea ingresar otro numero? (si/no): ");
	}
	txtIdSuma.value = "La suma de los Positivos: " + sumaPositivos;
	txtIdProducto.value = "El producto de los negativos: " + multiplicacionNegativos;
}