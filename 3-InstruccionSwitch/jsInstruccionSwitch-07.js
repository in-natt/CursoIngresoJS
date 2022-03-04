/*Al selecionar un destino, indicar el punto cardinal de nuestro pais
en donde se encuentra Norte, Sur, Este u Oeste
"Bariloche" - Oeste
"Cataratas" - Norte
"Mar del plata" - Este
"Ushuaia" - Sur */
function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Su destino " + destinoIngresado + " esta al OESTE");			
			break;
		case "Cataratas":
			alert("Su destino " + destinoIngresado + " esta al NORTE");			
			break;
		case "Mar del plata":
			alert("Su destino " + destinoIngresado + " esta al ESTE");			
			break;
		case "Ushuaia":
			alert("Su destino " + destinoIngresado + " esta al SUR");			
			break;
	}
}