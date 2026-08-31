// if, else if y else

// if (si)
let age = 37
let id = 'si'

if (age >= 18) {
    console.log(`Tu edad es ${age}, acceso concedido`)
}

// else
if (age == 17) {
    console.log(`Tu edad es ${age}, acceso concedido`)
} else {
    console.log(`Tu edad es ${age}, acceso denegado`)
}

// else if
if (age == 38) {
    console.log('Ok')
} else if (age < 18) {
    console.log('Menor de edad')
} else {
    console.log('La edad no es 37')
}

console.log('------------------------------------')

if (age == 38 && id == 'si') {
    console.log('Nicholas')
} else if (age >= 18) {
    console.log('Nicholas')
} else {
    console.log('None')
}

console.log('------------------------------------')

// Operador ternario
const message = age == 37 ? 'Tu edad es 37' : 'Tu edad no es 37'
console.log(message)

let esMujer = true
esMujer ? console.log('Es mujer') : console.log('No es mujer')

// Switch, muchas condiciones que verificar con una sola variable
let day = 3
let dayName

switch (day) {
    case 0: //seria como el if, donde va ese numero 0 se pueden poner condiciones
        dayName = 'Lunes'
        break
    case 1: //seria como el else if
        dayName = 'Martes'
        break
    case 2: //seria como el else if
        dayName = 'Miercoles'
        break
    case 3: //seria como el else if
        dayName = 'Jueves' //dia elegido
        break
    case 4: //seria como el else if
        dayName = 'Viernes'
        break
    case 5: //seria como el else if
        dayName = 'Sabado'
        break
    case 6: //seria como el else if
        dayName = 'Domingo'
        break
    default: //seria como el else
        dayName = 'Numero de dia incorrecto'
}

console.log(dayName)