//alert('Se ha cargado')

//window.sessionStorage.setItem('twitter','@asdf')
//localStorage.setItem('linkedin','felix')

//var linkedin = localStorage.getItem('linkedin')
//console.log(linkedin)


 var miObjetoJson =  '{"name": "Felix","job": 1}'
//console.log(miObjetoJson)
localStorage.setItem('persona',miObjetoJson)

var obj = {
    'a': 'a',
    'b': 'b'
}
console.log(obj, JSON.stringify(obj))
console.log(JSON.parse(miObjetoJson), miObjetoJson)

var objt = {
    'a': 'c',
    'b': 'd'
}

localStorage.setItem('prueba', JSON.stringify(objt))

var res = JSON.parse(localStorage.getItem('Prueba'))

console.log(res)

localStorage.removeItem(('prueba'))
localStorage.clear()