const fs = require('fs');
let arreglo = []

function ejercicio(arregloStrings) {

    let respuestas = [];
    const nuevaPromesa = (arregloStrings) => {
        return new Promise((resolve, reject) => {
        if(arregloStrings.length===0){reject(err)}
        else{resolve()}

        }

)
}}

nuevaPromesa()
    .then((contenido)=>{console.log('ok',contenido)})
    .catch((err)=>{console.error('mal',err)});