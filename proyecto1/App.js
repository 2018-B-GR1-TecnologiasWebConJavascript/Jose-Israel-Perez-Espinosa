let pokemons = [{number: 1, name: 'Bulbasaur', type: 'planta, veneno'},
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addPokemon(number, name, type) { //funcion para añadir pokemons
    pokemons.push({number: number, name: name, type: type});

}


function showPokemons() {// funicon para mostrar todos los pokemons
    pokemons.forEach(function (pokemon) {
        console.log(pokemon)
    });
}


function searchPokemon(name) {//funcion para buscar pokemon por su nombre

    pokeIndex(name)
        .then(result => {console.log(pokemons[result])})

        .catch((err) => {console.log('no existe el Pokemon: ',name,'Error:',err)})
}




function updatePokemon(number, name, type) {//actualizar Pokemon
    pokeIndex(name)
        .then(result => {pokemons[result] = {number: number, name: name,type: type};console.log(pokemons[result])})

        .catch((err) => console.log('No existe Pokemon: ',name,' Error: ',err))




}

function deletePokemon(name){// funcion eliminar pokemon
    pokeIndex(name)
        .then(result => {pokemons.splice(result, 1); console.log('Pokemon eliminado: ',name)})

        .catch((err) => console.log('no existe el Pokemon: ',name, 'Error: ',err))

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
updatePokemon(667, 'Litleo','fuego');
addPokemon(171, 'Pichu', 'electrico');
deletePokemon('pichu');
showPokemons();



