const rxjs = require('rxjs');
const map = require('rxjs/operators').map;



const pokemons = [{number: 1, name: 'Bulbasaur', type: 'planta, veneno'},
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


function searchPokemon(nombre) {
    const pokeSearch$ = rxjs.from(pokeIndex(nombre));

    pokeSearch$
        .subscribe(
            (ok) => {
                console.log('Encontrado: ', ok, 'Pokemon: ', pokemons[ok]);
            },
            (error) => {
                console.log('Error: ', error, ' no encontrado');
            },
            () => {
                console.log('DONE')
            },
        );
}


function addPokemon(number, name, type) {
    const pokeAdd$ = rxjs.from(pokeIndex(name));
    pokeAdd$
        .subscribe(
            (ok) => {
                console.log('Este pokemon ya está registrado!!   Intenta actualizarlo si desea cambiar sus atributos!');
            },
            (error) => {
                pokemons.push({number: number, name: name, type: type});
                listPokemon();
                console.log('Pokemon añadido: ', name);
            },
            () => {
                console.log('DONE')
            },
        );
}

function editPokemon(number, name, type) {
    const pokeEdit$ = rxjs.from(pokeIndex(name));

    pokeEdit$
        .subscribe(
            (ok) => {
                pokemons[ok] = {number: number, name: name, type: type};
                console.log('modificado Valor actual: ', pokemons[ok])
            },
            (error) => {
                console.log('Error en promesita', error)
            }
        );


}


function deletePokemon(name) {
    const pokeDelete$ = rxjs.from(pokeIndex(name));
    pokeDelete$
        .subscribe(
            (ok) => {
                pokemons.splice(ok, 1);
                console.log('Pokemon eliminado: ', name);
                listPokemon()},
            (error)=>{console.log('El pokemon: ',name,' no esta registrado')}



)
    ;

}


function listPokemon(){
    const pokeList$=rxjs.of(pokemons)

    pokeList$
        .pipe(
            map((valorActual) => {
                return {
                     valorActual
                };
            })
        )
        .subscribe(
            (ok) => {
                console.log( 'Pokemons registrados: ',ok);
            },
            (error) => {
                console.log('error', error);
            },
            () => {
                console.log('DONE');
            });


}


listPokemon();
searchPokemon('litleo')

editPokemon(1, 'Bulbasaur', 'planta');

addPokemon(674, 'Pancham', 'lucha');

deletePokemon('pitochu')

