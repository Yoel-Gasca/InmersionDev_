// Crear un elemento "label" con el texto "Inserta tu nombre" y agregar la clase "label"
let labelNombre = document.createElement("label");
labelNombre.textContent = "Inserta tu nombre";
labelNombre.classList.add("label");

// Crear un elemento de entrada de texto y configurar su tipo y clase
let inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.classList.add("input");

// Crear un elemento "label" con el texto "Ingresa un valor en pesos mexicanos" y agregar la clase "label"
let labelValor = document.createElement("label");
labelValor.textContent = "Ingresa un valor en pesos mexicanos";
labelValor.classList.add("label");

// Crear un elemento de entrada de texto y configurar su tipo y clase
let inputValor = document.createElement("input");
inputValor.type = "text";
inputValor.classList.add("input");

// Crear un botón de envío, establecer su tipo, valor y clase
let boton = document.createElement("input");
boton.type = "submit";
boton.value = "Convertir";
boton.classList.add("boton");

// Crear un elemento "p" para mostrar la salida y agregar la clase "salida"
let salida = document.createElement("p");
salida.classList.add("salida");

// Crear un formulario y agregar las etiquetas, campos de entrada y los botónes
let div = document.createElement("form");
div.classList.add("div");
div.appendChild(labelNombre);
div.appendChild(inputNombre);
div.appendChild(labelValor);
div.appendChild(inputValor);
div.appendChild(boton);
div.appendChild(salida);

// Agregar el formulario al cuerpo del documento HTML
document.body.appendChild(div);

// Agregar un evento de escucha al botón para la función "conversionDeMoneda"
boton.addEventListener("click", conversionDeMoneda);

// Función que convierte el valor de dólares a pesos mexicanos y muestra el resultado
function conversionDeMoneda(e) {
  e.preventDefault(); // Evitar la recarga de la página al hacer clic en el botón

  // Verificar si los campos de nombre y valor están vacíos
  if (inputNombre.value === "" || inputValor.value === "") {
    salida.textContent = "Debes insertar nombre y número";
  } else {
    // Obtener el valor en dólares ingresado por el usuario
    let valorPasajeDolares = inputValor.value;

    // Establecer el valor del dólar en pesos mexicanos
    let valorDolarAPesos = 18.1070;

    //// Realizar la conversión de dólares a pesos mexicanos y redondear el resultado a 2 decimales
    let conversionAPesos = (valorPasajeDolares * valorDolarAPesos) / 1;
    conversionAPesos = conversionAPesos.toFixed(2);

    // Mostrar un mensaje de saludo y el resultado de la conversión
    salida.textContent = `Hola ${inputNombre.value}, la conversion es $${conversionAPesos}`;
  }
}