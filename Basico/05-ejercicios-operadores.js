//1. crea una variable para cada operacion aritmetica
let numero1 = 22
let numero2 = 5

let suma = (numero1 + numero2)
let resta = (numero1 - numero2)
let multiplicacion = (numero1 * numero2)
let division = (numero1 / numero2)
let resto = (numero1 % numero2)
let exponente = (numero1 ** numero2)

console.log(suma, resta, multiplicacion, division, resto, exponente)

//2. crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables usadas en operaciones aritmeticas
suma++
console.log(suma)

suma += 2
resta -= 2
multiplicacion *= 2
division /= 2
resto %= 2
exponente **= 2

console.log(suma, resta, multiplicacion, division, resto, exponente)

//3. imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
console.log('--------------------------------------------')


console.log(1 == 1)
console.log(2 > 1)
console.log(3 >= 3)
console.log(3 != 5)
console.log('a' === 'a')

console.log('--------------------------------------------')

//4. imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log(1 == 2)
console.log(2 > 8)
console.log(3 >= 7)
console.log(3 != 3)
console.log('a' === 2)

console.log('--------------------------------------------')

//5. utiliza el operador logico and
console.log(1 > 3 && 1 > 0)

//6. utiliza el operador logico or
console.log(1 > 3 || 1 > 0)

//7. combina ambos operadores logicos
console.log(1 > 0 && 0 > -1 || 5 > 2)

//8. pone alguna negacion
console.log(!(1 > 0 && 0 > -1 || 5 > 2))

//9. utiliza el operador ternario

let isUserConnected = false
isUserConnected ? console.log('El usuario no esta conectado') : console.log('El usuario esta conectado')

//10. combina operadores aritmeticos, de comparacion y logicos
console.log('--------------------------------------------')

let numero3 = 0
let operacion = (numero1 * numero2 * numero3)
operacion ? console.log('Resultado es mayor que 0') : console.log('Resultado es menor que 0')
console.log(!(operacion > 100 && operacion >= 2 || operacion == 27))