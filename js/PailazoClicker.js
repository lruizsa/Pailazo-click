import Globoa from "./globoakObjetua.js";
import Goxokiak from "./GoxokiakObjetua.js";

// Pailazo eta kontagailuaren irudia hartu
const pailazoAurpegiHTML = document.getElementById('pailazo'); 
const kontHTML = document.getElementById('kontagailua'); 
const globPrezHTML = document.getElementById('globoPrezioa'); 
const barreakPrezHTML = document.getElementById('barreakPrezioa'); 
const goxokiPrezHTML = document.getElementById('goxokiPrezioa'); 
let kontatu = 0; 

// Obtener el elemento de audio
const musica = document.getElementById('musika');

// Inicializa objetos
let globo = new Globoa();
let goxoki = new Goxokiak();

// Llama a las funciones en el intervalo
setInterval(() => {
    zenbatIrribarre();
    kontHTML.innerHTML = kontatu;
    globPrezHTML.innerHTML = globo.getPrezioa();
    //barreakPrezHTML.innerHTML = barrea.getPrezioa();
    goxokiPrezHTML.innerHTML = goxoki.getPrezioa();
    globoDesaktibatu();
    goxokiDesaktibatu();

}, 1000);


// Listener para el clic en el pailazo
pailazoAurpegiHTML.addEventListener('click', () => {
    kontatu += 1; 
    kontHTML.innerHTML = kontatu;
    globPrezHTML.innerHTML = globo.getPrezioa();
});

// Función para incrementar el puntaje basado en los globos
function zenbatIrribarre() {
    kontatu += globo.getIrribarrea() + goxoki.getIrribarrea(); 
}

// Listener para el botón de globos
document.getElementById('globoakButton').addEventListener('click', globoaErosi);

// Listener para el botón de goxokiak
document.getElementById('goxokiButton').addEventListener('click', goxokiaErosi);

// Función para comprar globos
function globoaErosi() {
    if (kontatu >= globo.getPrezioa()) {
        kontatu = globo.erosi(kontatu);
        
        lanzarConfeti();
    }
}

// Función para comprar goxokiak
function goxokiaErosi() {
    if (kontatu >= goxoki.getPrezioa()) {
        kontatu = goxoki.erosi(kontatu); 
        lanzarConfeti();
    }
}

// Desactivar botón de globos si es necesario
function globoDesaktibatu() {
    const globoButton = document.getElementById('globoakButton');
    globoButton.disabled = (kontatu < globo.getPrezioa() || kontatu < 10);
}

// Desactivar botón de goxokiak si es necesario
function goxokiDesaktibatu() {
    const goxokiButton = document.getElementById('goxokiButton');
    goxokiButton.disabled = (kontatu < goxoki.getPrezioa() /*&& globo.getErosiak() < 10*/);
}

// Función para lanzar confeti
function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Listener para el botón "Musika jarri"
document.getElementById('musikaJarri').addEventListener('click', () => {
    musica.play(); // Inicia la música
});

// Listener para el botón "Musika kendu"
document.getElementById('musikaKendu').addEventListener('click', () => {
    musica.pause(); // Detiene la música
    musica.currentTime = 0; // Reinicia la música
});