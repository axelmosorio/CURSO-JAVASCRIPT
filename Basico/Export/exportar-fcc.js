//9. Exporta una funcion, una clase y una constante desde una carpeta
export const sumarNumeros1 = (a, b) => {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inserte numeros')
        }
        return a + b
    } catch (error) {
        console.error(`${error.name}, ${error.message}`)
    }
}

export class Usuario1 {
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

export const correo1 = 'correopromax@gmail.com'