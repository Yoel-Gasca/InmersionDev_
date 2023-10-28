// Función para iniciar el juego
function iniciarJuego() {
  alert("Bienvenido al Juego del Mentalista");
  
  let intentos = 0;
  const numeroSecreto = Math.floor(Math.random() * 1000) + 1;
  
  console.log(numeroSecreto);
  
  while (true) { // Bucle infinito
    intentos += 1;
  
    let numeroDigitado = prompt(
      "Este es tu intento " + intentos + ". Ingresa un número entre 1 y 1000"
    );
  
    numeroDigitado = parseInt(numeroDigitado);
  
    if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 1000) {
      alert("Ingresa un número válido entre 1 y 1000.");
    } else {
      if (numeroSecreto === numeroDigitado) {
        alert("Acertaste");
        
        // Pide al usuario si desea volver a jugar
        const jugarDeNuevo = confirm("¿Deseas jugar de nuevo?");
        if (jugarDeNuevo) {
          iniciarJuego(); // Reinicia el juego
        } else {
          alert("Gracias por jugar. ¡Hasta la próxima!");
          return; // Sale de la función
        }
      } else if (numeroSecreto > numeroDigitado) {
        alert(
          "Te equivocaste... el número secreto es mayor que " + numeroDigitado
        );
      } else if (numeroSecreto < numeroDigitado) {
        alert(
          "Te equivocaste... el número secreto es menor que " + numeroDigitado
        );
      }
    }
  }
}

// Pide al usuario que decida si desea jugar
const jugar = prompt("¿Deseas jugar? (s/n)");

if (jugar.toLowerCase() === "s") { // Convierte la respuesta del usuario a minúsculas
  iniciarJuego(); // Inicia el juego
} else {
  alert("Gracias por jugar. ¡Hasta la próxima!");
}