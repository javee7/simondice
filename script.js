const Start_button = document.getElementById("start-button");
const Rojo = document.getElementById("Rojo");
const Verde = document.getElementById("Verde");
const Azul = document.getElementById("Azul");
const Amarillo = document.getElementById("Amarillo");
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

Start_button.addEventListener("click", StartGAME);
Rojo.addEventListener("click", CRojo);
Verde.addEventListener("click", CVerde);
Azul.addEventListener("click", CAzul);
Amarillo.addEventListener("click", CAmarillo);


function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function CreateSequence(sequence){
  sequence = getRandomInt(0,3);
  return sequence;
}

function strcmp(a, b)
{   
    for(let i = 0; i < a.length; i++){
       if (a[i] != b[i]){
          return 0;
       }
    }
    return 1;  
}

function StartGAME(){
  Start = 1;
  Perdio = 0;
  SecuenciaUser = [];
  SecuenciaMaquina = [];
  Secuencia()
}

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
  for(let i = 0; i < SecuenciaMaquina.length; i++){
    if(SecuenciaMaquina[i] == 0){
      Rojo.style.brightness = 1000;
      setTimeout(1000);
      Rojo.style.brightness = 1;
      alert("Rojo")
      
    }

    if(SecuenciaMaquina[i] == 1){
      Verde.style.brightness = 1000;
      setTimeout(1000);
      Verde.style.brightness = 1;
      alert("Verde")
     
    }

    if(SecuenciaMaquina[i] == 2){
      Azul.style.brightness = 1000;
      setTimeout(1000);
      Azul.style.brightness = 1;
      alert("Azul")
      
    }

    if(SecuenciaMaquina[i] == 3){
      Amarillo.style.brightness = 1000;
      setTimeout(1000);
      Amarillo.style.brightness = 1;
      alert("Amarillo")
     
    }
  }
}

function Secuencia(){
  let lastIndex = SecuenciaUser.length;
  if (SecuenciaMaquina.length == SecuenciaUser.length) {
    if(strcmp(SecuenciaMaquina,SecuenciaUser)){
      SecuenciaMaquina += CreateSequence(SecuenciaMaquina);
      EjecutarSecuencia(SecuenciaMaquina);
      SecuenciaUser = [];
    }
    else {
      Perdio = 10;
    }
  }
  if(Perdio == 10){
    audio.play();
    alert("Perdiste!!");
    Start = 0;
  }

}

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

