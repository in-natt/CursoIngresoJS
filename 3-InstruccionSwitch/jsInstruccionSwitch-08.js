//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado) {
		case "Bariloche":
			alert("En " + destinoIngresado + " hace FRIO");			
			break;
		case "Cataratas":
			alert("En " + destinoIngresado + " hace CALOR");			
			break;
		case "Mar del plata":
			alert("En " + destinoIngresado + " hace CALOR");			
			break;
		case "Ushuaia":
			alert("En " + destinoIngresado + " hace FRIO");			
			break;
	}
}