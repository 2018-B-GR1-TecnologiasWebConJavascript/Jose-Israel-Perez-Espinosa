const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;


const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Elige una opción:',
    choices: [ 'Actualizar', 'Crear', 'Buscar', 'Borrar',]
};

const preguntasBuscar = {type: 'input', name: 'numPoke', message: 'Ingrese el número del Pokemon a buscar: '};

const preguntasEliminar = {type: 'input', name: 'numPoke', message: 'Ingrese el número del Pokemon a eliminar: '};

const preguntasActualizar = [
    {type: 'input', name: 'number', message: 'Ingrese el numero del Pokemon: '},
    {type: 'input', name: 'name', message: 'Ingrese el nombre del Pokemon: '},
    {type: 'input', name: 'type', message: 'Ingrese el tipo del Pokemon: '},
];

const preguntasIngresar = [
    {type: 'input', name: 'number', message: 'Ingrese el numero del Pokemon: '},
    {type: 'input', name: 'name', message: 'Ingrese el nombre del Pokemon: '},
    {type: 'input', name: 'type', message: 'Ingrese el tipo del Pokemon: '},
];


function main() {
    console.log('/////////////////  POKEDEX  /////////////////');
    //vamos a correr primero la funcion inicializarBase
    inicializarBase() //$ aqui tenemos un observable
        .pipe(mergeMap(// ##### 1. PREGUNTAR OPCION #### //concatenamos con otro observable  con las de preguntas
            //EN este merge map tenemos la respuesta del usuario y de la base
            (respuestasBDD) => {
                return preguntarMenu() //recibimos opcion menu, aqui ejecutamos esa funcion
                    .pipe(map((respuesta) => {
                        //ya estamos dentro del observable aqui por lo tanto esto ya es una respuesta normal
                        // el man se lo hizo para mandar un nuevo objeto que va a tener lo que esta en return
                        console.log("Su opcion es ", respuesta);
                        return {
                            respuestaUsuario: respuesta,
                            respuestasBDD: respuestasBDD
                        };
                    }));
            }), // dependiendo de la opcion PREGUNTAMOS DEPENDIENDO LAS OPCIONES

            mergeMap(//####DEPENDIENDO DE LA OPCION HACER ALGO (crear, borrar, eliminar)
                (respuesta) => {
                    console.log("Se", respuesta);
                    switch (respuesta.respuestaUsuario.opcionMenu) {


                        case 'Crear':
                            return rxjs.from(inquirer.prompt(preguntasIngresar))
                                .pipe(map((Poke) => {
                                    respuesta.poke = Poke; //a la respuesta recibida antes le agrego la respuesta del
                                    // usuario a las preguntas hechas
                                    return respuesta;
                                }))
                                .pipe(map(//###### EJECUTAR LA ACCION #########
                                    //ya no necesitamos promesas ni observables por que ya sabemos datos y lo que queremos hacer
                                    (respuesta) => {
                                        console.log('respuesta en accion', respuesta);
                                        switch (respuesta.respuestaUsuario.opcionMenu) {
                                            case 'Crear':
                                                const pokeNuevo = respuesta.poke;
                                                respuesta.respuestasBDD.bdd.Pokemons.push(pokeNuevo);
                                                return respuesta;
                                        }
                                    }),
                                    // ###### Guardar Base de Datos
                                    mergeMap((respuesta) => {
                                        return guardarBase(respuesta.respuestasBDD.bdd);
                                    }));
                            break;


                        case 'Buscar':
                            return rxjs.from(inquirer.prompt(preguntasBuscar))
                                .pipe(map((respuestaIngresada) => {
                                    respuesta.num = respuestaIngresada.numPoke;
                                    return respuesta;
                                }))
                                .pipe(map((respuesta) => {
                                    const bdd = respuesta.respuestasBDD.bdd.Pokemons;
                                    const pokeEncontrado = bdd
                                        .find((pokeObtenido) => {
                                            return pokeObtenido.number === respuesta.num;
                                        });
                                    return pokeEncontrado;
                                }));
                            break;


                        case 'Borrar':
                            return rxjs.from(inquirer.prompt(preguntasEliminar))
                                .pipe(map((respuestaIngresada) => {
                                    respuesta.poke = respuestaIngresada.numPoke;
                                    return respuesta;
                                }))
                                .pipe(map((respuesta) => {
                                    const bdd = respuesta.respuestasBDD.bdd.Pokemons;
                                    const pokeEncontrado = bdd
                                        .findIndex((pokeObtenido) => {
                                            return pokeObtenido.number === respuesta.poke;
                                        });
                                    respuesta.respuestasBDD.bdd.Pokemons.splice(pokeEncontrado, 1);
                                    return respuesta;
                                }), mergeMap((respuesta) => {
                                    return guardarBase(respuesta.respuestasBDD.bdd);
                                }));
                            break;


                        case 'Actualizar':


                            ////////////////////////////////////////////////////////////
                            return rxjs.from(inquirer.prompt(preguntasActualizar))
                                .pipe(map((Poke) => {
                                    respuesta.poke = Poke; //a la respuesta recibida antes le agrego la respuesta del
                                    // usuario a las preguntas hechas
                                    return respuesta;
                                }))
                                .pipe(map(//###### EJECUTAR LA ACCION #########
                                    //ya no necesitamos promesas ni observables por que ya sabemos datos y lo que queremos hacer
                                    (respuesta) => {

                                        const bdd = respuesta.respuestasBDD.bdd.Pokemons;
                                        const pokeEncontrado = bdd
                                            .findIndex((pokeObtenido) => {
                                                return pokeObtenido.number === respuesta.poke.number;
                                            });


                                        const pokeActualizado = respuesta.poke;
                                        respuesta.respuestasBDD.bdd.Pokemons[pokeEncontrado] =pokeActualizado;
                                        return respuesta;


                                    }),
                                    // ###### Guardar Base de Datos
                                    mergeMap((respuesta) => {
                                        return guardarBase(respuesta.respuestasBDD.bdd);
                                    }));
                            ////////////////////////////////////////////////////////////////////////////7


                            break;

                    }
                }))
        .subscribe(// el subscribe es como el ultimo paso que dice ya ahora si ejecutate todo
            (mensaje) => {
                console.log(mensaje);
            }, (error) => {
                console.log(error);
            }, () => {
                console.log('Completado');
                main();
            });
}

