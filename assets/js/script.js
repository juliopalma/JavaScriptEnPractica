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

    //Valores
    let valNombre = nombre.value;
    let valAsunto = asunto.value;
    let valMensaje = mensaje.value;

    //Evaluar input nombre
    // if (valNombre == "") {
    //     errorDeNombre.innerHTML = 'El nombre es requerido';
    // } else {
    //     errorDeNombre.innerHTML = '';
    // }

    //Evaluar input asunto
    // if (valAsunto == "") {
    //     errorDeAsunto.innerHTML = 'El asunto es requerido';
    // } else {
    //     errorDeAsunto.innerHTML = '';
    // }

    // //Evaluar input mensaje
    // if (valMensaje == "") {
    //     errorDeMensaje.innerHTML = 'El mensaje es requerido';
    // } else {
    //     errorDeMensaje.innerHTML = '';
    // }

    // if (valNombre != "" && valAsunto != "" && valMensaje != "") {
    //     resultado.innerHTML = 'Mensaje enviado con éxito';
    // } else {
    //     resultado.innerHTML = '';
    // }

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

    // if (valNombre != "" && valAsunto != "" && valMensaje != "") {
    //     resultado.innerHTML = 'Mensaje enviado con éxito';
    // } else {
    //     resultado.innerHTML = '';
    // }


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





/**************************EJERCICIO 2 ************************************************************/

//Obtener los botones
// let btncolor1 = document.querySelector('#btn-1');
// let colorBackground1 = btncolor1.style.backgroundColor;

// let btncolor2 = document.querySelector('#btn-2');
// let colorBackground2 = btncolor2.style.backgroundColor;

// let btncolor3 = document.querySelector('#btn-3');
// let colorBackground3 = btncolor3.style.backgroundColor;

// let btncolor4 = document.querySelector('#btn-4');
// let colorBackground4 = btncolor4.style.backgroundColor;

// let btncolor5 = document.querySelector('#btn-5');
// let colorBackground5 = btncolor5.style.backgroundColor;

// let btncolor6 = document.querySelector('#btn-6');
// let colorBackground6 = btncolor6.style.backgroundColor;

// //EVENTOS
// btncolor1.addEventListener('click', function() {
//     document.body.style.backgroundColor = colorBackground1;
// });

// btncolor2.addEventListener('click', function() {
//     document.body.style.backgroundColor = colorBackground2;
// });

// btncolor3.addEventListener('click', function() {
//     document.body.style.backgroundColor = colorBackground3;
// });

// btncolor4.addEventListener('click', function() {
//     document.body.style.backgroundColor = colorBackground4;
// });

// btncolor5.addEventListener('click', function() {
//     document.body.style.backgroundColor = colorBackground5;
// });

// btncolor6.addEventListener('click', function() {
//     document.body.style.backgroundColor = colorBackground6;
// });


/**************************EJERCICIO 3 ************************************************************/
// //Obtengo el span donde se agrega el resultado
// let resOperacion = document.querySelector(".resultado");

// //Obtengo los input de num1 y num2
// let inputNum1 = document.querySelector("#valor1");
// let inputNum2 = document.querySelector("#valor2");

// //Obtengo su valor
// let valor1 = inputNum1.value;
// let valor2 = inputNum2.value;

// //Obtengo los ejercicios a realizar -sumar y restar-
// let suma = document.querySelector('#btn-sumar');
// let resta = document.querySelector('#btn-restar');


// /*+++++++++++++++++++++++++++++++++++EVENTOS**************************************************************/

// //Sumar
// suma.addEventListener('click', function() {
//     //Obtengo su valor
//     let valor1 = inputNum1.value;
//     let valor2 = inputNum2.value;

//     const result = parseInt(valor1) + parseInt(valor2);

//     resOperacion.innerHTML = `La suma de los números ingresados es: ` + result;

// });

// //Restar
// resta.addEventListener('click', function() {
//     //Obtengo su valor
//     let valor1 = inputNum1.value;
//     let valor2 = inputNum2.value;

//     const result = parseInt(valor1) - parseInt(valor2);

//     if (result < 0) {
//         resOperacion.innerHTML = "El resultado es: 0";
//     } else {
//         resOperacion.innerHTML = `La resta de los números ingresados es: ` + result;
//     }

// });