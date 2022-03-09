/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que:
*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones.*/

function mostrar() {
   //VARIABLES
   let cantidadTotalDeEmpleados;
   let cantidadDeEmpleados;

   let nombreEmpleado;
   let apellidoEmpleado;
   let generoEmpleado;
   let cantidadDeHijosEmpleado;

   let contadorGenM;
   let contadorGenF;
   let contadorGenNB;

   let porcentajeM;
   let porcentajeF;
   let porcentajeNB;

   let entradaDelPrimerNB;
   let maximaCantidadDeHijosNB;
   let nombreCantidadDeHijosNB;

   let primerEmpleadoSinHijos;
   let nombreApellidoPrimerEmpleadoSinHijos;

   let acumuladorTotalDeAsignacion;

   //INICIALIZO
   cantidadTotalDeEmpleados = 5;
   cantidadDeEmpleados = 0;
   contadorGenM = 0;
   contadorGenF = 0;
   contadorGenNB = 0;
   acumuladorTotalDeAsignacion = 0;

   entradaDelPrimerNB = true;
   primerEmpleadoSinHijos = true;


   //LOGICA 
   while (cantidadDeEmpleados < cantidadTotalDeEmpleados) {
      //Nombre
      nombreEmpleado = prompt("INGRESE SU NOMBRE");
      nombreEmpleado = nombreEmpleado.toUpperCase();
      while (nombreEmpleado == "") {
         nombreEmpleado = prompt("EROOR. INGRESE SU NOMBRE NUEVAMENTE");
         nombreEmpleado = nombreEmpleado.toUpperCase();
      }

      //Apellido
      apellidoEmpleado = prompt("INGRESE SU APELLIDO");
      apellidoEmpleado = apellidoEmpleado.toUpperCase();
      while (apellidoEmpleado == "") {
         apellidoEmpleado = prompt("EROOR. INGRESE SU APELLIDO NUEVAMENTE");
         apellidoEmpleado = apellidoEmpleado.toUpperCase();
      }

      //Genero
      generoEmpleado = prompt("INGRESE EL GENERO");
      generoEmpleado = generoEmpleado.toUpperCase();
      while (generoEmpleado != "F" && generoEmpleado != "M" && generoEmpleado != "NB") {
         generoEmpleado = prompt("EROOR. INGRESE EL GENERO NUEVAMENTE");
         generoEmpleado = generoEmpleado.toUpperCase();
      }

      //Cantidad de Hijos 
      cantidadDeHijosEmpleado = prompt("INGRESE CANTIDAD DE HIJOS");
      cantidadDeHijosEmpleado = parseInt(cantidadDeHijosEmpleado);
      while (isNaN(cantidadDeHijosEmpleado) || cantidadDeHijosEmpleado < 0) {
         cantidadDeHijosEmpleado = prompt("ERROR. INGRESE CANTIDAD DE HIJOS NUEVAMENTE");
         cantidadDeHijosEmpleado = parseInt(cantidadDeHijosEmpleado);
      }

      //TODOS MIS DATOS VALIDADOS
      switch (generoEmpleado) {
         case "M":
            contadorGenM++;
            break;

         case "F":
            contadorGenF++;
            break;

         case "NB":
            contadorGenNB++;
            if (entradaDelPrimerNB == true || cantidadDeHijosEmpleado > maximaCantidadDeHijosNB) {
               maximaCantidadDeHijosNB = cantidadDeHijosEmpleado;
               nombreCantidadDeHijosNB = nombreEmpleado;
               entradaDelPrimerNB = false;
            }
            break;
      }

      /*
      if (primerEmpleadoSinHijos == true && cantidadDeHijosEmpleado == 0) {
         nombreApellidoPrimerEmpleadoSinHijos = apellidoEmpleado + ", " + nombreEmpleado;
         primerEmpleadoSinHijos = false;
      }
      */

      switch (cantidadDeHijosEmpleado) {
         case 0:
            if (primerEmpleadoSinHijos == true) {
               nombreApellidoPrimerEmpleadoSinHijos = apellidoEmpleado + ", " + nombreEmpleado;
               primerEmpleadoSinHijos = false;
            }
            console.log(0);
            break;
         case 1:
            acumuladorTotalDeAsignacion = acumuladorTotalDeAsignacion + 5000;
            console.log(5000);
            break;
         case 2:
            acumuladorTotalDeAsignacion += 8000;
            console.log(8000);
            break;
         default:
            acumuladorTotalDeAsignacion += 10000;
            console.log(10000);
            break;
      }

      cantidadDeEmpleados++;
   }

   //CALCULOS DE PROMEDIO / PORCENTAJE / ETC
   porcentajeM = (contadorGenM * 100) / cantidadTotalDeEmpleados;
   porcentajeF = (contadorGenF * 100) / cantidadTotalDeEmpleados;
   porcentajeNB = (contadorGenNB * 100) / cantidadTotalDeEmpleados;

   //INFORMAR
   let mensaje = "";
   
   porcentajeM = porcentajeM.toFixed(2) + "%";
   porcentajeF = porcentajeF.toFixed(2) + "%";
   porcentajeNB = porcentajeNB.toFixed(2) + "%";

   mensaje = "A)\n";
   mensaje += "M: " + porcentajeM + " F: " + porcentajeF + " NB: " + porcentajeNB + "\n";
   mensaje += "B)\n";
   
   if(entradaDelPrimerNB == true){
      mensaje += "No hubo empleados de genero NB\n";
   }else{
      mensaje += "El NB con mas hijos es: " + nombreCantidadDeHijosNB + " - Cant Hijos: " + maximaCantidadDeHijosNB + "\n";
   }

   mensaje += "C)\n";
   if(primerEmpleadoSinHijos == true){
      mensaje += "No hubo empleados sin hijos\n";
   }else{
      mensaje += "El primer empleado sin hijoos es: " + nombreApellidoPrimerEmpleadoSinHijos + "\n";
   }

   mensaje += "D)\n";
   mensaje += "Total de dinero que debera pagar la PYME: $ " + acumuladorTotalDeAsignacion;

   alert(mensaje);
}
