// Console

// log

console.log('Hola, JavaScript!')

// error

console.error('Este es un mensaje de error.')
console.error('Error, no se ha podido conectar a la base de datos.', new Error('Conexion fallida.'))

// warn (advertencia)

console.warn('Este es un mensaje de advertencia.')

// info

console.info('Este es un mensaje de informacion adicional')

// table (formatear datos)

let data = [['David', 40],['Sara', 32]]

console.table(data)

data = [//este es el mas usado
    {nombre: 'David', edad: 40, color: 'verde'},
    {nombre: 'Sara', edad: 32, color: 'azul'}
]

console.table(data)

// group

console.group('Usuario: ')
console.log('nombre: David')
console.log('edad: 40')
console.log('millonario: no')
console.groupEnd()

console.log('Cerrado')

// time || se usa para medir el tiempo que se tarda en ejecutar un bloque de codigo

console.time('Tiempo de medicion I')

for (let i = 0; i < 10000; i++) {}

console.time('Tiempo de medicion II')

for (let i = 0; i < 10000; i++) {}

console.timeEnd('Tiempo de medicion I')

console.timeEnd('Tiempo de medicion II')

// assert || muestra un mensaje de error si lo que evalua es falso

let age = 18
let age1 = 17
console.assert(age >= 18, 'El usuario debe ser mayor de edad.') //no aparece en consola porque lo evaluado es true
console.assert(age1 >= 18, 'El usuario debe ser mayor de edad.') //aparece en consola porque lo que evaluo es falso

// count

console.count('Click') //1
console.count('Click') //2
console.count('Clicks') //1
console.countReset('Click') //lo resetea

console.count('Click') //1 empieza de nuevo a contar con el id 'click'

// trace || forma de rastrear la ejecucion del codigo

const funcA = () => {
    funcB()
}

const funcB = () => {
    console.trace('Seguimiento de la ejecucion.')
}

funcA()

// clear || para borrar todo lo ejecutado en la consola

//console.clear() 