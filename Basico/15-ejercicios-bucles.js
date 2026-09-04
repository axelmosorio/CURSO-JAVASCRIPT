//1. Crea un bucle que imprima los numeros del 1 al 20
console.log('(1) ------------------------')

for (let i = 1; i <= 20; i++) {
    console.log(`${i}`)
}

let i = 1

while (i <= 20) {
    console.log(`${i}`)
    i++
}

//2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
console.log('(2) ------------------------')

let suma = 0
i = 1

/*suma += i, 0 = 0 + 1, despues, 1 = 1 + 2, 3 = 3 + 3, 6 = 6 + 4*/
for (let i = 1; i <= 100; i++) {
    suma += i
}

while (i <= 100) {
    suma += i;
    i++
}

console.log(`${suma}`)

//3. Crea un bucle que imprima todos los numeros pares del 1 al 50
console.log('(3) ------------------------')

for (let i = 1; i <= 50; i++) { // i = i + 1
    if (i % 2 == 0) {
        console.log(`Este es tu numero par ${i}`)
    } 
}

for (let i = 0; i <= 50; i+=2) { // i = i + 2
    console.log(i)
}

i = 2

while (i <= 50) {
    console.log(i)
    i += 2
}

//4. Dado un array de nombres, imprime cada nombre en consola
console.log('(4) ------------------------')

let myArray = ['Luis', 'Juan', 'Pablo', 'Pedro', 'Jonas']

for (let i = 0; i < myArray.length; i++) {
    console.log(`Tu nombre es ${myArray[i]}`)
}

//5. Escribe un bucle que cuente el numero de vocales en una cadena de texto
console.log('(5) ------------------------')

let myString = 'Hola, como estas?'
let contador_vocales = 0

for (let i = 0; i < myString.length; i++) {
    let caracter = myString[i].toLowerCase()

    if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u') {
        contador_vocales++
    }
}

console.log(`El string tiene ${contador_vocales} vocales`)

//6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto
console.log('(6) ------------------------')

let multiplicacion = 1
let myArrayNumeros = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < myArrayNumeros.length; i++) {
    multiplicacion *= myArrayNumeros[i]
}

console.log(`El producto es: ${multiplicacion}`)
console.log('------------------------')

for (const numero of myArrayNumeros) {
    multiplicacion *= numero
}

console.log(`El producto es: ${multiplicacion}`);

//7. Escribe un bucle que escriba la tabla de multiplicar del 5
console.log('(7) ------------------------')

const numero = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

//8. Usa un bucle para invertir una cadena de texto
console.log('(8) ------------------------')

let myString1 = 'Hola, JavaScript'
let reversa = ''

/*inicializamos i en el indice equivalente a la longitud del string - 1, porque la longitud del string es 16, pero su indice ultimo
es 15, por eso es i = myArray.length - 1, despues establecemos el final del bucle, como empezamos desde el indice 15 (ultimo), 
terminamos en el primer indice (0), y despues establecemos como va a camnbiar el contador, como estamos contando al reves, entonces
i--, o i = i - 1, para asi ir yendo desde el indice 15, al 14, 13, 12, 11 hasta llegar al indice 0*/
for (let i = myString1.length - 1; i >= 0; i--) { // i = i - 1
    reversa += myString1[i]
}

/*reversa += myString[i] es el equivalente a decir reversa = reversa + myString[i]. Toma la letra en la posicion actual de i (osea t),
y en la segunda vuelta toma la siguiente letra (osea p)*/

console.log(`El texto revertido es: ${reversa}`)

//9. Usa un bucle para generar los primeros 10 numeros de la secuencia de fibonacci
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log('(9) ------------------------')

let a = 0
let b = 1

for (let i = 2; i < 10; i++) {
    let siguiente = a + b
    console.log(`${siguiente}`)
    a = b
    b = siguiente
}

//10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
console.log('(10) ------------------------')

myArrayNumeros = [11, 2, 32, 4, 5, 67, 77, 8, 90]
newArray = []

/*se coloca i < myArrayNumeros.length porque el numero del length siempre va a ser mayor al ultimo indice,
ejemplo: length es igual a 9, pero el ultimo indice es 8, ya que empieza desde el indice 0,1,2,3,4,5,6,7,8*/
for (let i = 0; i < myArrayNumeros.length; i++) {
    if (myArrayNumeros[i] > 10) {
        newArray.push(myArrayNumeros[i])
    }
}
console.log(newArray)