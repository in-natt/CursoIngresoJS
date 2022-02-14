function mostrar() {

	var edad;
	var parseoEdad;

	edad = txtIdEdad.value;
	parseoEdad = parseInt(edad);

	if (parseoEdad == 15) {

		alert("Niña bonita!");

	}
	else {
		alert("Su edad es: " + parseoEdad);
	}
}