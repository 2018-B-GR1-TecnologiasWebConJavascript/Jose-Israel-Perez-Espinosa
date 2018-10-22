//operadores
const arreglo = ['A', 'b', 'C'];
const respuesta = arreglo
    .forEach(
        (valorActualDeLaIteracion, Indice, arreglo) => {
            console.log('valor: ', valorActualDeLaIteracion);
            console.log('indice: ', Indice);
            console.log('Arreglo: ', arreglo);
        }
    );

console.log(respuesta);

arreglo.forEach(v => console.log(v))

// map-> muta un arreglo(reasigna en un nuevo arreglo)

const respuestaMap = arreglo.map(valorActual => valorActual.toLowerCase());
console.log(respuestaMap)

const arregloNumeros = [5, 7, 3, 1, 9, 4, 6, 8, 10, 2]

const respuestaFilter = arregloNumeros
    .filter(valorActual => valorActual > 5)
    .map(valorActual => valorActual + 1)
    .forEach(valorActual => console.log(valorActual));


console.log(respuestaFilter)


//find
const respuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7);

console.log(arregloNumeros.indexOf(7))
console.log(respuestaFindIndex)


//find

const respuestaFind = arregloNumeros
    .find(v => v === 7);
console.log(respuestaFind)


//some
const respuestaSome = arregloNumeros
    .some(
        n => n % 8 === 0
    );

console.log(respuestaSome)


//every
const respuestaEvery= arregloNumeros
.every(n=>n<5);
console.log(respuestaEvery)

// reduce
const respuestaReduce = arregloNumeros
    .reduce(
        (valorActualDeLaOperacion,valorActualDelArregle)=>{
            return valorActualDeLaOperacion+valorActualDelArregle},0
    );

console.log(respuestaReduce)

const respuestaReduce2 = arregloNumeros
    .reduce(
        (a,b)=>{
            return a-b},100
    );
console.log(respuestaReduce2)