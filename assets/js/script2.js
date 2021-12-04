/**************************EJERCICIO 2 ************************************************************/

//Obtener los botones
let btncolor1 = document.querySelector('#btn-1');
let colorBackground1 = btncolor1.style.backgroundColor;

let btncolor2 = document.querySelector('#btn-2');
let colorBackground2 = btncolor2.style.backgroundColor;

let btncolor3 = document.querySelector('#btn-3');
let colorBackground3 = btncolor3.style.backgroundColor;

let btncolor4 = document.querySelector('#btn-4');
let colorBackground4 = btncolor4.style.backgroundColor;

let btncolor5 = document.querySelector('#btn-5');
let colorBackground5 = btncolor5.style.backgroundColor;

let btncolor6 = document.querySelector('#btn-6');
let colorBackground6 = btncolor6.style.backgroundColor;

let cajaAPintar = document.querySelector('#caja');

//EVENTOS
btncolor1.addEventListener('click', function() {

    cajaAPintar.style.backgroundColor = colorBackground1;

});

btncolor2.addEventListener('click', function() {
    cajaAPintar.style.backgroundColor = colorBackground2;
});

btncolor3.addEventListener('click', function() {
    cajaAPintar.style.backgroundColor = colorBackground3;
});

btncolor4.addEventListener('click', function() {
    cajaAPintar.style.backgroundColor = colorBackground4;
});

btncolor5.addEventListener('click', function() {
    cajaAPintar.style.backgroundColor = colorBackground5;
});

btncolor6.addEventListener('click', function() {
    cajaAPintar.style.backgroundColor = colorBackground6;
});