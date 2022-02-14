// Al ingresar una edad debemos informar si la persona es adolescente,
// edad entre 13 y 17 años (inclusive)
function mostrar() {
	var edad;
	var parseoEdad;

	edad = txtIdEdad.value;
	parseoEdad = parseInt(edad);

	if (parseoEdad > 12 && parseoEdad < 18) {
		alert("Eres Adolescente :)");
		// console.log(parseoEdad);
	}
	else {
		alert("Su edad es: " + parseoEdad);
	}
}