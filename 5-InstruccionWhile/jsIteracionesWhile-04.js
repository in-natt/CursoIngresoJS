/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	var numeroIngresado;
	var numParseado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9");
	numParseado = parseInt(numeroIngresado);

	while (numParseado > 9 || numParseado < 0) {

		numParseado = prompt("Incorrecto # Ingrese un Nº entre 0 y 9: ");
		numParseado = parseInt(numParseado);
	}

	txtIdNumero.value = "El dato obtenido y validado es: " + numParseado;
}

/*
 	comA	||	CompB	resultado
10	T			F		T
-3	F			T		T
7	F			F		F
*/