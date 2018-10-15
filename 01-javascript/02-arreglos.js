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
arregloNumeros.splice(indicenumSeis,1)
console.log(arregloNumeros)
var arregloUno = arregloNumeros.slice(0,4)
var arregloDos= arregloNumeros.slice(4,7)
console.log(arregloUno)
console.log(arregloDos)
