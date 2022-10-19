// obtener los objetos del dom 
let tablero = document.getElementById("tablero");
let boton_play = document.getElementById("boton_play");
let boton_pause = document.getElementById("boton_pause");
let boton_reset = document.getElementById("boton_reset");
let boton_save = document.getElementById("boton_save");    // guardar tiempo actual
let boton_round = document.getElementById("boton_round");  // round o vuelta 

console.log(boton_play)


// Estado Cronometro
let esta_activo = false;

let tiempo = {
    decimas : 0,
    segundos : 0,
    minutos : 0,
    horas: 0
}

// Funcion Actualizar
function formato(numero){  // muestra los numeros en formato 5 como 05
    if(numero<10){
        return "0" + numero;
    }else{
        return numero;
    }
}
    
    
function actualizar(){
    tiempo.decimas++; // cronometro avanza en decimas = 100ms
    
    if(tiempo.decimas == 10){
        tiempo.decimas = 0;
        tiempo.segundos++;
    }

    if(tiempo.segundos == 60){
        tiempo.segundos = 0;
        tiempo.minutos++;
    }
    
    if(tiempo.minutos == 60){
        tiempo.minutos = 0;
        tiempo.horas++;
    }

    tablero.innerHTML = `${formato(tiempo.horas)}:${formato(tiempo.minutos)}:${formato(tiempo.segundos)}:${tiempo.decimas}`

    if(esta_activo == true){
        setTimeout(actualizar,100);
    }
}


// Accion botones 
function play(){
    if(esta_activo == false){
        esta_activo = true;
        actualizar();
    }
}

function pause(){
    esta_activo = false;
}

function reset(){
    tiempo.decimas = 0;
    tiempo.segundos = 0;
    tiempo.minutos = 0;
    tablero.innerHTML = `${formato(tiempo.horas)}:${formato(tiempo.minutos)}:${formato(tiempo.segundos)}:${tiempo.decimas}`
}

// Escuchar Eventos
boton_play.addEventListener('click', play);
boton_pause.addEventListener('click', pause);
boton_reset.addEventListener('click', reset);