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

//ejercicio en clase


const contenido = 'hola   ';
const Prom =(nombreDelArchivo,contenido)=>{
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

Prom(nombreDelArchivo,contenido)
    .then((contenido)=>{console.log('ok',contenido)})
    .catch((err)=>{console.error('mal',err)});

console.log(Prom);

