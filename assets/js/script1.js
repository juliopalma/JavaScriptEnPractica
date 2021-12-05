/************************** EJERCICIO 1********************************************************/

//Obtener elementos del formulario
let formulario = document.querySelector('#formulario');
let nombre = document.querySelector('#nombre');
let asunto = document.querySelector('#asunto');
let mensaje = document.querySelector('#mensaje');
let botonEnviar = document.querySelector('#botton');
let resultado = document.querySelector('.resultado');

//Errores
let errorDeNombre = document.querySelector('.errorNombre');
let errorDeAsunto = document.querySelector('.errorAsunto');
let errorDeMensaje = document.querySelector('.errorMensaje');

//Evento de formulario
formulario.addEventListener('submit', function(ev) {
    ev.preventDefault();

    //Valores input
    let valNombre = nombre.value;
    let valAsunto = asunto.value;
    let valMensaje = mensaje.value;

    //Evaluar input Nombre
    if (!isValid(valNombre)) {
        errorDeNombre.innerHTML = 'El nombre es requerido';
    } else {
        errorDeNombre.innerHTML = '';
    }

    //Evaluar input Asunto
    if (!isValid(valAsunto)) {
        errorDeAsunto.innerHTML = 'El asunto es requerido';
    } else {
        errorDeAsunto.innerHTML = '';
    }

    //Evaluar input Mensaje
    if (!isValid(valMensaje)) {
        errorDeMensaje.innerHTML = 'El mensaje es requerido';
    } else {
        errorDeMensaje.innerHTML = '';
    }

    //validacion para todos los campos de entrada (nombre, asunto y mensaje)
    if (isValid(valNombre) && isValid(valAsunto) && isValid(valMensaje)) {
        resultado.innerHTML = 'Mensaje enviado con éxito';
    } else {
        resultado.innerHTML = '';
    }

});

//Funcion para validar campos de entrada
function isValid(word) {
    return word.match(/^[a-zA-Z0-9 ]+$/) != null;
}