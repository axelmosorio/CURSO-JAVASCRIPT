// Clases, plantillas de objetos

let per = {
    nombre: 'Alejandro',
    edad: 18,
    apodo: 'Magnus'
}

class Persona {
    constructor(nombre, edad, apodo) {
        this.nombre = nombre
        this.edad = edad
        this.apodo = apodo
    }
}

// Sintaxis

let persona1 = new Persona('Alejandro', 18, 'Magnus')
let persona2 = new Persona('Raul', 65, 'Dictador')

console.log(persona1)
console.log(persona2)

console.log(typeof(persona1))

// Valores por defecto

class DefaultPersona {
    constructor(nombre = 'Sin nombre', edad = 0, apodo = 'Sin alias') {
        this.nombre = nombre
        this.edad = edad
        this.apodo = apodo
    }
}

let persona3 = new DefaultPersona('Gerald', 19)
console.log(persona3)

// Acceso a propiedades, igual que los objetos

console.log(persona3.apodo)
console.log(persona3['apodo'])

persona3.apodo = 'Nick'
console.log(persona3.apodo)

// Funciones en clases

class PersonaConMetodo {
    constructor(nombre, edad, apodo) {
        this.nombre = nombre
        this.edad = edad
        this.apodo = apodo
    }

    walk() {
        console.log(`${this.nombre} camina`)
    }

    interactuar() {
        console.log(`La criatura de ${this.edad} años apodada ${this.apodo} interactua`)
    }
}

let persona4 = new PersonaConMetodo('David', 40, 'Dav')
persona4.walk()
persona4.interactuar()

// Propiedades privadas

class PersonaPrivada {
    #bank

    constructor(nombre, edad, apodo, bank){
        this.nombre = nombre
        this.edad = edad
        this.apodo = apodo
        this.#bank = bank
    }

    pagar() {
        this.#bank //ahora la propiedad es privada
    }
}

let persona5 = new PersonaPrivada('Esteban', 32, 'Este', 'AR5432TF1')
//console.log(persona5.bank) //undefined
//console.log(persona5.#bank) //error

//persona5.newBank = 'RT4234234FT0' //crea una propiedad publica nueva, no altera a la privada
console.log(persona5)

// Getters y setters

class GetSetPersona {
    #nombre //privado
    #age //privado
    #apodo //privado
    #bank //privado

    constructor(nombre, age, apodo, bank) {
        this.#nombre = nombre
        this.#age = age
        this.#apodo = apodo
        this.#bank = bank
    }

    get nombre() { //permitimos que se pueda obtener el nombre pero no modificarlo
        return this.#nombre
    }
    set bank(newBank) {
        this.#bank = newBank
    }
}

let persona6 = new GetSetPersona('Julio', 15, 'Julius', 'IR493274892Q6')
console.log(persona6.nombre) //para acceder a nombre, no para cambiarlo

persona6.bank = 'new IR493274892Q6' //para cambiar el bank privado, no para acceder a el

// Herencia

