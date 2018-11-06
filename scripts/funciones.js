/*var i = 1;
i += 1
console.log(i);*/

/*function suma(a,b) {
    console.log(a+b);

}*/

/*
function cuadrado(number){
    //console.log(number*number)

    return number*number;
}
//suma(2,9);
var res = cuadrado(10)
console.log(res);

var  suma = function (a,b) {
    console.log('argumentos',arguments)
    return a+b

}
suma(2,9,60)*/

/*
function concat (separator){
    var result = "";
    console.log(arguments)
    for(i =1 ; arguments.length; i++){
        result += arguments[i] + separator;
    }
    return result
}

var res = concat(' | ', 1,4,7,'azul');
var res2 = concat(' . ','azul','rojo');
console.log(res,res2);*/

//alert('Funciona');

//var input = prompt("Introduzca una operacion en javascript");
/*//var inputCodigo = escape(input);
//alert(("Caddena codificada;"  + inputCodigo))
var resultado = eval(input);
alert(resultado)*/

/*
console.log(isFinite(0), isFinite(-1),isFinite(646446))
console.log(isFinite(Infinity), isFinite(-Infinity),isFinite(646446))
console.log(isFinite(1e308), isFinite(-1e309))*/

/*
console.log(isNaN(123))
console.log(isNaN(1.23))
console.log(isNaN('abc'))
console.log(isNaN(NaN))*/

var a = true
var b = false
var c = new Date();
var d = "999"
var e = '999 999'
var f = function(){return '0'}

/*
console.log(Number(a))
console.log(Number(b))
console.log(Number(c))
console.log(Number(d))
console.log(Number(e))
console.log(Number(f()))
console.log((Boolean(f())))
console.log(String(f()))
console.log(String(c))*/

/*
var str = '1.23'
console.log(parseInt(str))
console.log(parseFloat(str))*/

/*
var url = "http://localhost/mi pagina.html!"
var enc = encodeURI(url)
var dec = decodeURI(enc);
console.log(url, enc, dec)*/

/*
var num = 1.49;
console.log(Math.round(num), Math.round(1.51)) //El mas cercano
console.log(Math.ceil(num)) //El siguiente numero entero
console.log(Math.floor(num)) //El numero anterior entero*/

/*Una funcion que lance un prompr y pida un numero decimal
*Tiene que transformar el numero a un float
* Redondeo al alza
* Devolver el valor de este numero
 */

function numero(){
    var input = prompt('Introduzca un numero decimal')
    input = parseFloat(input);
    input = Math.ceil(input);
    return input;
}
var res = numero();
console.log(res);