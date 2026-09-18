//1. Crea un objeto de 3 propiedades
console.log('1 ---------------------------------')

let persona = {
    nombre: 'Daniel',
    apellido: 'Montes',
    estatura: 1.75,
}

console.log(persona)

//2. Accede y muestra su valor
console.log('2 ---------------------------------')

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.estatura)

//3. Agrega una nueva propiedad
console.log('3 ---------------------------------')

persona.apodo = 'Dino'
console.log(persona)

//4. Elimina una de las 3 primeras propiedades
console.log('4 ---------------------------------')

delete persona.apellido
console.log(persona)

//5. Agrega una funcion e invocala
console.log('5 ---------------------------------')

persona = {
    nombre: 'Daniel',
    apellido: 'Montes',
    estatura: 1.75,
    fortaleza() {
        console.log(`${this.nombre} nada muy rapido`)
    }
}

console.log(persona)
persona.fortaleza()

//6. Itera las propiedades de un objeto
console.log('6 ---------------------------------')

for (let key in persona) {
    console.log(key + ": " + persona[key])
}

//7. Crea un objeto anidado
console.log('7 ---------------------------------')

let personaDos = {
    nombre: 'Daniel',
    apellido: 'Montes',
    estatura: 1.75,
    fortaleza() {
        return(`${this.nombre} nada muy rapido`)
    },
    mochila: {
        items: ['Anillo', 'Llave', 'Dinero'],
        estado: 'Llena'
    }
}

console.log(persona)

//8. Accede y muestra el valor de las propiedades anidadas
console.log('8 ---------------------------------')

console.log(personaDos.mochila)
console.log(personaDos.mochila.items)
console.log(personaDos.mochila.estado)

//9. Comprueba si los dos objetos creados son iguales
console.log('9 ---------------------------------')

console.log(persona == personaDos) //false

//10. Comprueba si dos propiedades diferentes son iguales
console.log('10 ---------------------------------')

console.log(persona.nombre == personaDos.nombre) //true