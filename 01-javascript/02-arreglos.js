var arreglo = []
arreglo = ["Israel", new Date(), null, {nombre: "Jose"}]
console.log(arreglo[3])

var arregloNumeros = [1, 2, 3, 4]
arregloNumeros.push(5)//añade un elemento al final del arreglo
console.log(arregloNumeros)
arregloNumeros.pop()// elimina el ultimo elemento del arreglo
console.log(arregloNumeros)
arregloNumeros.splice(0, 1)// elimina un elemento (x,y) x= posicion desde la que va a borrar y= num elementos que va a borrar
console.log(arregloNumeros)
arregloNumeros.splice(4, 0, 5, 6, 7, 8, 9)
console.log(arregloNumeros)
var indicenumSeis = arregloNumeros.indexOf(6) //devuelve el indice del numero a buscar
arregloNumeros.splice(indicenumSeis, 1)
console.log(arregloNumeros)
var arregloUno = arregloNumeros.slice(0, 4)
var arregloDos = arregloNumeros.slice(4, 7)
console.log(arregloUno)
console.log(arregloDos)
var arreglonumUno = [1]
var arreglonumSeis = [6]
//Destructuración de arreglos

console.log(...arregloDos)
console.log(7, 8, 9)
var arregloTotal = [...arreglonumUno, ...arregloUno, ...arreglonumSeis, ...arregloDos]
console.log(arregloTotal)
var arregloNextNum = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
arregloTotal.splice(arregloTotal.length, 0, ...arregloNextNum)
console.log(arregloTotal)


//Destructuracion de arreglos
var israel = {
    nombre: "Israel",
    apellido: "Perez"
}

var jose = {
    edad: 34,
    casado: null,
    mascota: {nombre: 'firulais'}
}

var israelPerez = {
    ...israel,
    ...jose,
    edad: 26// si hay dos valores para la misma variable, toma el valor que aparece al último
}
console.log(israelPerez)

