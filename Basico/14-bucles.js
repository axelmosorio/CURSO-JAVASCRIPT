// Bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

console.log('--------------------------------')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i > numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0;
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

console.log('--------------------------------')

// do while (se ejecuta siempre una vez, y despues evalua la condicion, por eso en este ejemplo se ejecuta solo 1 vez)

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

console.log('--------------------------------')

// for of

let myArray = [1, 2, 3, 4]
let mySet = new Set(['Axel', 'Ramos', 18, true, 'juanito@gmail.com'])
let myMap = new Map([
    ['name', 'Neck'],
    ['email', 'neckhurt@gmail.com'],
    ['age', 37]
])

myString = 'Hola JavaScript'

//recorre todo el array
for (let valor of myArray) {
    console.log(valor)
}

console.log('--------------------------------')

//recorre todo el set
for (let valor of mySet) {
    console.log(valor)
}

console.log('--------------------------------')

//recorre todo el mapa
for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas practicas

console.log('--------------------------------')

// break y continue

for (let i = 0; i < 10; i++){
    if (i == 5) {
        continue //continue se usa cuando se desea omitir algo, en este caso si i == 5 sera omitido
    } else if (i == 7) {
        break //break se usa cuando se desea parar el bucle si se da una condicion, en este caso la condicion es i == 7
    }
    console.log(`Hola ${i}`)
}

// recorrer una lista de frutas

console.log('--------------------------------')

let frutas = ['banano', 'fresa', 'mora', 'kiwi']
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == 'fresa') {
        continue
    } else if (frutas [i] == 'kiwi') {
        break
    }
    console.log(`Tu fruta es: ${frutas[i]}`) //se coloca la lista y el i, asi muestra cada elemento recorrido
}