function inicializarBase() {
    const leerBDD$ = rxjs.from(leerBDD()); //1. creamos un observable para leer la base de datos usando promesa leeRBDD()
    return leerBDD$
        .pipe(//Para poder hacer trabajos con este observable
            mergeMap((RespuestaDeLeerBDD) => {
                if (RespuestaDeLeerBDD.bdd) {
                    // truty / {}
                    return rxjs.of(RespuestaDeLeerBDD); //devolviendo un observable
                }
                else {
                    // falsy / null
                    return rxjs.from(crearBDD()); //devolviendo un observable
                }
            }));
}

//leer un archivo
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile('pokemon.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'Base de datos vacia',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}

function crearBDD() {
    const contenidoInicialBDD = '{"AutosActuales":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile('pokemon.json', contenidoInicialBDD, (err) => {
            if (err) {
                reject({
                    mensaje: 'Error creando Base',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD creada',
                    bdd: JSON.parse('{"AutosActuales":[]}')
                });
            }
        });
    });
}

function preguntarMenu() {
    return rxjs.from(inquirer.prompt(preguntaMenu)); //transformando en observable la respuesta de lo que haya escogido
    //en preguntarMenu
}

function guardarBase(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile('pokemon.json', JSON.stringify(bdd), (err) => {
            if (err) {
                reject({
                    mensaje: 'Error guardando BDD',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'Cambio realizados satisfactoriamente'
                });
            }
        });
    });
}

main();