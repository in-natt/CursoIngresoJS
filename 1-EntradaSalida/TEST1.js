/*
1- Una casa de computación que se especializa en venta de insumos importados
desea calcular ciertas métricas en base a las ventas de sus productos.
Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
-Nombre del producto.
-Género: (Memorias – Discos – Motherboards)
-Tipo de Venta: (Online – Local)
-Importe: (No pueden ser números negativos ni mayor a los 30000)

Se pide:
A- El más barato de “Discos” con su importe .
B- De la venta más cara, el nombre del producto y tipo de venta.
C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
*/

function mostrar() {

	var venta;
	var producto;
	var genero;
	var importe;
	var tipoVenta;
	var discoMasBarato;
	var ventaMasCara;
	var importeMin
	var importeMax
	var cantidadMemorias;
	var cantidadDiscos;
	var cantidadMothers;
	// var acumuladorMemorias;
	// var acumuladorDiscos;
	// var acumuladorMothers;
	var flag;

	venta = 0;
	cantidadMemorias = 0;
	cantidadDiscos = 0;
	cantidadMothers = 0;
	// acumuladorMemorias = 0;
	// acumuladorDiscos = 0;
	// acumuladorMothers = 0;
	flag = "In";

	while (venta < 5) {
		producto = prompt("Ingrese el nombre del producto: ");
		producto = producto.toLowerCase();

		while (producto == "") {
			producto = prompt("Ingrese el nombre del producto nuevamente: ");
			producto = producto.toLowerCase();
		}

		genero = prompt("Ingrese el genero del producto: ");
		genero = genero.toLowerCase();

		while (genero != "memorias" && genero != "discos" && genero != "mothers") {
			genero = prompt("El genero especificado no es valido\nIngrese el genero del producto nuevamente: ");
			genero = genero.toLowerCase();
		}

		tipoVenta = prompt("Ingrese el tipo de venta: ");
		tipoVenta = tipoVenta.toLowerCase();

		while (tipoVenta != "online" && tipoVenta != "local") {
			tipoVenta = prompt("El tipo de venta especificado no es valido\nIngrese el tipo de venta nuevamente: ");
			tipoVenta = tipoVenta.toLowerCase();
		}

		importe = prompt("Ingrese el importe: $");
		importe = parseInt(importe);

		while (isNaN(importe) || importe < 0 || importe > 30000) {
			importe = prompt("Ingrese el importe nuevamente: $");
			importe = parseInt(importe);
		}

		if (flag=="in") {
			importeMin = importe;
			importeMax = importe;
			flag = "out";
		}
		else{
			if (importe<importeMin) {
				importeMin = importe;
				discoMasBarato = ;	
			}
		}

		switch (genero) {
			case "memorias":
				cantidadMemorias++;
				break;
			case "discos":
				cantidadDiscos++;
				break;
			case "mothers":
				cantidadMothers++;
				break;
		}

		venta++;
	}
}
// A- El más barato de “Discos” con su importe .
// B- De la venta más cara, el nombre del producto y tipo de venta.
// C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
