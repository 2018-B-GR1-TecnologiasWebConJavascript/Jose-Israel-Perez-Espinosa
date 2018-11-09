// 02-observables.ts
declare var require: any;

const rxjs = require('rxjs');
const map = require('rjxs/operators').map;
const distinc= require('rjxs/operators').distinc;
const numeros$ = rxjs.of( 1, 2, 3, 4, 5, 6);

console.log(numeros$);

numeros$
    .pipe(
        map(
             (valorActual)=>{
                return {     data: valoractual
            }};
        )
    )
    .subscribe(
        (ok) => {
            console.log('En ok', ok);
        },
        (error) => {
            console.log('Error', error);
        },
        () => { // complete
            console.log('Completado');
        }
    );


const promesita=()=>{
    return new Promise (
        executor:(resolve,reject)=>{
            if (correcto){
            resolve(':)')}
            else {reject(':(')}
    }
    );
};


const promesita$ = rxjs.from(promesita(correcto: true));
promesita$.subscribe(
    next: (ok)=>{
        console.log('En promesita',ok)
    },
    error: (error)=>{
        console.log('Error promesita',error);
    },
    complete:()=>{
        console.log('completado');
    }

)