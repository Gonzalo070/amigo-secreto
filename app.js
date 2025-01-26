

//declaración de variables
let listaAmigos = [];


//Función para agregar amigos a la lista
function añadirAmigos() {
    let nuevoAmigo = document.getElementById('ingresarAmigo');
    listaAmigos.push(nuevoAmigo);
    console.log(listaAmigos);
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