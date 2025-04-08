'use strict';

//función constructora

function Producto(nombre, precio, categoria, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
}

//"construyendo" cada producto
const notebookBangho = new Producto('Notebook Bangho', 200, 'Computadoras', true);
const notebookToshiba = new Producto('Notebook Toshiba', 100, 'Computadoras', false);
const buzoAdidas = new Producto('Buzo Adidas', 50, 'Ropa deportiva', true);




