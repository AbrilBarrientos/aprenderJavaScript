const persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log("¡Hola, soy " + this.nombre + "!");
    }
};

// Llamando al método
persona.saludar(); // "¡Hola, soy Ana!"

//Agrergar propiedad
persona.profesion = "Ingeniera";
console.log(persona.profesion); // "Ingeniera"

//Modificar propiedad\
persona.edad = 26;
console.log(persona.edad); // 26

//Eliminar propiedad
delete persona.profesion;
console.log(persona.profesion); // undefined

//Recorrer objeto
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
} //Esto imprimirá cada propiedad y su valor.
//Los métodos permiten que los objetos realicen acciones, 
// haciendo que el código sea más estructurado y reutilizable.

//CLASES
class Persona {
	constructor(nombre, edad, calle) {
		this.nombre = nombre;
		this.edad = edad;
		this.calle = calle;
	}
}

const persona1 = new Persona ("Natalia Oreiro", 40, "Av. Callao 123") ;
