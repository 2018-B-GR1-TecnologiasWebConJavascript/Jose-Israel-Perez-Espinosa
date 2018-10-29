//ejercicio en clase
const fs = require('fs');
const nombreDelArchivo='06-ejemplo.txt';
const contenido = 'hola   ';
const nuevaPromesa =(nombreDelArchivo,contenido)=>{
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(
                nombreDelArchivo,
                'utf-8',
                (err,contenidoLeidoDelArchivo)=>{
                    if(err){
                        reject(err);
                        console.log('err')
                    }
                    else{
                        fs.writeFile(nombreDelArchivo,
                            contenidoLeidoDelArchivo+contenido,
                            (err)=> {
                                if (err) {
                                    reject(err)
                                }
                                else {
                                    //devolver el contenido
                                    resolve(contenidoLeidoDelArchivo+contenido)
                                }
                            });
                        resolve(contenidoLeidoDelArchivo+contenido);
                        console.log('si')
                    }
                }
            );
        });};

nuevaPromesa(nombreDelArchivo,contenido)
    .then((contenido)=>{console.log('ok',contenido)})
    .catch((err)=>{console.error('mal',err)});

console.log(nuevaPromesa);