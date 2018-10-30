//console.log(1);

//undefinided -> false
//Numeros -> true (excepto el 0)
//String-> true(Excepto si estan vacias)
//Objetos-> true
//Array-> True
//null->False
//Function-> True
//var resultado = 15;

/*
if(10 <= resultado ||  5 === resultado){
    console.log('Ha entrado en el if')
}else if(resultado < 5) {
    console.log('Ha entrado en el else')
    }

if(15 === resultado){
    console.log('Resultado es 15')
}*/

var resultado = 101

//Si es menor que 10
//Si es mayor que 10 y menor que 25 incluido
//Si es mayor que 25 pero menor que 100 incluido
//El resto de casos

//Si es menor que 10
if(10 > resultado){
    console.log('El resultado es menor que 10');
}else if(10 <= resultado && 25 >= resultado){
    console.log('El resultado es mayor que 10 pero menor que 25')
}else if(25 < resultado && 100 >= resultado){
    console.log('El resultado es mayor que 25 pero menor que 100')
}else{
    console.log('El resultado es mayor que 100')

}

