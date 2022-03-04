// Al ingresar una edad debemos informar si la persona es:
// - mayor de edad (mas de 18 años)
// - adolescente (entre 13 y 17 años)
// - niño (menor a 13 años)
function mostrar() {
	var edad;
	var parseoEdad;

	edad = document.getElementById("txtIdEdad").value;
	parseoEdad = parseInt(edad);

	if (parseoEdad > 17) 
	{
		alert("Sos MAYOR! Tu edad es " + parseoEdad);
	}
	else {
		if (parseoEdad > 12 && parseoEdad < 18) 
		{
			alert("Sos Adolescente. Tu edad es " + parseoEdad)
		}
		else {
			alert("Sos un Niño. Tu edad es " + parseoEdad);
		}
	}
}