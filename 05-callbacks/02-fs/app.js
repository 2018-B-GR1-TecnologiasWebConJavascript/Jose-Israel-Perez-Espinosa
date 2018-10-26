const fs = require('fs');
//const express = require('express');
//console.log(fs);
//console.log('------------------------------------------------------------------------------',express);
const fileName = 'ejemplo.txt';
console.log('Inicio')
const contenidoArchivo = new Date();


fs.readFile(fileName, 'utf-8',
    (error, data) => {

        if (error) {
            try {
                throw new Error(error);
            }
            catch (e) {
                console.error('error CTM:', e);
            }
        }
        else {

            console.log(data);
            fs.writeFile(fileName, data + '\n' + contenidoArchivo,
                (err) => {
                    if (err) throw err;
                    console.log('Archivo Guardado!');
                });
        }

    }
);


console.log('Fin');
