// Variables para el usuario y sus puntos
let puntosUsuario = 500;

// Array para almacenar los premios canjeados
const premiosCanjeados = [];

// Objeto que representa al usuario
const usuario = {
  puntos: puntosUsuario,
};

// Función para realizar el canje de puntos
function canjearPuntos() {
  while (usuario.puntos > 0) {
    console.log("Puntos actuales: " + usuario.puntos);
    let puntosCanjear = parseInt(prompt("Ingrese la cantidad de puntos a canjear:"));

    if (puntosCanjear <= 0 || isNaN(puntosCanjear)) {
      console.log("Por favor, ingrese una cantidad válida de puntos para canjear.");
      continue;
    }

    if (puntosCanjear > usuario.puntos) {
      alert("No tienes suficientes puntos para canjear.");
      break;
    }

    // Descuento de puntos
    usuario.puntos -= puntosCanjear;

    alert("Canje exitoso. Puntos restantes: " + usuario.puntos);
    alert("Monto canjeado: $" + puntosCanjear);

    // Switch para manejar premios basados en la cantidad canjeada
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
        alert("No ganaste un premio en esta ocasión.");
    }

    // Agregar el premio al array de premios canjeados
    premiosCanjeados.push(puntosCanjear);
  }

  console.log("No tienes suficientes puntos para canjear.");
}

// Función para buscar un premio específico en el array de premios canjeados
function buscarPremio(premio) {
  if (premiosCanjeados.includes(premio)) {
    console.log("El usuario ha canjeado el premio de " + premio + " puntos.");
  } else {
    console.log("El usuario no ha canjeado el premio de " + premio + " puntos.");
  }
}

// Llamar a la función para iniciar el canje
canjearPuntos();

// Llamar a la función para buscar un premio específico (ejemplo: 100 puntos)
buscarPremio(100);
