// Exportacion de modulos

// Funciones

export const sumar = (a, b) => {
    return a + b
}

console.log(sumar(10, 5))

// Propiedades

export const PI = 3.1416
export let name = 'Neckhurt'

// Clases

export class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimetro() {
        return 2 * Math.PI * this.radius
    }
}


// Exportacion por defecto, default solo cuando se desea exportar una sola cosa

export default function substract(a, b) {
    return a - b
}

/*export default class MyClass {
    func() {console.log('Mi clase!')}
}*/