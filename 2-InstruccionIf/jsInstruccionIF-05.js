//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
function mostrar() {
	var edad;
	var parseoEdad;

	edad = txtIdEdad.value;
	parseoEdad = parseInt(edad);

	if (parseoEdad < 13 || parseoEdad > 17) {
		alert("No eres Adolescente D:");
	}
	else {
		alert("Su edad es: " + parseoEdad);
	}
}