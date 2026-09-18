// set, usarlos cuando no se vayan a repetir elementos, cuando no necesites indices, eliminar duplicados y hacer busquedas rapidas

// Declaracion

let mySet = new Set()

// Inicializacion

mySet = new Set(['Tomas', 'Rodriguez', 'TomasR', 40, true, 'tomasrodri@gmail.com']) /*Importante, siempre poner corchetes ([])
dentro de los parentesis al inicializar un set, de lo contrario no funcionara igual*/
console.log(mySet)

// Metodos comunes

// add y delete

mySet.add('https://neckhurt.com')
console.log(mySet)

mySet.delete('https://neckhurt.com') //se elimina por su valor, no por el indice porque no existen en los sets
console.log(mySet)

console.log(mySet.delete('Tomas')) //elimina el elemento y retorna true
console.log(mySet.delete(4)) //retorna false porque no existe el 4

if (mySet.delete('Tomas')) {
    console.log('Wow')
} else {
    console.log('OnO')
}

// has

console.log(mySet.has('Rodriguez'))
console.log(mySet.has('Tomas'))

// size

console.log(mySet.size)

// Convertir un set a array
console.log('-----------------------')

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add('Rodriguez')
mySet.add('Rodriguez')
mySet.add('Rodriguez')
console.log(mySet)