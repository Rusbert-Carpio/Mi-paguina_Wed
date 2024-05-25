var operandoa;
var operandob;
var operacion;
var historialOperaciones = []; // Array para almacenar el historial de operaciones

function init() {
    //variables
    var resultado = document.getElementById("resultado");
    var resta = document.getElementById("resta");
    var suma = document.getElementById("suma");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var reset = document.getElementById("reset");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var zero = document.getElementById("zero");

    //eventos
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    };
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    };
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    };
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    };
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    };
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    };
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    };
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    };
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    };
    zero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    };
    reset.onclick = function(e) {
        Resetear();
    };
    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
        agregarHistorial(operandoa + " " + operacion);
    };
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
        agregarHistorial(operandoa + " " + operacion);
    };
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
        agregarHistorial(operandoa + " " + operacion);
    };
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
        agregarHistorial(operandoa + " " + operacion);
    };
    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    };

    function limpiar() {
        resultado.textContent = "";
    }

    function Resetear() {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resultado.textContent = res;
        // Agregar la operación y el resultado al historial
        agregarHistorial(operandoa + " " + operacion + " " + operandob + " = " + res);
    }

    function agregarHistorial(operacion) {
        historialOperaciones.push(operacion); // Agregar la operación al array
        actualizarHistorial(); // Actualizar la visualización del historial
    }

    function actualizarHistorial() {
        var historialElement = document.getElementById("historial");
        historialElement.innerHTML = ""; // Limpiar el contenido anterior del historial
        historialOperaciones.forEach(function(operacion) {
            var div = document.createElement("div");
            div.textContent = operacion;
            historialElement.appendChild(div);
        });
    }
}