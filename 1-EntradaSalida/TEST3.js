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
   let cantidadEmpleados, nombre, apellido, genero, cantidadHijos;
   let contadorFem, contadorMas, contadorNoB;
   let porcentajeFem, porcentajeMas, porcentajeNoB;
   let flagB, empleadoNoBinMasHijos, nomEmpleadoNoBinMasHijos;
   let flagC, nomApellidoEmpleadoSinHijos;
   let sinHijoNiAsignacion, unHijo, dosHijos, muchosHijos;
   let acumTotalAsignacion, mensaje;

   //INICIALIZO
   cantidadEmpleados = 0;
   contadorFem = 0;
   contadorMas = 0;
   contadorNoB = 0;
   acumTotalAsignacion = 0;
   flagB = true;
   flagC = true;
   sinHijoNiAsignacion = 0;
   unHijo = 0;
   dosHijos = 0;
   muchosHijos = 0;

   while (cantidadEmpleados < 4) {

      nombre = prompt("INGRESE SU NOMBRE: ");
      nombre = nombre.toLowerCase();
      while (nombre == "") {
         nombre = prompt("#ERROR#\nINGRESE SU NOMBRE NUEVAMENTE: ");
         nombre = nombre.toLowerCase();
      }

      apellido = prompt("INGRESE SU APELLIDO: ");
      apellido = apellido.toLowerCase();
      while (apellido == "") {
         apellido = prompt("#ERROR#\nINGRESE SU APELLIDO NUEVAMENTE: ");
         apellido = apellido.toLowerCase();
      }

      genero = prompt("INGRESE EL GENERO (F | M | NB): ");
      genero = genero.toUpperCase();
      while (genero != "F" && genero != "M" && genero != "NB") {
         genero = prompt("#ERROR#\nINGRESE EL GENERO NUEVAMENTE: ");
         genero = genero.toUpperCase();
      }

      cantidadHijos = prompt("INGRESE CANTIDAD DE HIJOS: ");
      cantidadHijos = parseInt(cantidadHijos);
      while (isNaN(cantidadHijos) || cantidadHijos < 0) {
         cantidadHijos = prompt("#ERROR#\nINGRESE CANTIDAD DE HIJOS NUEVAMENTE: ");
         cantidadHijos = parseInt(cantidadHijos);
      }

      switch (genero) {
         case "F":
            contadorFem++;
            break;
         case "M":
            contadorMas++;
            break;
         case "NB":
            contadorNoB++;
            //B
            if (flagB == true || cantidadHijos > empleadoNoBinMasHijos) {
               empleadoNoBinMasHijos = cantidadHijos;
               nomEmpleadoNoBinMasHijos = nombreEmpleado;
               flagB = false;
            }
            break;
      }

      switch (cantidadHijos) {
         case 0:
            //C
            if (flagC == true) {
               nomApellidoEmpleadoSinHijos = nombre.toUpperCase() + " " + apellido.toUpperCase();
               flagC = false;
               sinHijoNiAsignacion++;
            }
            break;
         case 1:
            unHijo++;
            acumTotalAsignacion += 5000;
            break;
         case 2:
            dosHijos++;
            acumTotalAsignacion += 8000;
            break;
         default:
            muchosHijos++;
            acumTotalAsignacion += 10000;
            break;
      }

      cantidadEmpleados++;
   }

   //CALCULOS DE PROMEDIO / PORCENTAJE / ETC
   porcentajeFem = (contadorFem * 100) / cantidadEmpleados;
   porcentajeMas = (contadorMas * 100) / cantidadEmpleados;
   porcentajeNoB = (contadorNoB * 100) / cantidadEmpleados;
   mensaje = "";
   
   porcentajeFem = porcentajeFem.toFixed(2) + "%";
   porcentajeMas = porcentajeMas.toFixed(2) + "%";
   porcentajeNoB = porcentajeNoB.toFixed(2) + "%";

   mensaje = "A) ";
   mensaje += " Femenino: " + porcentajeFem + "Masculino: " + porcentajeMas + " No Binario: " + porcentajeNoB + "\n";
   mensaje += "B) ";
   
   if(flagB == true){
      mensaje += "No hubo empleados de genero NB\n";
   }else{
      mensaje += "El Empleado NB Con + Hijos es: " + nomEmpleadoNoBinMasHijos + " - Cantidad de Hijos: " + empleadoNoBinMasHijos + "\n";
   }

   mensaje += "C) ";
   if(flagC == true){
      mensaje += "No hubo empleados sin hijos\n";
   }else{
      mensaje += "El 1er Empleado Sin Hijos es: " + nomApellidoEmpleadoSinHijos + "\n";
   }

   mensaje += "D)\n";
   mensaje += "Total de dinero que debera pagar la PYME: $" + acumTotalAsignacion;

   mensaje += "Cantidad sin hijos: " + sinHijoNiAsignacion + " - " + "1 Hijo: " + unHijo;

   alert(mensaje);
}
