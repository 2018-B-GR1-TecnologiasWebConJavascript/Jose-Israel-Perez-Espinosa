
const fs = require('fs');
let contenidoFinal='inicial'
function apendFile(nombreArchivo, contenido, callback) {
    //1)Leer el archivo
    //2.1)Si existe, añadir el contenido al archivo
    //2.2)Si no existe, crear el archivo con el contenido
    //3)Devolver el contenido completo del archivo
    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoDelArchivo)=>{
            if(error){
                //crear y escribir el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                        if(err){
                            callback(undefined,err)
                        }
                        else{
                            //devolver el contenido
                            callback(contenido);
                        }
                    }
                )
            }
            else{//añadimos el contenido al archivo
                fs.writeFile(
                    nombreArchivo,
                    contenidoDelArchivo+contenido,
                    (err)=>{
                        if(err){
                            callback(undefined,err)
                        }
                        else{
                            //devolver el contenido
                            callback(contenidoDelArchivo+contenido);
                        }
                    }
                )
            }
        }
    );

}
const respuestaApendFile = apendFile('06-ejemplo.txt', 'hola amigos   ',(contenido)=>{console.log(contenido)});
console.log(respuestaApendFile);