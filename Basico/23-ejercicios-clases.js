//1. Crea una clase que reciba dos propiedades
console.log('1 ---------------------------------')

class CamisetaB {
    constructor(color, talla) {
        this.color = color
        this.talla = talla
    }
}

//2. Pon un metodo a la clase que utilice las propiedades
console.log('2 ---------------------------------')

class Camiseta {
    constructor(color, talla) {
        this.color = color
        this.talla = talla
    }

    info() {
        console.log(`El color es ${color} y su tallaje es ${talla}`)
    }

    static usar() {
        console.log('La camiseta esta siendo usada')
    }
}

//3. Muestra los valores de las propiedades e invoca la funcion
console.log('3 ---------------------------------')

let camiseta_deportiva = new Camiseta('Amarillo, ', 'M')
console.log(camiseta_deportiva.color, camiseta_deportiva.talla)

//4. Pon un metodo estatico en la primera clase
console.log('4 ---------------------------------')

//5. Haz uso del metodo estatico
console.log('5 ---------------------------------')

Camiseta.usar()

//6. Crea una clase que haga uso de herencia
console.log('6 ---------------------------------')

class Auto {
    constructor(ventanas, puertas, ruedas, color) {
        this.ventanas = ventanas
        this.puertas = puertas
        this.ruedas = ruedas
        this.color = color
    }

    static encender() {
        console.log('El carro se enciende')
    }

    marchas() {
        console.log('El carro cuenta con 6 marchas')
    }
}

class Auto_deportivo extends Auto{
    constructor(ventanas, puertas, ruedas, color, modelo) {
        super(ventanas, puertas, ruedas, color)
        this.modelo = modelo
    }

    lavado_automatico() {
        console.log(`El carro ${this.modelo} lava sus ${this.ventanas}`)
    }

    agarre_especial() {
        console.log(`Las ruedas del carro ${this.modelo} aplican agarre adicional en condiciones de lluvia`)
    }
}

let carroMercedez = new Auto_deportivo(4, 4, 4, 'Negro', 'M2026')
console.log(carroMercedez)

//7. Crea una clase que haga uso de getters y setters
console.log('7 ---------------------------------')

class CuentaBancaria {
    #id
    #password
    #funds
    constructor(id, password, funds) {
        this.#id = id
        this.#password = password
        this.#funds = funds
    }

    get id() {
        return this.#id
    }

    set funds(newFunds) {
        this.#funds = newFunds
    }
}

let cuenta1 = new CuentaBancaria('44GBR5', 'Dsaldaw2311', 30000)

//8. Modifica la clase con getters y setters para que use propiedades privadas
console.log('8 ---------------------------------')


//9. Utiliza los get y set y muestra su valor
console.log('9 ---------------------------------')

cuenta1.funds = 40000
console.log(cuenta1.id)

//10. Sobrescribe un metodo de clase que utilice herencia
console.log('10 ---------------------------------')

class Auto_lujoso extends Auto{
    constructor(ventanas, puertas, ruedas, color, modelo) {
        super(ventanas, puertas, ruedas, color)
        this.modelo = modelo
    }
    
    static encender() {
        console.log('El carro se enciende rapidamente, en 1s')
    }
}

Auto_lujoso.encender()

let auto_lujoso1 = new Auto_lujoso(4, 4, 4, 'rojo', 'Y340')
auto_lujoso1.marchas()

console.log(auto_lujoso1 instanceof Auto_lujoso) //true, auto_lujoso1 es instancia de la plantilla Auto_lujoso