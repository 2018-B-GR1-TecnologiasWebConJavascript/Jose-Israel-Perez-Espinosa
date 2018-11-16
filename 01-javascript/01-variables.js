// java  int edad =10;
// js es un lenguaje no tipado

var edad = 10;
//no se necesita usar comillas
var edadString = "10"
var sueldo = 1.344
var casado = false
var hijos = null
var dato;
var fechadeNacimiento = new Date()

var israel = {
    "nombre": "Jose",
    'segundoNombre': 'Israel',
    apellidoPaterno: 'Perez',
    apellidoMaterno: 'Espinosa',
    edad: 29,
    casado: false,
    hijos: null,
    mascotas: {nombre: 'firulais'}

}


console.log("Hola mundo")
console.log('edad', typeof edad)// number
console.log('edadString', typeof edadString)// String
console.log('sueldo', typeof sueldo)// number
console.log('casado', typeof casado)// boolean
console.log('hijos', typeof hijos)// object
console.log('dato valor', dato)// undefined
console.log('dato', typeof dato)// undefined cuando se define un var sin valor
console.log('fechedeNAcimiento', typeof fechadeNacimiento)// object
console.log('israel', typeof israel)
console.log(israel)
console.log(israel.mascotas.nombre)
israel.hija = {nombre: 'roromiya'}
console.log(israel.hija)
if(1){//truty
    console.log('si')
}else{
    console.log('no')
}
if(0){//falsy
    console.log('si')
}else{
    console.log('no')
}

if(-4){//truty
    console.log('si')
}else{
    console.log('no')
}



