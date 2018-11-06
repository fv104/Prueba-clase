/*
var arr = [];
var arr2 = ['Adios', ' !']
var arr3 = [1,2,3]
arr.push(2);
arr.push('Hola')
console.log(arr)

var resConcat = arr.concat(arr2)

var resJoin = arr3.join(' |')
arr3.reverse();

var  resUnShift = arr3.unshift(2)
console.log(arr3)
arr3.shift()
arr3.pop();
console.log(arr3)
*/

/*var arr = [11,22,33,44,55,66,77,88,99];
var primerosTres = arr.slice(2,7);
console.log(primerosTres)*/

/*
var peliculas = ['Superman','Superman 3'];
peliculas.splice(1,0, 'Superman 2')
console.log(peliculas)
*/

/*
var arr = [1,2,3]

arr.forEach( function (num,index, array) {
    console.log('-------------------------')
    var e =arr.join(' | ')
    console.log((' | '+ e + ' | '))
    if (index === arr.length-1){
        console.log('-------------------------')
    }





}
)

*/

//Foreach + join


// .sort()

/*var nombres = ['Ivan','Fran','Belen','Miguel']
nombres.sort();
console.log(nombres)

/!*var numeros = [1,21,3,11,99];
numeros.sort(function (a,b) {
    return a-b
})*!/*/


//console.log(numeros).

/*
var tablero = [
{ col: 0, row:0},
{ col: 0, row:1},
{ col: 0, row:2},
{ col: 1, row:0},
{ col: 1, row:1},
{ col: 1, row:2},
{ col: 2, row:0},
{ col: 2, row:1},
{ col: 2, row:2}
]

tablero.sort(function (a,b) {
    return a.row - b.row || b.col - a.col
})
console.log(tablero)*/

//.map()
/*
var numeros = [11,22,33,44,55]
var res = numeros.map(function (num) {
    return num * 2;
});
console.log(Math.sqrt(9));
console.log(numeros);
console.log(res);
*/

var frutas = ['Manzanas','Pera','Platano'];

/*
var fruta = frutas.map(function (frut) {
    return frut + 's'
})
console.log(fruta)*/

/*var res = frutas.filter( function (fruta) {
    return fruta[fruta.length - 1] === 's';
})

console.log(res);*/

/*
var numeros = [1,6,2,77,45] //menor que 40
var numero = numeros.filter(function (num){
    return num < 40
})

console.log(numero);
*/

/*var numeros = [10,11,13,1];
var res = numeros.reduce(function (valorAnterior,valorActual,indice,array) {
    console.log(valorAnterior,valorActual,indice,array)
    return valorAnterior + valorActual;
}, 1)
console.log(res)*/

/*
var puntuaciones = [
    {nick: 'ivan', score: 10},
    {nick: 'pablo', score: 22},
    {nick: 'ivan', score: 1},
    {nick: 'pablo', score: 18},
    {nick: 'ivan', score: 15},
];

var res;


res = puntuaciones.map( function (partida) {
    if(partida.score >= 15) {
        partida.score = Math.ceil(partida.score * 1.1)
    }

    return partida;
});

res = res.filter(function (nombre) {
    return nombre.nick === 'ivan'
})

res = res.reduce(function (anterior,siguiente) {
    return{
        nick: siguiente.nick,
        score: anterior.score + siguiente.score
    }
})


console.log(puntuaciones)
console.log('-----------')
console.log(res)
// 15 o mas puntos le doy un 10% extra.
// Muestro el nuevo array
// Filtro las puntuaciones de ivan
// Puntuacion total de ivan*/

//.find()

var arr = [1,2,3,4,5];
var res = arr.find(function (element) {
    return element > 3
});

console.log(res);