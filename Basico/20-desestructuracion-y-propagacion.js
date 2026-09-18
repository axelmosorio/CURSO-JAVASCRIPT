// Desestructuracion, extraer elementos de objetos o arrays para asignarlos a variables

let myArray = [1, 2, 3, 4]

let persona = {
    nombre: 'Daniel',
    apellido: 'Montes',
    estatura: 1.75,
}

let myValue = myArray[1]
console.log(myValue)

let myName = persona.nombre
console.log(myName)

// Desestructuracion

// Sintaxis en arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0, myValue1, myValue2, myValue3, myValue4)

// Sintaxis en arrays con valores por defecto

//[myValue0, myValue1, myValue2, myValue3, myValue4 = 0] = myArray //esto da error, no se puede redefinir myValue4

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray //se puede definir myValue9 = 0
console.log(myValue5, myValue6, myValue7, myValue8, myValue9)

// Ignorar elementos del array

let [myValue10, , , myValue13] = myArray //dejamos espacios entre comas para ignorar elementos del array
console.log(myValue10, myValue13)

// Sintaxis en objetos

persona = {
    nombre: 'Daniel',
    apellido: 'Montes',
    estatura: 1.75,
}

let {apellido, estatura, nombre} = persona //usar llaves en vez de corchetes, porque esta es la sitaxis de desestructuracion de objetos
console.log(apellido, estatura, nombre)

// Sintaxis en objetos con valores por defecto

let {nombre2, apellido2, estatura2, email = 'hola@gmail.com'} = persona //los nombres de las variables deben ser iguales a las keys del objeto
console.log(nombre2, apellido2, estatura2, email) /*nombre2, apellido2 y estatura2 no existen*/

// Sintaxis en objetos con nuevos nombres de variables

let {nombre: nombre3, apellido: apellido3, estatura: estatura3} = persona
console.log(nombre3, apellido3, estatura3)

// Desestructuracion con objetos anidados

console.log('-------------------------')

let persona3 = {
    nombre: 'Tomas', 
    edad: 18, 
    alias: 'Tomi', 
    walk() { 
        console.log(`La persona ${this.nombre} camina`)
    },
    trabajo: { //objeto dentro de un objeto
        nombre: 'Developer',
        exp: 15,
        work() {
            console.log(`El ${this.nombre} persona trabaja`)
        }
    }
}

let {nombre: nombre4, trabajo: {nombre: trabajoNombre}} = persona3
console.log(nombre4) //tomas
console.log(trabajoNombre) //developer

// Propagacion (...)

// Sintaxis array

myArray = [1, 2, 3, 4]

let myArray2 = [...myArray] //copia a myArray

console.log(myArray2)

let myArray3 = [...myArray, 5, 6]

console.log(myArray3)

// Combinacion de arrays

let myArray4 = [...myArray2, ...myArray3] //combinamos myArray2 y myArray3
console.log(myArray4)

// Sintaxis objetos

let persona4 = {...persona, email: 'hola@gmail.com'}
console.log(persona4)

// Copia de objetos

let persona5 = {...persona} //copia a persona
console.log(persona5) 