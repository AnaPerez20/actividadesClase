// 1. verificar que la vinculacion es correcta
// enviar un mensaje 

console.log("HOLA MUNDO! - ESTOY VINCULADO CON MI HTML"); //se verifica que esta vinculado

// 1. Variables en Js
/* Variable: Es una caja que nos guarda informacion, un espacio de memorria que guarda informacion
Hay diferentes tipos de datos: numericos (2, 2.3, 4.49849), booleanos, arreglos, textos (strings)
 objetos */
// Esa variable se define para usarla constantemente

/* 
    VARIABLES EN JS
    (VAR: NO SE USA)
    1. VAR -> nos guarda datps cambiar en el tiempo (en desuso)

    2. LET -> nos guarda datps cambiar en el tiempo (ES EL QUE SE USA)

    3. CONST -> Datos constantes, que no cambian en el timpo 
Js, medianametne equipada, porque no es tan estricto para especificar datos
*/

//2. DECLARACION DE VARIABLES (crear una cajita, una memoria)
/* 1.definir que tipo de variable voy a usar (Let o const):
    2. darle nombre a la variable
    3. decirle que va a guardar
*/

let nombreVarible = "nombre"
// = significa asignacion

// Numericos 

let numero = 5;
const pi = 3.14;

// Variables de texto -> Strings
let texto = "hola";
const nombre = "ana";

// booleanos -> verdadero o falso 

let esVerdadero = true;
const esFalso = false; 

// arreglos --> guardar mas de un dato  (del mismo dato)
// se reconocen por usar corchetes y los datos se separan por comas 
let arreglo = [];
let arregloNumeros = [5, 6, 7, 9];
let arregloNombres = [Ana, Pedro, Carla];


// POO -> Programacion orientada a objetos
// Objetos -> 



































// prom

let numeroUno = parseInt (prompt("Ingrese un numero"))
let numeroDos = parseInt (prompt("Ingrese un segundo numero"))

let resultadoSuma = numeroUno + numeroDos;


alert ("La suma de" + numeroUno + "numeroDos" + numeroDos + " es " + resultadoSuma);

//Entrada Edad y el nombre

let datoNombre = prompt("Ingresa tu nombre: ");
let datoEdad = parseInt(prompt("Ingresa tu edad: "));

//proceso

if (datoEdad >= 0){
    console.log("$ {datoNombre} eres un bebe");
}

if (datoEdad >= 0 && datoEdad <= 12){
    console.log("$ {datoNombre} eres un nino");
} else if (datoEdad >= 13 && datoEdad <= 17); {
    console.log("$ {datoNombre} eres un adolescente");
} else if (datoEdad >=18 && datoEdad <= 64) {
    console.log("$ {datoNombre} eres un adulto");
} else{
    console.log("$ {datoNombre} eres un adulto");
}