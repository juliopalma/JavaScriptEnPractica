/**************************EJERCICIO 3 ************************************************************/
//Obtengo el span donde se agrega el resultado
let resOperacion = document.querySelector(".resultado");

//Obtengo los input de num1 y num2
let inputNum1 = document.querySelector("#valor1");
let inputNum2 = document.querySelector("#valor2");

//Obtengo su valor
let valor1 = inputNum1.value;
let valor2 = inputNum2.value;

//Obtengo los ejercicios a realizar -sumar y restar-
let suma = document.querySelector('#btn-sumar');
let resta = document.querySelector('#btn-restar');

/*+++++++++++++++++++++++++++++++++++EVENTOS**************************************************************/

//Sumar
suma.addEventListener('click', function() {
    //Obtengo su valor
    let valor1suma = inputNum1.value;
    let valor2suma = inputNum2.value;
    let result = parseInt(valor1suma) + parseInt(valor2suma);

    if (isValid(valor1suma) && isValid(valor2suma)) {

        resOperacion.innerHTML = `La suma de los números ingresados es: ${result}`;
    } else {
        alert("Solo son permitido números, por favor revisa la informacion entregada");
    }
});

//Restar
resta.addEventListener('click', function() {
    //Obtengo su valor
    let valor1 = inputNum1.value;
    let valor2 = inputNum2.value;
    let result = parseInt(valor1) - parseInt(valor2);

    if (isValid(valor1) && isValid(valor2)) {
        if (result < 0) {
            resOperacion.innerHTML = " es 0";
        } else {
            resOperacion.innerHTML = `La resta de los números ingresados es: ${result}`;
        }
    } else {
        alert("Solo son permitido números, por favor revisa la informacion entregada");
    }
});


//Funcion para validar campos de entrada
function isValid(word) {
    return word.match(/^[0-9 ]+$/) != null;
}