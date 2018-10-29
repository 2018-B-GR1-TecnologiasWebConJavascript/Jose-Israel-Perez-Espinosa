const fs = require('fs');
const nombreDelArchivo='06-ejemplo.txt';
const nuevaPromesa =(nombreDelArchivo)=>{
    return new Promise(
        (resolve,reject)=>{
    fs.readFile(
        nombreDelArchivo,
        'utf-8',
        (err,contenidoLeidoDelArchivo)=>{
            if(err){
                reject(err)
                console.log('err')
            }
            else{
                resolve(contenidoLeidoDelArchivo);
                console.log('si')
            }
        }
    );
});};

//const promesaLeerArchivo = nuevaPromesa();
nuevaPromesa(nombreDelArchivo)
    .then((contenido)=>{console.log('ok',contenido)})
    .catch((err)=>{console.error('mal',err)});

console.log(nuevaPromesa);