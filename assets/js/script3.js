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
    let valor1 = inputNum1.value;
    let valor2 = inputNum2.value;

    const result = parseInt(valor1) + parseInt(valor2);

    resOperacion.innerHTML = `La suma de los números ingresados es: ` + result;

});

//Restar
resta.addEventListener('click', function() {
    //Obtengo su valor
    let valor1 = inputNum1.value;
    let valor2 = inputNum2.value;

    const result = parseInt(valor1) - parseInt(valor2);

    if (result < 0) {
        resOperacion.innerHTML = "El resultado es: 0";
    } else {
        resOperacion.innerHTML = `La resta de los números ingresados es: ` + result;
    }

});