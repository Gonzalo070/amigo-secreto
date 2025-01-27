// Declaración de variables
let listaAmigos = [];

// Función para agregar amigos a la lista
function añadirAmigos() {
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);
    listaAmigos.push(nuevoAmigo);
    console.log(listaAmigos);
    //limpiar caja de texto
    document.querySelector("#amigo").value = "";
}


