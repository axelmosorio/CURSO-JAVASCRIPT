//1. Concatena dos cadenas de texto
let saludo = 'Buen dia'
let nombre = 'Andres'

console.log(`${saludo} ${nombre}, bienvenido al sistema`)

//2. Muestra la longitud de una cadena de texto
console.log(saludo.length)

//3. Muestra el primer y ultimo caracter de un string
console.log(saludo.slice(0, 8))
console.log(saludo.at(-1)) // para encontrar el ultimo caracter sin saber donde esta
console.log(saludo.slice(-1)) // otra forma para hacer lo mismo

//4. Convierte a mayusculas y a minusculas un string
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

//5. Crea una cadena de texto en varias lineas
let mensajeLargo = `Buen dia dirigentes
de la asociacion J, me complace informarles
que gracias al rendimiento de la compania`

//6. Interpola el valor de una variable en un string
let email = "wodner@gmail.com"
console.log(`${saludo} ${nombre}, bienvenido al sistema, tu correo electronico es ${email}`)

//7. Reemplaza todos los espacios vacios de un string por guiones
console.log(saludo.replace(" ", "-"))

//8. Comprueba si una palabra de texto tiene una palabra concreta
console.log(saludo.includes('Bue')) //true

//9. Comprueba si dos strings son iguales
console.log(saludo == nombre)

//10. Comprueba si dos strings tienen la misma longitud
console.log('--------------------------------------------------------------------')

if (saludo.length == nombre.length) {
    console.log('El string saludo tiene la misma longitud de caractered que el string nombre')
} else {
    console.log('El string saludo no tiene la misma longitud de caractered que el string nombre')
}

console.log(saludo.length == nombre.length) //false
console.log(saludo.length >= nombre.length) //true