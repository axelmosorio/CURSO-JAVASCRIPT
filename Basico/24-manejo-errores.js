// Excepcion

// Produce una excepcion
let myObject
//console.log(myObject.email)

// Captura de errores

// try-catch

try {
    //Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log('Finaliza la ejecucion sin errores') //no se ejecuta porque hay errores
} catch {
    //Bloque de error
    console.log('Se ha producido un error') //se ejecuta porque hay errores
}

// Captura del error

try {
    console.log(myObject.email)
    console.log('Finaliza la ejecucion sin errores') 
} catch (error) { //nos ayuda a capturar el error
    console.log('Se ha producido un error:', error.message) 
}

// finally, se usa cuando una operacion debe ejecutarse si o si, sin importar si arroja error

try {
    console.log(myObject.email)
} catch (error) {
    console.log('Se ha producido un error:', error.message) 
} finally { //este codigo se ejecuta siempre
    console.log('Este codigo se ejecuta siempre')
}

/* No tiene soporte al no contar con el catch
try {
    console.log(myObject.email)
} finally { //este codigo se ejecuta siempre
    console.log('Este codigo se ejecuta siempre')
}
*/

// Lanzamiento de errores

// throw

//throw new Error('Se ha producido un error')

function sumIntegers(a, b) {
    /*Esto no funciona
    
    if (typeof a !== Number || typeof b !== Number) {
        console.log('No se pueden sumar estas propiedades')
    }

    if (typeof a === 'number') { esto funciona porque typeoff siempre devuelve un string, ej: 'string',
        'boolean', 'number', 'null'
        console.log('Es instancia de numero')
    }

    if (Number.isInteger(a)) {
        console.log('Es un numero entero')
    }
    */
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Esta operacion solo acepta numeros')
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('Esta operacion solo acepta numeros enteros')
    } 

    if (a === 0 || b === 0) {
        throw new SumZeroIntegersError('Se esta intentando sumar ceros', a, b)
    }
    return a + b
}

console.log('-------------------------')

try {
console.log(sumIntegers(5, 10))
console.log(sumIntegers(5.5, 10))
console.log(sumIntegers("5", 10))
console.log(sumIntegers(5, '10'))
console.log(sumIntegers("5", '10'))
} catch (error) {
    console.log('Se ha producido un error:', error.message)
}

// Capturar varios tipos de errores
console.log('Capturar errores')

try {
    //console.log(sumIntegers(5.5, 10)) 
    console.log(sumIntegers('5', 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Se ha producido un error de tipo (TypeError):', error.message) /*TypeError: cuando se intenta
        hacer una operacion/funcion entre datos que no se pueden, por ejemplo: let i = 5; i.toUpperCase()*/
    } else if (error instanceof Error)
    console.log('Se ha producido un error (Error):', error.message)
}

// Crear excepciones personalizadas

class SumZeroIntegersError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers() {
        console.log(this.a, '+', this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log('Se ha producido un error personalizado:', error.message) 
    error.printNumbers()
}