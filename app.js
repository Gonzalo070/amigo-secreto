

//declaración de variables
let amigosIngresados = [];


//Función para agregar amigos a la lista
function añadirAmigos() {
    let nombreIngresado = document.getElementById("añadirAmigos").value;
    amigosIngresados.push(nombreIngresado);
    return;
}

//Función para limpiar la caja
function limpiarCaja() {
    document.querySelector("#ingresarAmigos").value = "";
}

//Función para actualizar la lista y mostrarla en pantalla
function mostrarLista() {
    
}


//Función para sortear un nombre aleatorio de la lista
function sortearNombre() {
    
}