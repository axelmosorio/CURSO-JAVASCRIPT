//1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = 'Axel'
if (miNombre == 'Axel') {
    console.log(miNombre)
} else {
    console.log('La variable no tiene mi nombre')
}

console.log('1. ------------------------------------')

//2. Imprime por consola un mensaje si el usuario y contrasena coinciden con los establecidos
let usuario = 'Enrique'
let password = 'hola123'

if (usuario == 'Enrique' && password == 'hola123') {
    console.log('Coinciden con los establecidos')
} else {
    console.log('No coinciden con los datos establecidos')
}

console.log('2. ------------------------------------')

//3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje
let numero = 5

if (numero >= 0) {
    console.log('Numero positivo')
} else if (numero < 0) {
    console.log('Numero negativo')
} else {
    console.log('Tu numero es cero')
}

console.log('3. ------------------------------------')

//4. Verifica si una persona puede votar o no (mayor de 18) e indica cuantos years le faltan
let edad = 50

if (edad >= 18) {
    console.log('Puedes votar')
} else if (edad < 18) {
    let edadRestante = 18 - edad
    console.log(`No puedes votar, te faltan ${edadRestante} years para votar`)
}

console.log('4. ------------------------------------')

//5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo la edad 
const message = edad >= 18 ? 'Mayor' : 'Menor'
console.log(message)

console.log('5. ------------------------------------')

//6. Muestra en que estacion del year nos encontramos dependiendo del valor de una variable "mes"
let mes = 0

if (mes == 0 || mes == 1 || mes == 2) {
    console.log('Summer')
} else if (mes == 3 || mes == 4 || mes == 5) {
    console.log('Winter')
} else if (mes == 6 || mes == 7 || mes == 8) {
    console.log('Spring')
} else if (mes == 9 || mes == 10 || mes == 11) {
    console.log('Autumn')
}

console.log('6. ------------------------------------')

//7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior switch
if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
    console.log('Tu mes tiene 31 dias')
} else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
    console.log('Tu mes tiene 30 dias')
} else if (mes == 1) {
    console.log('Tu mes tiene 28 dias')
} else {
    console.log('Solo hay 12 meses')
}

let numeroDias

switch (mes) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        numeroDias = 31
        console.log(`Tu mes tiene ${numeroDias} dias`)
        break
    case 3:
    case 5:
    case 8:
    case 10:
        numeroDias = 30
        console.log(`Tu mes tiene ${numeroDias} dias`)
        break
    case 1:
        numeroDias = 28
        console.log(`Tu mes tiene ${numeroDias} dias`)
        break
    default:
        console.log(`Elige un mes correcto`)
}

console.log('7. ------------------------------------')

//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo el idioma
let idioma = 'spanish'
let saludo

switch (idioma) {
    case 'spanish':
        saludo = 'Hola querido'
        console.log(saludo)
        break
    case 'english':
        saludo = 'Hi dear'
        console.log(saludo)
        break
    case 'italian':
        saludo = 'Salve fratelli'
        console.log(saludo)
        break
    default:
        saludo = 'Solo hay soporte para tres idiomas'
        console.log(saludo)
}

console.log('8. ------------------------------------')

//9. Usa un switch para hacer de nuevo el ejercicio 6
let mesNuevo = 'enero'
let estacion
switch (mesNuevo) {
    case 'enero':
    case 'febrero':
    case 'marzo':
        estacion = 'Summer'
        console.log(`Tu estacion es: ${estacion}`)
        break
    case 'abril':
    case 'mayo':
    case 'junio':
        estacion = 'Winter'
        console.log(`Tu estacion es: ${estacion}`)
        break
    case 'julio':
    case 'agosto':
    case 'septiembre':
        estacion = 'Autumn'
        console.log(`Tu estacion es: ${estacion}`)
        break
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        estacion = 'Spring'
        console.log(`Tu estacion es: ${estacion}`)
        break
    default:
        console.log('Solo hay 12 meses, elige un mes correcto')
}

console.log('9. ------------------------------------')

//10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mesNuevo) {
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        numeroDias = 30
        console.log(`El numero de dias de tu mes con switch es: ${numeroDias}`)
        break
    case 'febrero':
        numeroDias = 28
        console.log(`El numero de dias de tu mes con switch es: ${numeroDias}`)
        break
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        numeroDias = 31
        console.log(`El numero de dias de tu mes con switch es: ${numeroDias}`)
        break
    default:
        console.log('Solo hay 12 meses, elige un mes correcto')
}

console.log('10. ------------------------------------')