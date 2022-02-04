/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
	var suma;

	num1 = txtIdNumeroUno.value;
	//console.log(num1);
	num2 = txtIdNumeroDos.value;
	//console.log(num2);

	suma = parseInt(num1) + parseInt(num2);

	alert("La SUMA es: " + suma)

}

