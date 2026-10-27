// Importacion de modulos

import { sumar, PI, name, Circle } from "./28-exportacion-modulos.js"; //personalizada
import defaultImport from "./28-exportacion-modulos.js"; //por defecto

// Funciones

console.log(sumar(10, 5))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(7)
console.log(circle.radius)
console.log(circle.area().toFixed(2)) //toFixed es para decirle cuantos decimales queremos que se muestren
console.log(circle.perimetro().toFixed(2))

// Importacion por defecto

console.log(defaultImport(10, 2))
//let myClass = new resta()
//myClass.func()

// Proyecto modular

// import { myImport } from "./directory/MyClass.js"

