// Funciones

// Simple

console.log('----------------')

function miFuncion() {
    console.log('Hola, mi funcion!')
}

miFuncion() //llamamos la funcion creada

for (let i = 0; i < 5; i++) {
    miFuncion()
}

// Con parametros

console.log('----------------')

function miFuncionConParametros(name) {
    console.log(`Hola, ${name}!`)
}

miFuncionConParametros('Neckhurt')
miFuncionConParametros('George')

// Funciones anonimas

//asignar una funcion a una constante/variable

console.log('----------------')

const miFuncion2 = function(name) {
    console.log(`Hola, ${name}!`)
}

miFuncion2('Neck')

// Arrow funciones

console.log('----------------')

const miFuncion3= (name) => {
    console.log(`Hola, ${name}!`)
}

const miFuncion4 = (name) => console.log(`Hola, ${name}!`) //sirve para escribir funciones en una sola linea, no lleva llaves

miFuncion3('Snickers')
miFuncion4('Linea')

// Parametros

console.log('----------------')

function sum(a, b) {
    console.log(a + b)
}

sum(5, 2)

function defaultSum(a = 0, b = 0) { //lo hacemos en caso de que no le asignen nada a la funcion, asi el resultado sera 0 y no NaN
    console.log(a + b)
}

// Valores por defecto

defaultSum()
defaultSum(1)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

console.log('----------------')

function multiplicacion(a, b) {
    return a * b
}

let resultado = multiplicacion(5, 10)
console.log(resultado)

// Funciones anidadas

console.log('----------------')

function extern() {
    console.log('Funcion externa')
    function intern(){
        console.log('Funcion interna')
    }
    intern()
}

extern()
//intern() fuera del scope

//Funciones de orden superior

function applyFunc(func, param) { 
    func(param)
}

applyFunc(miFuncion3, 'Funcion de orden superior')

// forEach, ejecutar bucles a objetos iterables, es como un for pero con limitaciones

let myArray = [1, 2, 3, 4]

let mySet = new Set(['Tomas', 'Rodriguez', 'TomasR', 40, true, 'tomasrodri@gmail.com'])

let myMap = new Map([
    ['name', 'Axl'],
    ['email','titocalderon@gmail.com'],
    ['age', 18]
])

myArray.forEach((value) => console.log(value)) //esto es lo mismo que decir

myArray.forEach(function(value) { //que esto
    console.log(value)
})

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))