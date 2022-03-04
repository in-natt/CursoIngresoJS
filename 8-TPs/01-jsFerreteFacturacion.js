/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var unoParseado;
    var dosParseado;
    var tresParseado;
    var texto;
    var resultado;

    //Asignacion
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    texto = "La SUMA total de los productos es: $";

    //Parseo
    unoParseado = parseFloat(precioUno);
    dosParseado = parseFloat(precioDos);
    tresParseado = parseFloat(precioTres);


    //Operacion
    resultado = (unoParseado + dosParseado + tresParseado).toFixed(2);
    alert(texto + resultado);

}
function Promedio() {

    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var unoParseado;
    var dosParseado;
    var tresParseado;
    var texto;
    var resultado;

    //Asignacion
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    texto = "El PROMEDIO de los importes es: $";

    //Parseo
    unoParseado = parseFloat(precioUno);
    dosParseado = parseFloat(precioDos);
    tresParseado = parseFloat(precioTres);

    //Operacion
    resultado = (unoParseado + dosParseado + tresParseado) / 3;
    alert(texto + resultado.toFixed(2));

}
function PrecioFinal() {

    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var unoParseado;
    var dosParseado;
    var tresParseado;
    var texto;
    var resultado;
    var suma;

    //Asignacion
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo
    unoParseado = parseFloat(precioUno);
    dosParseado = parseFloat(precioDos);
    tresParseado = parseFloat(precioTres);

    //Operacion
    suma = unoParseado + dosParseado + tresParseado;
    resultado = suma * 1.21;
    texto = "El Precio Final " + suma + " + IVA es de: $";
    alert(texto + resultado.toFixed(2));

}