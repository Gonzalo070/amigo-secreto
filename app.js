// Declaración de variables
let listaAmigos = [];

// Función para agregar amigos a la lista
function añadirAmigos() {
    let nuevoAmigo = document.getElementById('ingresarAmigo').value;
    
    // Verificar si la entrada no está vacía
    if (nuevoAmigo.trim() !== '') {
        listaAmigos.push(nuevoAmigo);
        console.log(listaAmigos);
        // Limpiar el campo de entrada
        document.getElementById('ingresarAmigo').value = '';
    } else {
        console.log('Por favor ingresa un nombre válido.');
    }
}


