<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2025 by angeloralac (http://jsbin.com/qiqusul/2/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%


//Recargo
var recargo = 0
var recargo_total = 0
var recargo_total_conyuge = 0
var recargo_total_hijos = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números")

var casado = prompt("¿Está casado actualmente?", "si/no")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su conyuge?")
}


//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0;
if ("SI" == hijos.toUpperCase()){
  var numero_hijos = prompt("Cuantos hijos tiene?")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */

cantidad_hijos = parseInt (numero_hijos);


//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 

if(edad_numero>=18 && edad_numero<=24){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo;
}
else if(edad_numero>=25 && edad_numero<=49){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo;
}
else if(edad_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo;
}

/** 
 * 2. Recargo por la edad del conyuge
 */

if("SI" == casado.toUpperCase())
 if(edad_conyuge_numero>=18 && edad_conyuge_numero<=24){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_18
  recargo_total_conyuge = recargo_total_conyuge + recargo;

 }else if(edad_conyuge_numero>=25 && edad_conyuge_numero<=49){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_25
  recargo_total_conyuge = recargo_total_conyuge + recargo;
}

else if(edad_conyuge_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_50
  recargo_total_conyuge = recargo_total_conyuge + recargo;
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 

if("SI" == hijos.toUpperCase()){
  recargo = precio_base * hijos_recargo * cantidad_hijos;
  recargo_total_hijos = recargo_total_hijos + recargo;
}

precio_final = precio_base + recargo_total + recargo_total_conyuge + recargo_total_hijos;


//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El recargo total de su conyuge sera de: "+recargo_total_conyuge)
alert ("El recargo toral de sus hijos sera de: "+recargo_total_hijos)
alert ("El precio sera de: "+precio_final)
</script>
</body>
</html>