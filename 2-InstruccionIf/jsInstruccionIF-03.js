// Al ingresar una edad debemos informar si la persona es
// mayor de edad, sino informar que es un menor de edad.

function mostrar() {

	var edad;
	var parseoEdad;

	edad = txtIdEdad.value;
	parseoEdad = parseInt(edad);

	if (parseoEdad >= 18)
	{

		alert("Sos mayor de edad!");

	} else {

		alert("Sos menor de edad");

	}

}