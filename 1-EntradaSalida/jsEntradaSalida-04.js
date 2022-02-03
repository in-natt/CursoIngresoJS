/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado=prompt("Ingrese un nombre: ", "Natt x ejemplo");

	document.getElementById("txtIdNombre").value=nombreIngresado;

	//alert(nombreIngresado);

}

