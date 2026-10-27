//1. Exporta una funcion 
export const sumarNumeros = (a, b) => {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inserte numeros')
        }
        return a + b
    } catch (error) {
        console.error(`${error.name}, ${error.message}`)
    }
}

//2. Exporta una clase
export class Usuario {
    #saldo
    #password
    constructor(correo, password, saldo) {
        this.correo = correo
        this.#password = password
        this.#saldo = saldo
    }
    get saldo() {
        return this.#saldo
    }
    set password(newPassword) {
        this.#password = newPassword
    }
}

//3. Exporta una constante
export const correo = 'correopromax@gmail.com'

//7. Exporta una funcion, una clase y una constante por defecto
/*export default function restarNumeros(a, b)  {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inserte numeros')
        }
        return a - b
    } catch (error) {
        console.error(`${error.name}, ${error.message}`)
    }
}*/

/*export default class CuentaBancaria {
    constructor(id, password, dinero, daa) {
        this.id = id
        this.password = password
        this.dinero = dinero
        this.daa = daa
    }
}*/

let constante = 'Constante'
export default constante

//10. Importa una funcion, una clase y una constante desde un directorio diferente al anterior
import { sumarNumeros1, Usuario1, correo1 } from "./Export/exportar-fcc.js"
console.log(sumarNumeros1(5, 9))
let user = new Usuario1('rda@gmail.com', 'pass', 5000)
console.log(user.correo)
console.log(correo1)