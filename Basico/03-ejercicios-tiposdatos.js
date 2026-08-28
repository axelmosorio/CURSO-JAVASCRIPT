//1. Escribe un comentario en una linea

//hecho

//2. Escribe un comentario en varias lineas

/*Hecho
hecho*/

//3. Declara variables con valores asociados a todos los datos de tipos primitivos

let texto = 'aa'
let numero = 1
let booleano = true
let booleano2 = false
let nulo = null
let indefinido = undefined
let simbolo = Symbol('323')
let granEntero = BigInt(3213123213123123123123123124534639749375834753479683463)

//4. Imprime por consola el valor de todas las variables

console.log(texto, numero, booleano, booleano2, nulo, indefinido, simbolo, granEntero)

//5. Imprime por consola el tipo de todas las variables

console.log(typeof texto)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof booleano2)
console.log(typeof nulo)
console.log(typeof indefinido)
console.log(typeof simbolo)
console.log(typeof granEntero)

//6. Modifica los valores de las variables por otros del mismo tipo

texto = 'ccc'
numero = 2
booleano = false
booleano2 = true

//7. Modifica los valores de las variables por otros de distinto tipo

texto = 23
numero = 'trt'

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const texto1 = 'Hola'
const numero1 = 5
const booleanoI = true
const booleanoII = false
const nulo1 = null
const indefinido1 = undefined
const simbolo1 = Symbol('222')
const elGranEntero = 43874982375823758293758327523889382589279582380582390582395n

//9. A continuacion, modifica los valores de las constantes

//                        ***         **
const usuario = {nombre: 'Ana', edad: 28}
usuario.edad = 26 //modificamos propiedades de elementos internos, no el valor de la constante
usuario.nombre = 'Maria'
usuario.ciudad = 'Madrid'

console.log(usuario)

//10. Comenta las lineas que produzcan algun error al ejecutarse