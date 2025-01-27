// Declaración de variables
let listaDeAmigos = [];

// Función para agregar amigos a la lista
function añadirAmigos() {
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);

    //Agregar amigo a la lista
    if (nuevoAmigo == "") {
        alert("Ingrese un nombre válido porfavor")
    } else {
        listaDeAmigos.push(nuevoAmigo);
        console.log(listaDeAmigos);
    }

    //limpiar caja de texto
    document.querySelector("#amigo").value = "";
}


