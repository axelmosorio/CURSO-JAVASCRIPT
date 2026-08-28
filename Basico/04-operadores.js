//Operadores

//Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b) //suma
console.log(a - b) //resta
console.log(a * b) //multiplicacion
console.log(a / b) //division

console.log(a % b) //modulo - resto
console.log(a ** b) //exponente

a++ //incremento, se le suma 1 a "a"
console.log(a) 

b-- //decremento, se le resta 1 a "b"
console.log(b)

//Operadores de asignacion

let miVariable = 2
console.log(miVariable)
miVariable +=2 //para sumarle 2 a miVariable, es como hacer (miVariable + 2)
console.log(miVariable)

miVariable -=2
miVariable *=2
miVariable /=2
miVariable %=2

//Operadores de comparacion

console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) //igualdad por valor
console.log(a == "6") //igualdad por valor
console.log(a === 6) //igualdad estricta (por tipo y valor)
console.log(a === a)

console.log(a != 6) //false, a es 6
console.log(a !== "6") //true, a es distinto estrictamente al string "6"
console.log(0 == false) //true
console.log(1 == false) //false
console.log(0 == "") //true
console.log(0 == ' ') //true
console.log(0 === "") //false
console.log(undefined == null) //true
console.log(undefined === null) //false

//Truthy values (valores verdaderos)

//Todos los numeros positivos y negativos menos el cero (0)
//Todas las cadenas de texto menos las vacias
//El boolean true

//Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacias


// Operadores logicos

// and (&&)

console.log(5 > 10 && 15 > 20) //false
console.log(5 < 10 && 15 < 20) //true
console.log(5 < 10 && 15 > 20) //false
console.log(5 > 10 && 15 > 20 && 30 > 40) //false

//or (||)

console.log(5 > 10 || 15 < 20) //true
console.log(5 > 10 || 15 > 20) //false
console.log(5 > 10 && 15 > 20 || 30 < 40) //true 

//not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20)) //false
console.log(!(5 > 10 || 15 > 20)) //false 

//Operadores ternarios, forma de escribir condicionales

const isRaining = true
isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')