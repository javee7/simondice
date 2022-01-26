const Start_button = document.getElementById("start-button");
const Rojo = document.getElementById("Rojo");
const Verde = document.getElementById("Verde");
const Azul = document.getElementById("Azul");
const Amarillo = document.getElementById("Amarillo");
const Ronda = document.getElementById("Round")

let Start = 0;
let SecuenciaMaquina;
let SecuenciaUser;
let NROJO = 0;
let NVERDE = 1;
let NAZUL = 2;
let NAMARILLO = 3;
let Perdio = 0;

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
 * Compara strings 
 */
function strcmp(a, b)
{   
    for(let i = 0; i < a.length; i++){
       if (a[i] != b[i]){
          return 0;
       }
    }
    return 1;  
}
/**
 * Inicia el juego
 */
function StartGAME(){
  Start = 1;
  Perdio = 0;
  SecuenciaUser = [];
  SecuenciaMaquina = [];
  Secuencia()
}

/**
 * Agrega el vector del usuario el valor ingresado y lo verifica. 
 */
function CRojo(){
  if(Start)
  {
    SecuenciaUser += NROJO
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
    Secuencia(ComprobarValor());
  }
  else{
    alert("Juego no iniciado");
  }
}

/**
 * Ejecuta la secuencia guardada en SecuenciaMaquina[]
 */
function EjecutarSecuencia(){
  for(let i = 0; i < SecuenciaMaquina.length; i++){
    if(SecuenciaMaquina[i] == 0){
      //Rojo.style.backgroundColor = "black";
      //Rojo.style.backgroundColor = "red";
      alert("Rojo")
    }

    if(SecuenciaMaquina[i] == 1){
      //Verde.style.backgroundColor = "black";
      //Verde.style.backgroundColor = "green";
      alert("Verde")
    }

    if(SecuenciaMaquina[i] == 2){
      //Azul.style.backgroundColor = "black";
      //Azul.style.backgroundColor = "blue"; 
      alert("Azul")
    }

    if(SecuenciaMaquina[i] == 3){
      //Amarillo.style.backgroundColor = "black";
      //Amarillo.style.backgroundColor = "yellow";
      alert("Amarillo")
    }
  }
}

/**
 * Avisa si el 
 */

function Secuencia(){
  if (SecuenciaMaquina.length == SecuenciaUser.length) {
    if(strcmp(SecuenciaMaquina,SecuenciaUser)){
      SecuenciaMaquina += CreateSequence(SecuenciaMaquina);
      Ronda.innerHTML = `Ronda: ${SecuenciaMaquina.length}`;
      EjecutarSecuencia(SecuenciaMaquina);
      SecuenciaUser = [];
    }
    else {
      Perdio = 10;
    }
  }
  if(Perdio == 10){
    alert(`Perdiste en ronda ${SecuenciaMaquina.length}!!`, );
    Start = 0;
  }

}

/**
 * Comprueba si el valor ingresado por usuario es igual que el ingresado por la maquina
 */
function ComprobarValor(){ 
  for(let i = 0; i < SecuenciaUser.length; i++){
    if(SecuenciaUser[i] != SecuenciaMaquina[i]){
      Perdio = 10;
      return
    }
  }
  Perdio = 0
  return;
}