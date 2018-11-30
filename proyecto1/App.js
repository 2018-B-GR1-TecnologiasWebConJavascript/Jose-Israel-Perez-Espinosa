

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = {
        label: 0, sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
        }, trys: [], ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;

    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {value: op[1], done: false};
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
    }
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var inquirer = require('inquirer');
var fs = require('fs');


var preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Añadir',
        'Borrar',
        'Buscar',
        'Actualizar',
    ]
};

var add = [
    {
        type: 'input',
        name: 'number',
        message: 'Número del Pokemon: '
    },
    {
        type: 'input',
        name: 'name',
        message: 'Nombre del Pokemon: '
    },
    {
        type: 'input',
        name: 'type',
        message: 'Tipo del Pokemon: '
    }
];


function main() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, _a, respuestaUsuario, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Empezo');
                    //_b.label = 1;
                    _b.label = 2;
               // case 1:
                    //_b.trys.push([1, 8, , 9]);
                    //return [4 , inicializarBase()];
                 //   _b.label = 2;
                case 2:
                    _b.sent();
                    return [4 , inquirer.prompt(preguntaMenu)];
                case 3:
                    respuesta = _b.sent();
                    _a = respuesta.opcionMenu;
                    switch (_a) {
                        case 'Añadir':
                            return [3 , 4];
                        case 'Buscar':
                            return [3,]
                    }
                    return [3 , 7];
                case 4:
                    return [4 , inquirer.prompt(add)];
                case 5:
                    respuestaUsuario = _b.sent();
                    return [4 , addPokemon(respuestaUsuario.number,respuestaUsuario.name,respuestaUsuario.type)];
                case 6:
                    main();
                    return [3 , 7];
                case 7:
                    return [3 , 9];
                case 8:
                    e_1 = _b.sent();
                    console.log('Hubo un error: ', e_1);
                    return [3 , 9];
                case 9:
                    return [2 ];
            }
        });
    });
}


main();*/









const pokemons =[{number: 1, name: 'Bulbasaur', type: 'planta, veneno'},
    {number: 667, name: 'Litleo', type: 'fuego, normal'},
    {number: 152, name: 'Chikorita', type: 'planta'},
    {number: 4, name: 'Charmander', type: 'fuego'},
    {number: 131, name: 'Lapras', type: 'agua, hielo'},
    {number: 122, name: 'Mr. Mime', type: 'psiquico, hada'},
    {number: 325, name: 'Spoink', type: 'psiquico'},
    {number: 296, name: 'Makuhita', type: 'lucha'},
    {number: 66, name: 'Machop', type: 'lucha'},
    {number: 129, name: 'Magikarp', type: 'agua'}

];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////77
function addPokemon(number, name, type) { //funcion para añadir pokemons
    pokemons.push({number: number, name: name, type: type});
    console.log('Añadido');
    showPokemons();

}


function showPokemons() {// funicon para mostrar todos los pokemons
    pokemons.forEach(function (pokemon) {
        console.log(pokemon)
    });
}


function searchPokemon(name) {//funcion para buscar pokemon por su nombre

    pokeIndex(name)
        .then(result => {
            console.log(pokemons[result])
        })

        .catch((err) => {
            console.log('no existe el Pokemon: ', name, 'Error:', err)
        })
}


function updatePokemon(number, name, type) {//actualizar Pokemon
    pokeIndex(name)
        .then(result => {
            pokemons[result] = {number: number, name: name, type: type};
            console.log(pokemons[result])
        })

        .catch((err) => console.log('No existe Pokemon: ', name, ' Error: ', err))


}

function deletePokemon(name) {// funcion eliminar pokemon
    pokeIndex(name)
        .then(result => {
            pokemons.splice(result, 1);
            console.log('Pokemon eliminado: ', name)
        })

        .catch((err) => console.log('no existe el Pokemon: ', name, 'Error: ', err))

}

//////////////////////////////////////////////promesa buscar pokemon por nombre//////////////////////////////////////////////////


const pokeIndex = (nombre) => {

    return new Promise((resolve, reject) => {
        let indice = '-1';
        pokemons.forEach((pokemon, index) => {

            nameb = nombre.toLowerCase();
            namep = pokemon.name.toLowerCase();
            if (namep === nameb) {
                indice = index

            }

        });
        if (indice === '-1') {
            reject(indice)
        } else (
            resolve(indice)
        )

    })

};

//////////////////////////////////////////////////////////////////////////////////////////////////////


searchPokemon('Pichu');
//updatePokemon(667, 'Litleo','fuego');
//addPokemon(171, 'Pichu', 'electrico');
//deletePokemon('pichu');
//showPokemons();



