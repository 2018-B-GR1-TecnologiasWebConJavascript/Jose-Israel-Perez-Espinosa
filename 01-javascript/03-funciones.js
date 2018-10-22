holaMundo()


function holaMundo() {
    console.log("Hola Mundo")

}

console.log(holaMundo())

function sumNum(numUno, numDos) {
    return numUno + numDos
}

console.log(sumNum(3, 5))
console.log(sumNum(true, 0, undefined))

function sumNums(numUno, numDos) {
    var numUnovalido = typeof numUno == 'number'
    var numDosvalido = typeof numDos == 'number'
    if (numUnovalido && numDosvalido) {
        return numUno + numDos
    }
    else {
        console.log('Los parametros no son números');
        return 0
    }

}

console.log(sumNums(5, 6))

console.log('suma 2 numeros: ', sumNums(true, 0, undefined))

function sumNnums(...numeros) {// Destructuracion de argumentos
    var suma = 0
    for (var i = 0; i < numeros.length; i++) {


        var numValido = typeof numeros[i] == 'number'
        if (numValido) {
            suma += numeros[i];

        }
        else {
            //console.log('los parametros no son numeros')
            suma = 0
            break

        }


    }
    return suma

}

console.log('suma n numeors: ', sumNnums(1, 2, 3, 4))

function saludar(nombre, funcion) {

    return `Hola ${funcion(nombre)}`;

}

console.log(saludar("israel", nombreEnMinusculas))
console.log(saludar("israel", nombreEnMayusculas))

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase()
}

function nombreEnMinusculas(nombre) {
    return nombre.toLowerCase()
}


var arreglo = [1, 2, 3]

arreglo.findIndex(
    function (valorDelArreglo, indice, arreglo) {
        return 2;
    }
)


function restar(a, b) {
    return a - b
}

console.log(restar());//undefined
console.log(restar(6, 2))//ejecución de la función
console.log('restar es tipo:', typeof restar); //tipo función
console.log(restar);//definición de la función


//Anonymous Function


var ejemplo = function () {
}//funcion anonima


var israel = {
    trabajo: function () {
        //implementación
    }
}


var arreglo = [
    function () {
        //implementacion
    }
]

// Tipos de variables
var variable; // NUNCA MAS
let variableDos = 2; // USAR ASI
variableDos = 3;

const estatura = 1.43;//SIEMPRE QUE PUEDA USAR CONST
const israel1 = {
    nombre: 'Jose'
}

israel.nombre = 'Israel';

const arregloUnoDos = [1, 2];
arregloUnoDos[0] = 3;
const nombre = 'jose';
//nombre='israel'

const casado = true;
//casado='false'

const hijos = null;
//hijos=1;

const ganarDinero = function () {
}

//NUNCA USAR LAS FUNCIONES ANÓNIMAS

const elevarAlCuadrado = function (numero) {
    return numero * numero;
}

//FAT ARROW FUNCTION =>
const elevarAlCuadrado = (numero) => {
    return numero * numero;
}

const elevarAlCuadradov2 = numero => numero * numero;
const restar2Num = (numuno, numdos) => numuno - numdos;
