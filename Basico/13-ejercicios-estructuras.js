//1. Crea un array que almacene 5 animales
let myArray = ['gallina', 'perro', 'gato', 'cocodrilo', 'tiburon']

//2. Pon dos o mas, uno al principio y otro al final
myArray.push('Pajaro')
myArray.unshift('Vaca')

console.log(myArray)

//3. Elimina el que se encuentra en 3ra posicion
myArray.splice(2, 1)
console.log(myArray)

//4. Crea un set que almacene 5 libros
let mySet = new Set()
mySet = new Set(['Infierno de Dante', 'Meditaciones', 'El principito', 'Confesiones', 'El arte de la guerra'])

//5. Pon dos libros mas, uno repetido
mySet.add('Romeo y Julieta')
mySet.add('Minecraft')
console.log(mySet)

//6. Elimina uno concreto a tu eleccion
mySet.delete('Minecraft')
console.log(mySet)

//7. Crea un mapa que asocie el numero del mes a su nombre
let myMap = new Map()
myMap = new Map([
    [1, 'enero'],
    [2, 'febrero'],
    [3, 'marzo'],
    [4, 'abril'],
    [5, 'mayo'],
    [6, 'junio'],
    [7, 'julio'],
    [8, 'agosto'],
    [9, 'septiembre'],
    [10, 'octubre'],
    [11, 'noviembre'],
    [12, 'diciembre']
])

//8. Comprueba si el mes numero 5 existe en el map e imprime su valor
console.log(myMap.has(5))
console.log(myMap.get(5))

//9. Pon al mapa una clave mas con un array como que almacene los meses de verano
let myArray1 = []
myArray1 = ['Meses de verano', 'enero', 'febrero', 'marzo']
myMap.set(myArray1)

console.log(myMap)

//10. Crea un array, transformalo a un set y almacenalo en un map

let myArray2 = []
myArray2 = [1, 2, 3, 4]
let mySet2 = new Set(myArray2)
console.log(mySet2)

myMap.set(mySet2)
console.log(myMap)