window.addEventListener('load', inicio);

var boton;
var mp3;

function inicio() {

    document.getElementById("botonSonido").addEventListener('click', cambiarBoton);

}

function cambiarBoton() {

    setTimeout(cambiarEstilo, 500);
    sonar();

}

function cambiarEstilo() {

    document.getElementById("botonSonido").textContent = "GAME OVER";
    boton = document.getElementById("botonSonido").style;
    boton.padding = "2em";
    boton.backgroundColor = "black";
    boton.color = "red";
    boton.fontSize = "xx-large";
    boton.fontFamily = "monospace";
    boton.border = "goldenrod 1em groove";

}

function sonar() {

    mp3 = document.getElementById("sonido");
    mp3.play();

}