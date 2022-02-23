/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	var claveIngresada;
	var clave;

	clave = "utn750";
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != clave) {

		claveIngresada = prompt("Ingrese nuevamente la Clave!");
		console.log(claveIngresada);
	}
}
