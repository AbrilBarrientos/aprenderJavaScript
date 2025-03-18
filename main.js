// // Variable
// let mate = "yerba";

// // Constante
// const iva = 1.21;

// // Variable que mata gatitos
// var gatitoVivo = false;

// //

// if (true) {
//     let y = 20; 
//     // 'y' solo es accesible dentro de este bloque
// }
// console.log(y); 
// // Error: 'y' no está definido


// //

// console.log(y); 
// // Error: Cannot access 'y' before initialization
// let y = 5;

// //VAR

// if (true) {
//     var x = 10; 
//     // 'x' es accesible fuera del bloque
// }
// console.log(x); // 10

// //CONST
// if (true) {
//     const z = 30; 
//     // 'z' solo es accesible dentro de este bloque {}
// }
// console.log(z); 
// // Error: 'z' no está definido

// //Error reasignacion
// const a = 10;
// a = 20; // Error: Assignment to constant variable.

// //CONST Arrays y objetos
// const person = { name: 'Juan' };
// person.name = 'Pedro'; // Esto es válido
// person = {}; // Error: Assignment to constant variable.

// //TIPOS DE DATOS
// //STRING
// let nombre = "Juan"; // "" comillas dobles
// let saludo = 'Hola!'; // '' comillas simples

// //NUMBER
// let edad = 20; //Número entero (Int)
// let temperatura = 20.5; //Número decimal/flotante (Float)


// //BOOLEAN
// let numeroPar = true;
// let tieneCero = false;


// //UNDEFINED
// let resultado; //Variable DECLARADA pero NO INICIALIZADA
// //JS le asigna el valor undefined



// //NULL
// let papel = null; //No hay papel

// //OBJECT
// let persona = {
//     nombre: "Ana",
//     edad: 20,
//     trabaja: true
// };

// //ARRAY
// let frutas = ["manzana", "pera", "banana"];

// //FUNCION
// function saludar(){
//     alert('Hola!');
// }

// saludar() 
// //llamando a la funcion por el nombre

// //DATE
// let fechaActual = new Date();
// console.log("Fecha y hora actual:", fechaActual);

// // Crear una fecha específica (Año, Mes (0-11), Día, Hora, Minuto, Segundo)
// let fechaEspecifica = new Date(2024, 7, 16, 14, 30, 0); // 16 de agosto de 2024, 14:30:00
// console.log("Fecha específica:", fechaEspecifica);

// // Obtener valores individuales
// console.log("Año:", fechaActual.getFullYear());
// console.log("Mes:", fechaActual.getMonth() + 1); // Meses van de 0 (Enero) a 11 (Diciembre)
// console.log("Día:", fechaActual.getDate());
// console.log("Hora:", fechaActual.getHours());
// console.log("Minuto:", fechaActual.getMinutes());
// console.log("Segundo:", fechaActual.getSeconds());

// // Formatear la fecha en un string legible
// let fechaFormateada = fechaActual.toLocaleString();
// console.log("Fecha formateada:", fechaFormateada);

//CONDICIONALES

//IF Ejecuta un bloque de código si la condición es verdadera. Se ejecuta solo si la condición es true.
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
}

//IF ELSE Si la condición es falsa, ejecuta otro bloque de código. Evalúa dos caminos posibles.
let clima = "lluvioso";
if (clima === "soleado") {
    console.log("Lleva gafas de sol.");
} else {
    console.log("Lleva paraguas.");
}


//IF ELSE IF ELSE Múltiples condiciones secuenciales. Permite evaluar varias condiciones en orden.
let hora = 14;
if (hora < 12) {
    console.log("Buenos días.");
} else if (hora < 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}


//SWITCH CASE Ideal para comparar una variable contra múltiples valores. Evita usar muchos if...else if cuando hay múltiples casos.
let dia = "martes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana.");
        break;
    case "martes":
        console.log("Día de reuniones.");
        break;
    case "viernes":
        console.log("Casi fin de semana.");
        break;
    default:
        console.log("Día normal.");
}





