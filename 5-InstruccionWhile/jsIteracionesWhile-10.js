/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var numParseado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPos;
	var promedioNeg;
	var modulo;
	var diferencia;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero: ");
		numParseado = parseInt(numeroIngresado);

		while (isNaN(numParseado)) {
			numeroIngresado = prompt("# ERROR #\n" + "'" + numeroIngresado + "' No es un numero.\n Por favor ingresa un Numero valido!");
			numParseado = parseInt(numeroIngresado);
		}

		if (numParseado != 0) {

			if (numParseado < 0) {
				//1. Suma (-)
				sumaNegativos = sumaNegativos + numParseado;
				//4. Cantidad (-)
				contadorNegativos++;
				//8. Promedio (-)
				promedioNeg = sumaNegativos / contadorNegativos;
			}
			else {
				if (numParseado > 0) {
					//2. Suma (+)
					//numParseado > 0;
					sumaPositivos = sumaPositivos + numParseado;
					//3. Cantidad (+)
					contadorPositivos++;
					//7. Promedio (+)
					promedioPos = sumaPositivos / contadorPositivos;
				}
			}

			//6. Cantidad Pares
			modulo = numParseado % 2;

			switch (modulo) {
				case 0:
					console.log("Es Par");
					contadorPares++;
					break;
			}

		} else {
			if (numParseado == 0) {
				contadorCeros++;
			}

		}
		//9. Diferencia
		diferencia = (sumaPositivos + sumaNegativos);
		respuesta = prompt("Desea continuar? (si/no): ");
	}

	document.writeln("<br>1- La Suma de los negativos es: " + sumaNegativos);
	document.writeln("<br>2- La Suma de los positivos es: " + sumaPositivos);
	document.writeln("<br>3- La cantidad de positivos es: " + contadorPositivos);
	document.writeln("<br>4- La cantidad de negativos es: " + contadorNegativos);
	document.writeln("<br>5- La cantidad de ceros es: " + contadorCeros);
	document.writeln("<br>6- La cantidad de números pares es: " + contadorPares);
	document.writeln("<br>7- El Promedio de los positivos es: " + promedioPos);
	document.writeln("<br>8- El Promedio de los negativos es: " + promedioNeg);
	document.writeln("<br>9- La Diferencia es: " + diferencia);
	document.writeln("<br>   ---FIN---   </br>");

	// document.open();
	// document.write(<br> "1- La Suma de los negativos es: " + sumaNegativos </br>);
	// document.write(<br> "2- La Suma de los positivos es: " + sumaPositivos </br>);
	// document.write(<br> "3- La cantidad de positivos es: " + contadorPositivos </br>);
	// document.write(<br> "4- La cantidad de negativos es: " + contadorNegativos </br>);
	// document.write(<br> "5- La cantidad de ceros es: " + contadorCeros </br>);
	// document.write(<br> "6- La cantidad de números pares es: " + contadorPares </br>);
	// document.write(<br> "7- El Promedio de los positivos es: " + promedioPos </br>);
	// document.write(<br> "8- El Promedio de los negativos es: " + promedioNeg </br>);
	// document.write(<br> "9- La Diferencia es: " + diferencia </br>);
	// document.write(<br> "   ---FIN---   " </br>);
	// document.close();
}