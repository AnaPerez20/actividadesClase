console.log("Hola estoy funcionando");
let numero1;
let numero2;
let pantalla;
let resultado = 0; //inicializar en cero

// asignar a mis variables los elementso de html
numero1 = document.getElementById("numero1").value;
numero2 = document.getElementById("numero2").value;
pantalla = document.getElementById("pantalla");

// cuando se usa el consolo -> solo le decimos a js que vamos a usar variables -> ponerlas sin comillas
console.log(numero1, numero2, pantalla);

// concatenacion-> texto + variable o numero-> algo que va en comillas y otra cosa que no va en comillas
console.log("el elemento input numero 1 es: " + numero1);

/*NO ES CONCATENACION 
console.log(5+6); */


function suma(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    let resultadoSuma = parseInt(numero1) + parseInt(numero2);
    pantalla.textContent = resultadoSuma; 
}

function resta() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = parseInt(numero1) - parseInt(numero2);
    pantalla.textContent = resultado;
}

function multiplicacion(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = parseInt(numero1) * parseInt(numero2);
    pantalla.textContent = resultado;
}

function division(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = parseFloat(numero1) / parseFloat(numero2);
    //toFixed -> muestra la cantidad de decimales que yo quiero
    //Math.ceil ->rdondea por encima
    //Math.round -> redondea numeros
    pantalla.textContent = resultado.toFixed(2); //-> esto para que me muestre solo dos decimales o los que yo quiera indicarle.
}
