// Map

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicializacion

myMap = new Map([
    ['name', 'Axl'],
    ['email','titocalderon@gmail.com'],
    ['age', 18]
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set('alias', 'Chanov') //poner un elemento nuevo al mapa
myMap.set('name', 'Axel D') //modificar el valor de una key existente
console.log(myMap)

// get

console.log(myMap.get('name')) //devuelve el valor de name
console.log(myMap.get('surname')) //no existe, devuelve undefined

// has

console.log(myMap.has('name')) //devuelve true
console.log(myMap.has('surname')) //devuelve false

// delete

myMap.delete('email') //borra el elemento
console.log(myMap)

// keys & values

console.log(myMap.keys()) //devuelve las keys existentes del mapa
console.log(myMap.values()) //devuelve los valores existentes del mapa

// entries

console.log(myMap.entries) //devuelve las keys y values del mapa

// size

console.log(myMap.size) //calcula el size

// clear

myMap.clear() //elimina todo el contenido del mapa
console.log(myMap)