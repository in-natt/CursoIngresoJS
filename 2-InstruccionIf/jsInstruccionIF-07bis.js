/*Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número"*/


function mostrar() {
	var edad;
	var edadParseada;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);

	if (edadParseada < 13) {
		mensaje = "Feliz dia! ";
	}
	else {
		if (edadParseada < 18) {

			mensaje = "Usted es Adolescente. ";

			if (edadParseada == 17) {
				mensaje = mensaje + " Y ademas esta en el Ultimo Año :D";
			}
		}
		else {

			mensaje = "Tenes edad de Laburar. ";

			if (edadParseada == 33) {
				mensaje = mensaje + " Y 33 como Cristo!";
			}
			else {

				if (edadParseada > 59) {
					mensaje = "A jubilarse!. ";

					if (edadParseada == 88) {
						mensaje = mensaje + " 88, Lindo numero :)";
					}
				}
			}
		}
	}
	if (edadParseada % 2 == 0) {
		mensaje = mensaje + "\n Sos Par";
	}
	alert(mensaje);
}