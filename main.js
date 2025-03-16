// Variable
let mate = "yerba";

// Constante
const iva = 1.21;

// Variable que mata gatitos
var gatitoVivo = false;

//

if (true) {
    let y = 20; 
    // 'y' solo es accesible dentro de este bloque
}
console.log(y); 
// Error: 'y' no está definido


//

console.log(y); 
// Error: Cannot access 'y' before initialization
let y = 5;

//VAR

if (true) {
    var x = 10; 
    // 'x' es accesible fuera del bloque
}
console.log(x); // 10

//CONST
if (true) {
    const z = 30; 
    // 'z' solo es accesible dentro de este bloque {}
}
console.log(z); 
// Error: 'z' no está definido

//Error reasignacion
const a = 10;
a = 20; // Error: Assignment to constant variable.

//CONST Arrays y objetos
const person = { name: 'Juan' };
person.name = 'Pedro'; // Esto es válido
person = {}; // Error: Assignment to constant variable.

//TIPOS DE DATOS
//STRING
let nombre = "Juan"; // "" comillas dobles
let saludo = 'Hola!'; // '' comillas simples

//NUMBER
let edad = 20; //Número entero (Int)
let temperatura = 20.5; //Número decimal/flotante (Float)


//BOOLEAN
let numeroPar = true;
let tieneCero = false;


//UNDEFINED
let resultado; //Variable DECLARADA pero NO INICIALIZADA
//JS le asigna el valor undefined



//NULL
let papel = null; //No hay papel

//OBJECT
let persona = {
    nombre: "Ana",
    edad: 20,
    trabaja: true
};

//ARRAY
let frutas = ["manzana", "pera", "banana"];

//FUNCION
function saludar(){
    alert('Hola!');
}

saludar() 
//llamando a la funcion por el nombre

//DATE
let fechaActual = new Date();
console.log("Fecha y hora actual:", fechaActual);

// Crear una fecha específica (Año, Mes (0-11), Día, Hora, Minuto, Segundo)
let fechaEspecifica = new Date(2024, 7, 16, 14, 30, 0); // 16 de agosto de 2024, 14:30:00
console.log("Fecha específica:", fechaEspecifica);

// Obtener valores individuales
console.log("Año:", fechaActual.getFullYear());
console.log("Mes:", fechaActual.getMonth() + 1); // Meses van de 0 (Enero) a 11 (Diciembre)
console.log("Día:", fechaActual.getDate());
console.log("Hora:", fechaActual.getHours());
console.log("Minuto:", fechaActual.getMinutes());
console.log("Segundo:", fechaActual.getSeconds());

// Formatear la fecha en un string legible
let fechaFormateada = fechaActual.toLocaleString();
console.log("Fecha formateada:", fechaFormateada);