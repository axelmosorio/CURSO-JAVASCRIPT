//4. Importa una funcion
import CuentaBancaria, { correo, sumarNumeros, Usuario } from "./31-ejercicios-modulos.js";

sumarNumeros(2, 5)

//5. Importa una clase
let usuario_1 = new Usuario('correoa@gmail.com', 'password123', 1500)

//6. Importa una constante
console.log(correo)

//8. Importa una funcion, una clase y una constante por defecto
/*import defaultResta from "./31-ejercicios-modulos.js";
console.log(defaultResta(5, 3))*/

/*import defaultClase from "./31-ejercicios-modulos.js";
let cuenta = new CuentaBancaria('1bdaw2', 'dawdwa', 3100, true)
console.log(cuenta)*/

import defaultConstante from "./31-ejercicios-modulos.js"
console.log(defaultConstante)