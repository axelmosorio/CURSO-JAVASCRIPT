//1. Crea una funcion que use error correctamente

console.error('Mensaje de error', new Error('ERROR 67'))
console.log('---------------')

//2. Crea una funcion que use warn correctamente

console.warn('Cuidado con lo que haces!')

//3. Crea una funcion que use info correctamente

console.info('La hamburgueseria se llama DON PANCHO, queda en la avenida 11')

//4. Usa table

let data = [
    {nombre: 'Arnold', apellido: 'Swatznigger', edad: 40},
    {nombre: 'Silvia', apellido: 'Rodriguez', edad: 24}
]

console.table(data)

//5. Usa group

console.group('Usuario promax')
console.log('Pancho')
console.log('Moncada')
console.log(34)
console.groupEnd('Usuario promax')

//6. Usa time

console.time('Temporizador a 1000 I')

for (let i = 0; i > 1000; i++) {}

console.timeEnd('Temporizador a 1000 I')

//7. Valida con assert si un numero es positivo

let edad = 50
console.assert(edad == 48, 'La edad es de 50, no la que insertaste, tontito')

//8. Utiliza count

console.count('Gol')
console.count('Gol')
console.count('Gol')
console.countReset()

//9. Utiliza trace 

function tracear() {
    console.trace('Trace ha sido ejecutado para hacer seguimiento de la ejecucion!')
}

tracear()

//10. Utiliza clear

console.clear()