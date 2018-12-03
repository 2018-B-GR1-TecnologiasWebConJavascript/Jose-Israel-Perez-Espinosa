const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
//(727, incineroar,fuego, siniestro)

const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Elige una opción:',
    choices: ['Actualizar', 'Crear', 'Buscar', 'Borrar']
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

    inicializarBase()
        .pipe(mergeMap(
            //EN este merge map tenemos la respuesta del usuario y de la base
            (respuestasBDD) => {
                return preguntarMenu() //recibimos opcion menu, aqui ejecutamos esa funcion
                    .pipe(map((respuesta) => {

                        console.log("Su opcion es ", respuesta);
                        return {
                            respuestaUsuario: respuesta,
                            respuestasBDD: respuestasBDD
                        };
                    }));
            }),

            mergeMap(//depende de la opción escogida
                (respuesta) => {
                    console.log("Se", respuesta);
                    switch (respuesta.respuestaUsuario.opcionMenu) {


                        case 'Crear':
                            return rxjs.from(inquirer.prompt(preguntasIngresar))
                                .pipe(map((Poke) => {
                                    respuesta.poke = Poke;
                                    return respuesta;
                                }))
                                .pipe(map(
                                    (respuesta) => {
                                        console.log('respuesta en accion', respuesta);
                                        switch (respuesta.respuestaUsuario.opcionMenu) {
                                            case 'Crear':
                                                const pokeNuevo = respuesta.poke;
                                                respuesta.respuestasBDD.bdd.Pokemons.push(pokeNuevo);
                                                return respuesta;
                                        }
                                    }),
                                    // Guardar en la base de datos
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


                            return rxjs.from(inquirer.prompt(preguntasActualizar))
                                .pipe(map((Poke) => {
                                    respuesta.poke = Poke;
                                    return respuesta;
                                }))
                                .pipe(map(
                                    (respuesta) => {

                                        const bdd = respuesta.respuestasBDD.bdd.Pokemons;
                                        const pokeEncontrado = bdd
                                            .findIndex((pokeObtenido) => {
                                                return pokeObtenido.number === respuesta.poke.number;
                                            });


                                        const pokeActualizado = respuesta.poke;
                                        respuesta.respuestasBDD.bdd.Pokemons[pokeEncontrado] = pokeActualizado;
                                        return respuesta;


                                    }),
                                    //Guardar en la base de datos
                                    mergeMap((respuesta) => {
                                        return guardarBase(respuesta.respuestasBDD.bdd);
                                    }));


                            break;




                    }
                }))
        .subscribe(
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
    const leerBDD$ = rxjs.from(leerBDD()); //Se crea un observable para leer la base de datos usando la  promesa leeRBDD()
    return leerBDD$
        .pipe(
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
    return rxjs.from(inquirer.prompt(preguntaMenu)); //transformando en observable la respuesta de lo que haya escogido en preguntarMenu
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
                    mensaje: 'OK'
                });
            }
        });
    });
}

main();