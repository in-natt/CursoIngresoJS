/*
1. Se ingresan 5 importes, marca del producto y país de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Mínimo importe con su país
b. Máximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el máximo encontrado aplicar un descuento del 10% a dicho importe.*/

function mostrar() {
	var marca;
	var importe;
	var paisOrigen;
	var cantidad;
	var importeMin;
	var minPais;
	var importeMax;
	var maxMarca;
	var flag;
	var promedioImporte;
	var importeTotal;
	var cantidadChina;
	var porcentaje;
	var descuento;
	var resultado;


	cantidad = 0;
	cantidadChina = 0;
	importeTotal = 0;
	porcentaje = 10;
	flag = "In";


	while (cantidad < 5) {

		importe = prompt("Ingrese el importe del producto: $");
		importe = parseInt(importe);

		while (isNaN(importe)) {
			importe = prompt("# ERROR #\n" + "Ingrese el importe del producto nuevamente: $");
			importe = parseInt(importe);
		}
		importeTotal += importe;

		marca = prompt("Ingrese la marca del producto: ");
		while (marca == "") {
			marca = prompt("Por favor, Ingrese la marca del producto: ");
		}

		//país de origen (china, uruguay o paraguay)
		paisOrigen = prompt("Ingrese país de origen: ");
		paisOrigen = paisOrigen.toLowerCase();

		while (paisOrigen != "china" && paisOrigen != "uruguay" && paisOrigen != "paraguay") {
			paisOrigen = prompt("Ingrese un país de origen valido: \n (china, uruguay o paraguay)");
			paisOrigen = paisOrigen.toLowerCase();
		}

		// d. Cantidad de productos de China
		if (paisOrigen == "china") {
			cantidadChina++;
		}
		//a. Mínimo importe con su país
		//b. Máximo importe con su marca
		if (flag == "In") {
			importeMin = importe;
			minPais = paisOrigen;

			importeMax = importe;
			maxMarca = marca;
			flag = "Out";
		}
		else {
			if (importe < importeMin) {
				importeMin = importe;
				minPais = paisOrigen;
			}
			else {
				if (importe > importeMax) {
					importeMax = importe;
					maxMarca = marca;
				}
			}
		}

		cantidad++;
	}
	// c. Promedio importe
	promedioImporte = importeTotal / cantidad;

	// e. Sobre el máximo encontrado aplicar un descuento del 10% a dicho importe.
	porcentaje = parseInt(100 - porcentaje);
	descuento = "0." + porcentaje;
	resultado = importeMax * descuento;

	document.writeln("<br>a. El Mínimo importe es: $" + importeMin + " y su país de origen es: " + minPais.toUpperCase());
	document.writeln("<br>b. El Máximo importe es: $" + importeMax + " y su marca es: " + maxMarca.toUpperCase());
	document.writeln("<br>c. Promedio importe: " + promedioImporte);
	document.writeln("<br>d. Cantidad de productos de China: " + cantidadChina);
	document.writeln("<br>e. 10% Descuento para el máximo importe: " + resultado);
	document.writeln("<br>   ---FIN---   </br>");
}

// x. Importe		Marca				Pais
// 1. 150			bimbo				uruguay
// 2. 75			lucerito			paraguay
// 3. 205			yang				china
// 4. 400			zera				china
// 5. 40			montevideana		uruguay