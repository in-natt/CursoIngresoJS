/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numParseado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = "es el primero";
	respuesta = "si";

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero: ");
		numParseado = parseInt(numeroIngresado);

		while (isNaN(numParseado)) {
			numeroIngresado = prompt("# ERROR #\n" + "'" + numeroIngresado + "' No es un numero.\n Por favor ingresa un Numero valido!");
			numParseado = parseInt(numeroIngresado);
		}

		if (banderaDelPrimero == "es el primero") {
			numeroMinimo = numParseado;
			numeroMaximo = numParseado;
			banderaDelPrimero = "No lo es más.";
		}
		else {
			if (numParseado < numeroMinimo) {
				numeroMinimo = numParseado;
			}
			else {
				if (numParseado > numeroMaximo) {
					numeroMaximo = numParseado;
				}
			}
		}
		respuesta = prompt("Desea continuar? (si/no): ");
	}
	txtIdMaximo.value = "El Maximo es: " + numeroMaximo;
	txtIdMinimo.value = "El Minimo es: " + numeroMinimo;
}
