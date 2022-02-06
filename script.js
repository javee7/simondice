const Start_button = document.getElementById("start-button");
const Rojo = document.getElementById("Rojo");
const Verde = document.getElementById("Verde");
const Azul = document.getElementById("Azul");
const Amarillo = document.getElementById("Amarillo");
const Ronda = document.getElementById("Round");
let audio = document.getElementById("audio");
let audioboton1 = document.getElementById("audio1");
let audioboton2 = document.getElementById("audio2");
let audioboton3 = document.getElementById("audio3");
let audioboton4 = document.getElementById("audio4");

let Start = 0;
let SecuenciaMaquina;
let SecuenciaUser;
let NROJO = 0;
let NVERDE = 1;
let NAZUL = 2;
let NAMARILLO = 3;
let Perdio = 0;

let SecuenciaActual = 0;
let EstadoActual = 0;
let nIntervId;

Start_button.addEventListener("click", StartGAME);
Rojo.addEventListener("click", CRojo);
Verde.addEventListener("click", CVerde);
Azul.addEventListener("click", CAzul);
Amarillo.addEventListener("click", CAmarillo);
/**
 * Genera un numero aleatorio del 0 al 3
 */
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function CreateSequence(sequence){
  sequence = getRandomInt(0,3);
  return sequence;
}

/**
 * Inicia el juego
 */
function StartGAME(){
  Start = 1;
  Perdio = 0;
  SecuenciaUser = [];
  SecuenciaMaquina = [];
  CondicionInicial();
  Secuencia();
}

function CondicionInicial(){
  Rojo.style.backgroundColor = "red";
  Verde.style.backgroundColor = "green";
  Azul.style.backgroundColor = "blue";
  Amarillo.style.backgroundColor = "yellow";
}

/**
 * Agrega el vector del usuario el valor ingresado y lo verifica. 
 */
function CRojo(){
  if(Start)
  {
    SecuenciaUser += NROJO
    audioboton1.play();
    Secuencia(ComprobarValor());
  }
  else{
    alert("Juego no iniciado");
  }
}
function CVerde(){
  if(Start)
  {
    SecuenciaUser += NVERDE
    audioboton2.play();
    Secuencia(ComprobarValor());
  }
  else{
    alert("Juego no iniciado");
  }
}
function CAmarillo(){
  if(Start)
  {
    SecuenciaUser += NAMARILLO
    audioboton3.play();
    Secuencia(ComprobarValor());
  }
  else{
    alert("Juego no iniciado");
  }
}
function CAzul(){
  if(Start)
  {
    SecuenciaUser += NAZUL
    audioboton4.play();
    Secuencia(ComprobarValor());
  }
  else{
    alert("Juego no iniciado");
  }
}

function EjecutarSecuencia(){
    if(SecuenciaMaquina[SecuenciaActual] == 0 && EstadoActual == 0){
      audioboton1.play();
      Rojo.style.backgroundColor = "darkred";
      EstadoActual = 1;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 1 && EstadoActual == 0){
      audioboton2.play();
      Verde.style.backgroundColor = "darkgreen";
      EstadoActual = 1;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 2 && EstadoActual == 0){
      audioboton4.play();
      Azul.style.backgroundColor = "darkblue";
      EstadoActual = 1;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 3 && EstadoActual == 0){
      audioboton3.play();
      Amarillo.style.backgroundColor = "gold";
      EstadoActual = 1;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 0 && EstadoActual == 1){
      Rojo.style.backgroundColor = "red";
      SecuenciaActual +=1;
      EstadoActual = 0;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 1 && EstadoActual == 1){
      Verde.style.backgroundColor = "green";
      SecuenciaActual +=1;
      EstadoActual = 0;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 2 && EstadoActual == 1){
      Azul.style.backgroundColor = "blue";
      SecuenciaActual +=1;
      EstadoActual = 0;
    }

    else if(SecuenciaMaquina[SecuenciaActual] == 3 && EstadoActual == 1){
      Amarillo.style.backgroundColor = "yellow";
      SecuenciaActual +=1;
      EstadoActual = 0;
    }

    if (SecuenciaActual >= SecuenciaMaquina.length){
      clearInterval(nIntervId);
      SecuenciaActual = 0;
    }
}

/**
 * Avisa si el 
 */

function Secuencia(){
  if(Perdio == 10){
    audio.play();
    alert(`Perdiste en ronda ${SecuenciaMaquina.length}!!`);
    clearInterval(nIntervId);
    Start = 0;
  }
  else if (SecuenciaMaquina.length == SecuenciaUser.length) {
      SecuenciaMaquina += CreateSequence(SecuenciaMaquina);
      Ronda.innerHTML = `Ronda: ${SecuenciaMaquina.length}`;
      setTimeout(nIntervId = setInterval(EjecutarSecuencia, 750), 2000);
      SecuenciaUser = [];
      PRIMERA = 0;
  }
}

/**
 * Comprueba si el valor ingresado por usuario es igual que el ingresado por la maquina
 */
function ComprobarValor(){ 
  SecuenciaMaquina.startsWith(SecuenciaUser) ? Perdio = 0 : Perdio = 10;
  return;
}
