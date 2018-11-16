const fs = require('fs');
const arreglo=['is','ra','el']
function ejercicio(arregloStrings, callback){
    const respuestas =[];
    arregloStrings
        .forEach(
            (string, indice)=>{
                const nombreArchivo=`${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                        const respuesta= {
                            nombreArchivo: nombreArchivo,
                            contenidoArchivo: contenido,
                            error: err,
                       }


                        const estaCompleto= arregloStrings.length===arregloStrings.length;
                    }
                )
            }
        )
}
ejercicio(arreglo)