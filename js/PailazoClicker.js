import Globoa from "./globoakObjetua.js";
import Karameluak from "./KarameluakObjetua.js";

// Pailazo eta kontagailuaren irudia hartu
const pailazoAurpegiHTML = document.getElementById('pailazo'); 
const kontHTML = document.getElementById('kontagailua'); 
let kontatu = 0; 
let goxokiComprados = 0; 

// Obtener el elemento de audio
const musica = document.getElementById('musika');

// Inicializa objetos
let globo = new Globoa();
let goxoki = new Karameluak();

// Llama a las funciones en el intervalo
setInterval(() => {
    zenbatIrribarre();
    kontHTML.innerHTML = kontatu;
    globoDesaktibatu();
    goxokiDesaktibatu();
}, 1000);

// Listener para el botón "Musika jarri"
document.getElementById('musikaJarri').addEventListener('click', () => {
    musica.play(); // Inicia la música
});

// Listener para el botón "Musika kendu"
document.getElementById('musikaKendu').addEventListener('click', () => {
    musica.pause(); // Detiene la música
    musica.currentTime = 0; // Reinicia la música
});

// Listener para el clic en el pailazo
pailazoAurpegiHTML.addEventListener('click', () => {
    kontatu += (goxokiComprados > 0) ? 100 : 1; 
    kontHTML.innerHTML = kontatu;
});

// Función para incrementar el puntaje basado en los globos
function zenbatIrribarre() {
    kontatu += globo.getIrribarrea(); 
    // Añade irribarrea acumulativa basada en la cantidad de caramelos comprados
    if (goxokiComprados > 0) {
        kontatu += goxokiComprados * 20; // Suma 20 por cada caramelo comprado
    }
}

// Listener para el botón de globos
document.getElementById('globoakButton').addEventListener('click', globoaErosi);

// Listener para el botón de goxokiak
document.getElementById('goxokiButton').addEventListener('click', goxokiaErosi);

// Función para comprar globos
function globoaErosi() {
    if (kontatu >= globo.getPrezioa()) {
        kontatu -= globo.getPrezioa();
        globo.erosi();
        lanzarConfeti();
    }
}

// Función para comprar goxokiak
function goxokiaErosi() {
    const precioGoxoki = goxoki.getPrezioa(); 
    if (kontatu >= precioGoxoki) {
        kontatu -= precioGoxoki;
        goxoki.erosi(); 
        goxokiComprados++; 
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
    goxokiButton.disabled = (kontatu < goxoki.getPrezioa());
}

// Función para lanzar confeti
function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
