// Objetos (objects), todo lo que no es un dato primitivo es un objeto, puede tener dentro otros objetos o datos primitivos

// Sintaxis

let person = {
    nombre: 'Tomas', //nombre es una propiedad
    edad: 18, //edad es una propiedad
    alias: 'Tomi' //alias es una propiedad
}

// Acceso a propiedades

// Notacion punto

console.log(person.alias) //Tomi
console.log(person.nombre) //Tomas
console.log(person.edad) //18

// Notacion de corchetes

console.log(person['nombre'])

// Modificacion de propiedades

person.nombre = 'Roberto' //modificamos el valor de una propiedad
console.log(person.nombre)

console.log(typeof(person['edad'])) //antes de cambiar el tipo de dato es numero
person.edad = '20' //cambiamos el tipo de dato
console.log(person['edad'])
console.log(typeof(person['edad'])) //despues de cambiar el tipo de dato es string

// Eliminacion de propiedades

delete person.edad //eliminamos edad del objeto
console.log(person)

// Nueva propiedad

person.email = 'augustus@gmail.com'
console.log(person)

person['edad'] = 40
console.log(person)

// Metodos (funciones)

let persona2 = {
    nombre: 'Tomas', //nombre es una propiedad
    edad: 18, //edad es una propiedad
    alias: 'Tomi', //alias es una propiedad
    walk: () => { //funcion dentro del objeto
        console.log('La persona camina')
    }
}

persona2.walk()

// Anidacion de objetos

let persona3 = {
    nombre: 'Tomas', 
    edad: 18, 
    alias: 'Tomi', 
    walk: () => { //asi no va a funcionar el this.nombre por las arrow functions, debe escribir con el formato function nombre() {}
        console.log(`La persona ${this.nombre} camina`)
    },
    trabajo: { //objeto dentro de un objeto
        nombre: 'Developer',
        exp: 15,
        work: () => { //asi no va a funcionar el this.nombre por las arrow functions, debe escribir con el formato function nombre() {}
            console.log(`El ${this.nombre} persona trabaja`)
        }
    }
}

console.log('----------------------------------')

console.log(persona3)
console.log(persona3.nombre)
console.log(persona3.trabajo)
console.log(persona3.trabajo.nombre)

persona3.trabajo.work()

// Igualdad de objetos

let persona4 = {
    nombre: 'Tomas', 
    edad: 18,
    alias: 'Tomi'
}

person = {
    nombre: 'Tomas', 
    edad: 18, 
    alias: 'Tomi' 
}

console.log(person)
console.log(persona4)

console.log(person == persona4) //aqui no se esta comparando el valor de las propiedades, sino su referencia en memoria
console.log(person === persona4) //aqui no se esta comparando el valor de las propiedades, sino su referencia en memoria

console.log(person.alias == persona4.alias) //esto es true

// Iteracion

for (let key in persona4) { //for in recorre las keys o propiedades, mientras que for of recorre los valores de un objeto iterable (array)
    console.log(key + ": " + persona4[key])
}

// Funciones como objetos

function personX(nombre, edad) { //Debieria ser una clase. A dia de hoy no es una buena practica
    this.nombre = nombre
    this.edad = edad
}

let person5 = new personX('Rodolfo', 20)
console.log(person5)

console.log(typeof(person5))