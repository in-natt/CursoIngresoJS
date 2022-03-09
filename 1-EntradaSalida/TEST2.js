/*2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las 'planillas de ventas' que poseen los siguientes datos (No sabemos cuantas planillas hay):
* Nombre de vendedor (Juan, Pedro o María)
* Importe de la venta (numero positivo NO mayor que 10000)
Al terminar de cargar las planillas se debe 'calcular el total de la comisión por vendedor':
-Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500ª000 obtendrá una
comisión del 10% sobre ese total.
-De no alcanzar esta cifra, su comisión será del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comisión. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones*/

function mostrar() {
	var nomVendedor;
	var importeVenta;
	var importeJuan;
	var importePedro;
	var importeMaria;
	var contadorJuan;
	var contadorPedro;
	var contadorMaria;
	var importeMayor;
	var comisionJuan;
	var comisionPedro;
	var comisionMaria;
	var porcentaje5;
	var porcentaje10;
	var comisionMax;
	var respuesta;

	respuesta = "si";
	importeJuan = 0;
	importePedro = 0;
	importeMaria = 0;
	contadorJuan = 0;
	contadorPedro = 0;
	contadorMaria = 0;
	importeMayor = 500000;
	porcentaje5 = 0.05;
	porcentaje10 = 0.1;

	while (respuesta == "si") {
		respuesta = respuesta.toLowerCase();
		//Nombre de vendedor (Juan, Pedro o María)
		nomVendedor = prompt("Ingrese su nombre: ");
		nomVendedor = nomVendedor.toLowerCase();

		while (nomVendedor != "juan" && nomVendedor != "pedro" && nomVendedor != "maria") {
			nomVendedor = prompt(nomVendedor + " Su nombre no es valido. (Juan, Pedro o María)\nIngrese su nombre nuevamente: ");
			nomVendedor = nomVendedor.toLowerCase();
		}

		//Importe de la venta (numero positivo NO mayor que 10000)
		importeVenta = prompt("Ingrese el importe de su venta: $");
		importeVenta = parseInt(importeVenta);

		while (isNaN(importeVenta) || importeVenta < 0 || importeVenta > 10000) {
			importeVenta = prompt("No es un importe valido. (Tope 10000)\nIngrese el importe nuevamente: $");
			importeVenta = parseInt(importeVenta);
		}

		switch (nomVendedor) {
			case "juan":
				importeJuan += importeVenta;
				contadorJuan++;
				break;
			case "pedro":
				importePedro += importeVenta;
				contadorPedro++;
				break;
			case "maria":
				importeMaria += importeVenta;
				contadorMaria++;
				break;
		}
		
		respuesta = prompt("Desea continuar? (si/no): ");
		respuesta = respuesta.toLowerCase();
	}
	
	//Punto A
	if (importeJuan > importeMayor) {
		comisionJuan = importeJuan * porcentaje10;
	}else{
		comisionJuan = importeJuan * porcentaje5;
	}

	if (importePedro > importeMayor) {
		comisionPedro = importePedro * porcentaje10;
	}else{
		comisionPedro = importePedro * porcentaje5;
	}

	if (importeMaria > importeMayor) {
		comisionMaria = importeMaria * porcentaje10;
	}else{
		comisionMaria = importeMaria * porcentaje5;
	}

	//Punto B
	if(comisionJuan > comisionPedro){
		if (comisionJuan > comisionMaria) {
			comisionMax = "Juan";
		}else{
			comisionMax = "Maria";
		}
	}else{
		if (comisionPedro > comisionMaria) {
			comisionMax = "Pedro";
		}else{
			comisionMax = "Maria";
		}
	}

	document.writeln("<br><h2>_-_-_JUAN_-_-_</h2>");
	document.writeln("<br>-Su Importe total de ventas es: $" + importeJuan);
	document.writeln("<br>-Su cantidad de ventas es: " + contadorJuan);
	document.writeln("<br>-La comisión de sus ventas es: $" + comisionJuan);
	document.writeln("<br>")
	document.writeln("<br><h2>_-_-_PEDRO_-_-_</h2>");
	document.writeln("<br>-Su Importe total de ventas es: $" + importePedro);
	document.writeln("<br>-Su cantidad de ventas es: " + contadorPedro);
	document.writeln("<br>-La comisión de sus ventas es: $" + comisionPedro);
	document.writeln("<br>")
	document.writeln("<br><h2>_-_-_MARIA_-_-_</h2>");
	document.writeln("<br>-Su Importe total de ventas es: $" + importeMaria);
	document.writeln("<br>-Su cantidad de ventas es: " + contadorMaria);
	document.writeln("<br>-La comisión de sus ventas es: $" + comisionMaria);
	document.writeln("<br>");
	document.writeln("<br>________________________________________________________________");
	document.writeln("<br>");
	document.writeln("<br><h3> * El vendedor que más dinero recaudo es: ");
	document.writeln("<br><h1>" + comisionMax.toUpperCase());
}