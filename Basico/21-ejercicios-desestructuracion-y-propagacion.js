//1. Usa desestructuracion para extraer los primeros dos elemento de un array
let array = [1, 2, 3, 4]
let [elemento1, elemento2] = array

console.log(elemento1, elemento2)

//2. Usa desestructuracion en un array y asigna un valor predeterminado a una variable
let [elemento3 = 0, elemento4 = 9, elemento5 = 4, elemento6 = 1, elemento7 = 4] = array
elemento3 = 99 //para reasignar el valor del elemento del array hay que llamarlo afuera del let

console.log(elemento3, elemento4, elemento5, elemento6, elemento7)

//3. Usa desestructuracion para extraer dos propiedades de un objeto
let objeto = {
    nombre: 'manzana',
    color: 'rojo',
    nutrientes: {
        vitaminas: ['A, AB, B, B2'],
        proteina: 0.3 / 100
    }
}

let {nombre, color} = objeto
console.log(`${nombre} '&' ${color}`)

//4. Usa desestructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes
let {nombre: nombre2, color: color2} = objeto
console.log(nombre2, color2)

//5. Usa desestructuracion para extraer dos propiedades de un objeto anidado
let {nutrientes: {vitaminas, proteina}} = objeto

vitaminas = ['D, E, F'] //se puede reasignar el valor de la propiedad del objeto anidado

console.log(vitaminas)
console.log(proteina)

//6. Usa propagacion para combinar dos arrays en un array nuevo
array = [1, 2, 3, 4]
let array1 = ['A', 'B', 'C', 'D']

let myArrayNuevo = [...array, array1] 
console.log(myArrayNuevo)

//7. Usa propagacion para crear una copia de un array
let arrayCopia = [...array]
console.log(arrayCopia)

//8. Usa propagacion para combinar dos objetos en un objeto nuevo
console.log('-----------------------------------------------')

objeto = {
    nombre: 'manzana',
    color: 'rojo',
    nutrientes: {
        vitaminas: ['A, AB, B, B2'],
        proteina: 0.3 / 100
    }
}

let objeto2 = {
    nombre: 'manzana_verde',
    color: 'verde',
    nutrientes: {
        vitaminas: ['B14, D, E, B2'],
        proteina: 0.3 / 100
    }
}

let objetoNuevo = {
    nombre: [objeto.nombre, objeto2.nombre],
    color: [objeto.color, objeto2.color],
    nutrientes: [objeto.nutrientes.vitaminas, objeto2.nutrientes.vitaminas]
} 
//no pueden compartir las mismas keys, de lo contrario se reemplazaran valores
console.log(objetoNuevo)

console.log('-----------------------------------------------')

//9. Usa propagacion para crear una copia de un objeto
let objetoCopia = {...objeto}
console.log(objetoCopia)

//10. Combina desestructuracion y propagacion
let arrayCopiaHd = [...array, 80, 90]

let [element1, element2, element3, element4, element5, element6] = arrayCopiaHd
console.log(element1, element2, element3, element4, element5, element6)

let objetoCopiaHd = {...objeto, location: 'system'}
console.log(objetoCopiaHd)