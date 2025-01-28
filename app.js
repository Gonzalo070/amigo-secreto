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

        //Mostrar lista en pantalla
        mostrarLista();
    }

    //limpiar caja de texto
    document.querySelector("#amigo").value = "";

    return;
}

//funcion para mostrar la lista en pantalla
function mostrarLista() {
    const listaMostradaEnPantalla = document.querySelector('ul');
    listaMostradaEnPantalla.innerHTML = '';
    listaDeAmigos.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaMostradaEnPantalla.appendChild(li);
    })
    return;
}

//Función nombre aleatorio
function sortearNombre() {
    let nombreAleatorio = '';
    let indiceAleatorio;
    if (listaDeAmigos == "") {
        alert("Ingrese un nombre para poder sortear");
    } else {
        indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        nombreAleatorio = listaDeAmigos[indiceAleatorio];
        //Mostrar nombre sorteado en pantalla
        document.getElementById("resultado").innerHTML = `El amigo soretado es: ${nombreAleatorio}`
        //Ocultar lista
        document.getElementById("listaAmigos").style.display = 'none';
    }
    return;
}