//OPERADOR TERNARIO Una forma más corta de escribir if...else cuando solo hay dos opciones. Útil para asignar valores en una sola línea.
let esFeriado = true;
let mensaje = esFeriado ? "No hay trabajo hoy." : "A trabajar.";
console.log(mensaje);

//BUCLES CICLOS DE REPETICION

//WHILE
let galletitas = 5; 

while (galletitas > 0) { 
    // Mientras (galletitas sea mayor a 0) ejecutar:
    console.log("Me comí una galletita 🍪"); 
    galletitas--; // Disminuye una galletita en cada repeticion 
    // hasta que galletitas sea igual a 0 y se deja de cumplir la condición, terminando el bucle.
} 

console.log("No quedan más galletitas 😢");

//FOR
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}
//Imprimir los nombres de una lista de alumnos
let alumnos = ["Ana", "Luis", "Sofía", "Carlos"]; //array
for (
    let i = 0; //Se declara una variable i y se le asigna el valor 0.
    //i se usa como contador para recorrer el array desde la primera posición (0)
    i < alumnos.length; //Condición del bucle.
    //Como alumnos.length es 4 (porque hay 4 nombres)
    // el bucle se ejecutará hasta que i sea igual a 3.
    i++ //Después de cada vuelta, i aumenta en 1.
) {
    console.log("Alumno:", alumnos[i]);
    //Imprime en consola:
    //"Ana" "Luis" "Sofia" "Carlos"
}

//WHILE
let numero = 1;
//mientras (numero sea menos o igual a 5){ejecutar}
while (numero <= 5) {
    console.log("Número:", numero);
    numero++;
}

// //EJ WHILE
// let contraseña = "";
// while (contraseña !== "secreto") {
//     contraseña = prompt("Escribe la contraseña:");
// }
// console.log("¡Acceso permitido!");

//DO WHILE
let num;
do {
    num = prompt("Escribe un número mayor a 5:");
} while (num <= 5);
console.log("¡Gracias!");

//
// do (condición) {
//     // Código que se repite
// } while (condición);

// hacer (mientras se cumpla esto) {
// 	// Código que se repite
// } mientras (condición);

do {
    numero++; // Aumenta en 1 a numero
} while (numero <= 3); 
//Si el número sigue siendo 
//menor o igual a 3, repite.

//FOR...OF
let frutas = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja"];
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

let productos = ["Laptop", "Mouse", "Teclado"];
for (let producto of productos) {
    //"producto" es el nombre que 
    // representa a cada elemento
    console.log("Producto disponible:", producto);
}

// para (cada elemento del array){
//      ejecutar esto;
// }

//FOR...IN

let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let clave in persona) {
    console.log(clave + ":", persona[clave]);
}

let usuario = { nombre: "María", correo: "maria@gmail.com", rol: "admin" };
for (let dato in usuario) {
    console.log(dato + ": " + usuario[dato]);
}

//BREAK
// for (let i = 0; i < 100; i++) {
// 	let nombre = prompt("Ingrese su nombre");
// if (nombre == 'exit') {
// 	break;
// }
// console.log(nombre);
// }
//EJEMPLO BUSCAR UN NUMERO Y DETENER EL BUCLE
for (let i = 1; i <= 10; i++) {
    console.log("Número:", i);
    
    if (i === 5) {
        console.log("Se encontró el número 5, se detiene el bucle.");
        break; // Sale completamente del bucle
    }
}





//CONTINUE
// for (let i = 0; i < 100; i++) {
// 	let nombre = prompt("Ingrese su nombre");
// if (nombre == "") {
// 	continue;
// }
// console.log(nombre);
// }

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Saltamos el número 5.");
        continue; // Salta esta iteración y sigue con el siguiente número
    }
    console.log("Número:", i);
}










