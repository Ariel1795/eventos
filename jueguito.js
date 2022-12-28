const jugador = document.getElementById("jugador");
const boton = document.getElementById("desaparecer");

// darle propiedades al jugador
const estadoJugador = {
    velocidad: 100,
    mostrar: true,
    top: 0,
    left: 0
}

// hacer desaparecer el jugador

boton.onclick = ()=> {
    if(estadoJugador.mostrar){
        jugador.style.opacity = 0;
        estadoJugador.mostrar = false;
        boton.innerText = "Aparecer";
    } else {
        jugador.style.opacity = 1;
        estadoJugador.mostrar = true;
        boton.innerText = "Desaparecer";
    }
}