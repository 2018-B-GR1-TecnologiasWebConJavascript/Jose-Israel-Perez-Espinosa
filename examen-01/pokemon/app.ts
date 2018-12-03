const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const fs = require('fs');


const data=fs.readFileSync('data.json', 'utf8');

const poke=JSON.parse(data);

const pokemon = [{number: 1, name: 'Bulbasaur', type: 'planta, veneno',move: 'acoso'},
    {number: 667, name: 'Litleo', type: 'fuego, normal',move:'defender'},
    {number: 152, name: 'Chikorita', type: 'planta',move:'absorver'},
    {number: 4, name: 'Charmander', type: 'fuego',move:'ascuas'},
    {number: 131, name: 'Lapras', type: 'agua, hielo',move:'defender'},
    {number: 122, name: 'Mr. Mime', type: 'psiquico, hada',move:'absorver'},
    {number: 325, name: 'Spoink', type: 'psiquico',move:'defender'},
    {number: 296, name: 'Makuhita', type: 'lucha',move:'anticipo'},
    {number: 66, name: 'Machop', type: 'lucha',move:'barrera'},
    {number: 129, name: 'Magikarp', type: 'agua',move:'anticipo'}

];


//console.log(poke);



let arreglotipos =[];

pokemon.forEach(function (pokemon) {
    arreglotipos.push(pokemon.type)
});
console.log(arreglotipos)
let arreglomoves=[];

pokemon.forEach(function (pokemon) {
    arreglomoves.push(pokemon.move)
});

console.log(arreglomoves);