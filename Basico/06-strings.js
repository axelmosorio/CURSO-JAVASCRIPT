// Strings

// Concatenacion 
let myName = "Neckhurt"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0]) //arroja N
console.log(greeting[1]) //arroja e, porque accede a caracteres por su indice

// Metodos comunes
console.log(greeting.toUpperCase()) //convierte todo el string a mayuscula
console.log(greeting.toLowerCase()) //convierte todo el string a minuscula
console.log(greeting.indexOf('Neckhurt')) //halla el indice del dato
console.log(greeting.indexOf('Chao')) //arroja -1, porque no lo ha encontrado
console.log(greeting.includes('Neckhurt')) //verifica que el elemento exista
console.log(greeting.indexOf('Chao'))

console.log(greeting.slice(0, 10)) //devuelve el string desde el indice minimo hasta el indice maximo establecido
console.log(greeting.replace('Neckhurt', "George")) //reemplaza el dato elegido por el dato deseado

// Template literals (plantillas literales)
let message = `Hola, este es mi mensaje 
para todos ustedes, hermanos en Cristo` // `` se usan para crear strings de varias lineas

console.log(message)

let myEmail = 'wonderland@gmail.com'

console.log(`Hola ${myName}!, tu email es ${myEmail}`) // como los f-strings de python