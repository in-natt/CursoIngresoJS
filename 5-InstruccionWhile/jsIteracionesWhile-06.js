// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. 

function mostrar() {
	var contador;
	var acumulador;
	var numeroIngresado;
	var numeroParseado;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {
		contador++;
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroParseado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroParseado;
		console.log(acumulador);
	}
	promedio = acumulador / contador;
	txtIdSuma.value = "La suma acumulada es: " + acumulador; //boton 1
	txtIdPromedio.value = "El promedio es: " + promedio; //boton 2
}