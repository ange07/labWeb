// 1: Cambiar el primer Hola Mundo a Adiós
let primerEncabezado = document.querySelector('h1');
primerEncabezado.textContent = 'Adiós';

// PASO 2: Cambiar el color de un encabezado a naranja
let todosLosEncabezados = document.querySelectorAll('h1');
todosLosEncabezados[1].style.color = 'orange';

// PASO 3: Hacer que un encabezado cambie a marrón cuando se clickee
let encabezadoClickeable = document.getElementById('clickable-header');
encabezadoClickeable.onclick = function() {
    encabezadoClickeable.style.color = 'brown';

    encabezadoClickeable.textContent = '¡Me hiciste click así que cambio a color marrón!';
}