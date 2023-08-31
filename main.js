/* let point = prompt ("ingrese su valoracion ")
if (point>4) && (point1!= "") {alert ("¿por que esta desconforme?");} 
else {}
if (point!=""){alert("Gracias por valorar"); }
else {alert("recuerde que su valoracion nos ayuda a mejorar el servicio")}

 */

// FOR (DESDE: HASTA : MIENTRAS TANTO: ACTUALIZAR))

/* for (let i = 0; i < 100;i++){console.log (hola) } 100 veces hola si coloco i me va a mostrar del 0 hasta el 100
*/

/* let numero =parseInt(prompt("ingrese su numero"))

for (let i = 1; i<= 10; i+2)

{let resultado = numero * i 

alert(`${numero} * ${i} = ${resultado}`)} */

// for (let i = 1; i<=4;i+=2){console.log(i)};
    //if (1 ===5){break;}

/* for(let i = 1; i <=100; i ++){
    if (i %2 === 1){
        continue;
    }
    console.log(i)
} */

/* 
let numero = 0;

do { 
    numero = prompt("ingrese su nombre"); 
    console.log(numero); 
} while (parseInt (numero)) */



let puntosUsuario = 500; // Puntos iniciales del usuario

// Simulación  de canje de puntos para usarios de una app para taxis
while (puntosUsuario > 0) {
    console.log("Puntos actuales: " + puntosUsuario);
    let puntosCanjear = parseInt(prompt("Ingrese la cantidad de puntos a canjear:"));

    if ( parseInt (puntosCanjear <= 0)) {
        console.log("Por favor, ingrese una cantidad válida de puntos para canjear.");
        continue;
    }

    if (puntosCanjear > puntosUsuario) {
        alert ("No tienes suficientes puntos para canjear.");
        break;
    }

    //  descuento de puntos 
   
    let descuentopoint = (puntosUsuario - puntosCanjear);
    
    alert ("Canje exitoso. Puntos restantes: " + descuentopoint);
    alert ("Monto canjeado: $" + puntosCanjear);

    //  switch para manejar premios basados en la cantidad canjeada
    switch (puntosCanjear) {
        case 50:
            alert("¡Felicidades! Has ganado un descuento del 10% en tu próximo viaje.");
            break;
        case 100:
            alert("¡Ganaste un boucher de ropa!");
            break;
        case 200:
            alert("Canjeaste suficientes puntos para una tarjeta de regalo de $10.");
            break;
        default:
            alert ("No ganaste un premio en esta ocasión.");
    }
}

console.log("No tienes suficientes puntos para canjear.");

