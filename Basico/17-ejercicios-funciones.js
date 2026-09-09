//1. Crea una funcion que reciba dos numeros y devuelva una suma
console.log('1 ---------------------------------')


function sumar(a = 0, b = 0) {
    console.log(a + b)
}

sumar(1, 3)

let sumar2 = (a, b) => console.log(a + b)

sumar2(3, 3)

//2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
console.log('2 ---------------------------------')

const listaNumeros = [22, 43, 13, 24, 95, 52, 5] 

function encontrarMayor(numeros) { //parametro numeros
    let mayor = numeros[0] //tomamos el valor del indice 0 como indicador para saber cual es el numero mayor
    for (let i = 1; i < numeros.length; i++) { //iniciamos el bucle desde el indice 1
        if (numeros[i] > mayor) { //validamos si algun numero de la lista es mayor que el numero del elemento 0
            mayor = numeros[i] //en caso de ser mayor, ahora el elemento mayor va a ser ese numero que cumplio la condicion
        }
    }
    return mayor //retornamos el numero mayor
}

console.log(encontrarMayor(listaNumeros))

function encontrarMenor(numeros) { //parametro numeros
    let menor = numeros[0] //tomamos el valor del indice 0 como indicador para saber cual es el numero menor
    for (let i = 1; i < numeros.length; i++) { //iniciamos el bucle desde el indice 1
        if (numeros[i] < menor) { //validamos si algun numero de la lista es menor que el numero del elemento 0
            menor = numeros[i] //en caso de ser menor, ahora el elemento menor va a ser ese numero que cumplio la condicion
        }
    }
    return menor //retornamos el numero menor
}

console.log(encontrarMenor(listaNumeros))

//3. Crea una funcion que reciba un string y devuelva el numero de vocales que tiene
console.log('3 ---------------------------------')

function contarVocales(texto){
    let contador = 0
    const vocales = 'aeiouaáéíóú'
    const textoMinuscula = texto.toLowerCase()

    for (let i = 0; i < textoMinuscula.length; i++) {
        if (vocales.includes(textoMinuscula[i])) {
            contador++
        }
    }
    return contador
}

console.log(contarVocales('JavaScript'));

//4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas
console.log('4 ---------------------------------')

const contarMayusculas = (texto) => {
    let contador = 0
    const mayusculas = 'QWERTYUIOPASDFGHJKLZXCVBNM'

    for (let i = 0; i < texto.length; i++) {
        if (mayusculas.includes(texto[i])) {
            contador++
        }
    }
    return contador
}

console.log(contarMayusculas('HolamCfiodjiaM'))

function convertirArrayAMayusculas(array) {
    let newArray = []
    for (let texto of array) { //los bucles for of: por cada texto que este dentro de array, ejecuta lo siguiente
        newArray.push(texto.toUpperCase())
    }
    return newArray
}

const convertirArrayAMayusculas2 = (array) => {return array.map(texto => texto.toUpperCase())}

console.log(convertirArrayAMayusculas(['Hola', 'Como', 'Estas']))
console.log(convertirArrayAMayusculas2(['Hola', 'Como', 'Estas']))

//5. Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario
console.log('5 ---------------------------------')

const esPrimo = (numero) => {
    if (numero <= 1) return false //los numeros iguales o menos a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) { //comprobamos si es divisible entre 2 y su raiz cuadrada
        if (numero % i === 0) {
            return false //si se puede dividir exactamente no es primo
        }
    }
    return true //si no se encontro ningun divisor, es primo
}

console.log(esPrimo(5))

//6. Crea una funcion que reciba dos arrays y devuelva un array nuevo con los elementos comunes
console.log('6 ---------------------------------')

const obtenerComunes = (array1, array2) => {
    const comunes = []

    for (const elemento of array1) {
        if (array2.includes(elemento)) {
            comunes.push(elemento)
        }
    }
    return comunes
}

let lista1 = [1, 8, 3, 5, 2]
let lista2 = [2, 4, 1, 5, 7]

console.log(obtenerComunes(lista1, lista2))

function obtenerComunes2(array1, array2) {
    return array1.filter(elemento => array2.includes(elemento))/*array1.filter recorre elemento por elemento,
    evalua si el elemento actual de array1 se encuentra en array2*/
}

console.log(obtenerComunes2(lista1, lista2))

//7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares
console.log('7 ---------------------------------')

const sumarPares = (numeros) => {
    let suma = 0
    for (const numero of numeros) {
        if (numero % 2 == 0) {
            suma += numero // suma = suma + numero
        }
    }
    return suma
}

const misNumeros = [1, 3, 2, 4, 5, 6, 8, 9, 0] //20
console.log(sumarPares(misNumeros))

//8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado
console.log('8 ---------------------------------')

const devolverNumeroCuadrado = (numeros) => {
    let arrayCuadrado = []
    for (let numero of numeros) {
        numero = numero * numero
        arrayCuadrado.push(numero)
    }
    return arrayCuadrado
}

const listaNumeros2 = [2, 3, 6, 1, 7, 4]
console.log(devolverNumeroCuadrado(listaNumeros2))

//9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log('9 ---------------------------------')

const invertirCadena = (cadena) => {
    let cadenaInvetida = ''
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvetida += cadena[i]
    }
    return cadenaInvetida
}

const cadena = 'Hola, JavaScript!'
console.log(invertirCadena(cadena))

//10. Crea una funcion que calcule el factorial de un numero dado
console.log('10 ---------------------------------')

const calcularFactorial = (numero) => {
    if (numero < 0) return undefined //los numeros negativos no tienen factorial

    let resultado = 1
    for (let i = 1; i <= numero; i++) { //el numero dado debe de ser mayor o igual a uno
        resultado *= i // resultado = resultado * i
    }
    return resultado
}

const numero = 5
console.log(calcularFactorial(numero))