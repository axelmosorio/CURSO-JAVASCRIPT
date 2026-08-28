//Datos primitivos

// Cadena de texto (string)

let myName = 'Ronaldo'
let alias = 'Neckhurt'

// Numeros (number)

let age = 18 //entero
let height = 1.78 //decimal

// Booleanos (boolean)

let isStudent = true
let isTeacher = false

// Undefined

let undefinedValue
console.log(undefinedValue)

//Null

let nullValue = null //Ausencia de valor intencional

// Symbol

let mySymbol = Symbol('mysymbol') //Valores unicos, pueden funcionar como identificadores

// BigInt

let myBigInt = BigInt(241894712894721847129787381927412884712989103817897987897978)
let myBigInt2 = 241894712894721847129787381927412884712989103817897987897978n //Se puede representar con n

// Mostramos los tipos de datos 

console.log(typeof myName) //string
console.log(typeof age) //number
console.log(typeof isStudent) //boolean
console.log(typeof undefinedValue) // undefined
console.log(typeof nullValue) // object
console.log(typeof mySymbol) // symbol
console.log(typeof myBigInt) // BigInt