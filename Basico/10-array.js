// array

// Declaracion

let myArray = [] //esta es mejor
let myArray2 = new Array() //esta es menos recomendable

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = [3]
myArray2 = new Array(3) //se crean 3 espacios vacios, un lio

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ['Neck', 'Hurt', 'Neckhurt', 18, false]
myArray2 = new Array('Neck', 'Hurt', 'Neckhurt', 18, true)

console.log(myArray) 
console.log(myArray2)

myArray2 = new Array(3) // se crean los tres espacios
myArray2 [0] = 'Neck' // se le da valor a cada espacio
myArray2 [1] = 'Hurt' // se le da valor a cada espacio
myArray2 [2] = 'NeckHurt' // se le da valor a cada espacio

console.log(myArray2)

myArray = []
myArray2 [0] = 'Neck'
myArray2 [1] = 'Hurt'
myArray2 [2] = 'NeckHurt'

console.log(myArray)

// Metodos comunes

myArray = []

// push y pop
myArray.push('Tomas') //metodo para poner elementos en el array
myArray.push('Rodriguez')
myArray.push('TomasR')
myArray.push('40')

console.log(myArray)

console.log(myArray.pop()) // devuelve el elemento que elimino

myArray.pop()

console.log(myArray)

// shift y unshift
myArray.shift() // elimina el primer elemento del array
console.log(myArray)

myArray.unshift('Tomas', 'TomasR') // agrega uno o mas elementos al principio del array
console.log(myArray)

// length = es una propiedad, no una funcion
console.log(myArray.length)

// clear
myArray = []
// myArray.lenght = 0 // alternativa

console.log(myArray)

// slice
myArray = ['Tomas', 'Rodriguez', 'TomasR', 37, true]
let myNewArray = myArray.slice(1, 2) /*devuelve elementos desde el indice indicado hasta el indice establecido, tiene en cuenta
el primer indice pero no el ultimo, por eso solo va a devolver Rodriguez*/

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3, 'Nuevo elemento') /*elimina los elementos del indice indicado, y despues se establece cuantos elementos, 
tambien permite poner mas elementos*/
console.log(myArray)

console.log(myArray.indexOf('Tomas'))