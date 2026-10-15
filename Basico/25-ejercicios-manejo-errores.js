//1. Captura una excepcion utilizando try-catch
console.log('1. --------------------------------')

const sumarDosNumerosEnteros = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Error de tipo de dato incompatible con la operacion')
    } else if (a + b === 15) {
        throw new Error('Error, porque 15?')
    } else if (a < 0 || b < 0) {
        throw new SumarDosNumerosMenoresACeroError('Se esta intentando sumar numeros menores a 0', a, b)
    }
    return a + b

}

try {
    console.log(sumarDosNumerosEnteros('2', 5))
} catch (TypeError) {
    console.log('Se ha producido un error al insertar un tipo de dato no valido: ', TypeError.message)
}

//2. Captura una excepcion utilizando try-catch-finally
console.log('2. --------------------------------')

try {
    console.log(sumarDosNumerosEnteros('2', 5))
} catch (TypeError) {
    console.log('Se ha producido un error al insertar un tipo de dato no valido: ', TypeError.message)
} finally {
    console.log(sumarDosNumerosEnteros(2.2, 5))
}

//3. Lanza una excepcion generica
console.log('3. --------------------------------')

try {
    console.log(sumarDosNumerosEnteros(5, 10)) 
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError:', TypeError.message)
    } else if (error instanceof Error) {
        console.log('Error generico:', error.message)
    }
}

//4. Crea una excepcion personalizada
console.log('4. --------------------------------')

class SumarDosNumerosMenoresACeroError extends Error {
    constructor(message, a, b) {
        super(message) 
        this.a = a
        this.b = b
    }
    imprimir() {
        console.log(`${this.a} + ${this.b}`)
    }
}

try {
    console.log(sumarDosNumerosEnteros(-1, 5))
} catch (error) {
    console.log('Error personalizado:', error.message)
    error.imprimir()
}

//5. Lanza una excepcion personalizada
console.log('5. --------------------------------')
console.log('ok')

//6. Lanza varias excepciones segun la logica definida
console.log('6. --------------------------------')

try {
    console.log(sumarDosNumerosEnteros('2', 5))
    console.log(sumarDosNumerosEnteros(2.2, 5))
    console.log(sumarDosNumerosEnteros(10, 5))
    console.log(sumarDosNumerosEnteros(-1, 5))
} catch (error) {
    console.log('Se ha producido un error al insertar un tipo de dato no valido: ', TypeError.message)
    console.log('Error generico:', error.message)
    console.log('Error personalizado:', error.message)
}

//7. Captura varias excepciones en un try-catch
console.log('7. --------------------------------')
console.log('ok')

//8. Crea un bucle que intente transformar cada valor a float y capture y muestre los errores
console.log('8. --------------------------------')

const valores = ["12.34", "42", "Hola mundo", Symbol("id"), null, "100.50"]

for (let i = 0; i < valores.length; i++) {
    try {
        let valorActual = valores[i]
        let resultado = parseFloat(valorActual)
        // parseFloat("Hola mundo") no lanza error pero devuelve NaN,
        // así que forzamos un error si no es un número válido
        if (isNaN(resultado)) {
            throw new Error(`El valor ${valorActual} no es un número convertible.`)
        }
        console.log(`Elemento ${i}: Convertido con éxito -> ${resultado}`)
    } catch (error) {
        console.error(`Error en elemento ${i}: ${error.message}`)
    } finally {
        console.log(`Iteración ${i} finalizada.\n---`)
    }
}

//9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una excepcion personalizada
console.log('9. --------------------------------')

let objeto = {nombre: 'Objeto', dimensiones: '24x24', color: 'Azul'}

class AnalizandoObjeto extends Error{
    constructor(propiedad) {
        super(`Error personalizado, la propiedad: ${propiedad} no existe en el objeto`)
        this.name = 'PropiedadNoEncontrada'
    }
}

const verificarPropiedadEnObjeto = (objeto, propiedad) => {
    try {
        if (typeof objeto !== 'object') {
            throw new TypeError('Inserta un objeto valido')
        }
        if (!(propiedad in objeto)) {
            throw new PropiedadNoEncontrada(propiedad)
        }
        console.log(`Propiedad ${propiedad} encontrada con exito`)
        return objeto[propiedad]
    } catch (error) {
        console.error(`${error.name}, ${error.message}`)
    } finally {
        console.log('Verificacion de propiedad completada')
    }
}

//verificarPropiedadEnObjeto(objeto, 'nombre')
verificarPropiedadEnObjeto(objeto, 'dimensione')

//10. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10
console.log('10. --------------------------------')

let intentosFallidosSimulados = 0

function simularDescargaServidor() {
    intentosFallidosSimulados++
    if (intentosFallidosSimulados < 5) {
        throw new Error("El servidor no responde (Error 503).")
    }
    return "Archivo descargado con éxito."
}

function ejecutarConReintentos(tarea, maxReintentos = 10) {
    let intentos = 0
    let exito = false
    
    while (intentos < maxReintentos && !exito) {
        intentos++
        try {
            console.log(`\n--- Intento #${intentos} ---`)
            const resultado = tarea()
            console.log(`¡Éxito! ${resultado}`)
            exito = true; 
        } catch (error) {
            console.warn(`Falló el intento #${intentos}: ${error.message}`);
            if (intentos === maxReintentos) {
                console.error("Se ha alcanzado el número máximo de reintentos permitidos.");
            }
        } finally {
            console.log(`Fin del ciclo del intento #${intentos}.`);
        }
    }
    return exito;
}

// Reiniciamos el contador y ejecutamos la función
intentosFallidosSimulados = 0;
ejecutarConReintentos(simularDescargaServidor, 10);