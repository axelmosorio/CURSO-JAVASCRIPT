// Objetos (objects), todo lo que no es un dato primitivo es un objeto, puede tener dentro otros objetos o datos primitivos

// Sintaxis

let person = {
    nombre: 'Tomas',
    edad: 18,
    alias: 'Tomi'
}

// Acceso a propiedades

// Notacion punto

console.log(person.alias) //Tomi
console.log(person.nombre) //Tomas
console.log(person.edad) //18

// Notacion de corchetes

console.log(person['nombre'])

// Modificacion de propiedades

person.nombre = 'Roberto'
console.log(person.nombre)

console.log(typeof(person['edad'])) //antes de cambiar el tipo de dato es numero
person.edad = '20' //cambiamos el tipo de dato
console.log(person['edad'])
console.log(typeof(person['edad'])) //despues de cambiar el tipo de dato es string

// Eliminacion de propiedades

delete person.edad //eliminamos edad del objeto
console.log(person)