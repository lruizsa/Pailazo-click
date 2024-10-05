import Globoa from "./globoakObjetua.js";
import Goxokiak from "./GoxokiakObjetua.js";
import Barrea from "./BarreaObjetua.js";

// Pailazo eta kontagailuaren irudia hartu
const pailazoAurpegiHTML = document.getElementById('pailazo'); 
const kontHTML = document.getElementById('kontagailua'); 
const globPrezHTML = document.getElementById('globoPrezioa'); 
const globIpSHTML = document.getElementById('globoIpS'); 
const barreaPrezHTML = document.getElementById('barreaPrezioa'); 
const goxokiPrezHTML = document.getElementById('goxokiPrezioa'); 
let kontatu = 0; 

// Obtener el elemento de audio
const musica = document.getElementById('musika');

// Inicializa objetos
let globo = new Globoa();
let goxoki = new Goxokiak();
let barrea = new Barrea();

// Llama a las funciones en el intervalo
setInterval(() => {
    zenbatIrribarre();
    kontHTML.innerHTML = kontatu; // Actualiza el contador
    globPrezHTML.innerHTML = globo.getPrezioa(); // Actualiza precio de globos
    globIpSHTML.innerHTML = globo.getIrribarrea();    
    barreaPrezHTML.innerHTML = barrea.getPrezioa(); // Actualiza precio de Barrea
    goxokiPrezHTML.innerHTML = goxoki.getPrezioa(); // Actualiza precio de goxoki
    goxokiPrezHTML.innerHTML = goxoki.getPrezioa(); // Actualiza precio de goxoki
    globoDesaktibatu();
    goxokiDesaktibatu();
    console.log('Prezioa: ' + barrea.getPrezioa() + ' Irribarreak: ' + barrea.getBarrea());
}, 1000);

// Listener para el clic en el pailazo
pailazoAurpegiHTML.addEventListener('click', () => {
    kontatu += barrea.getBarrea(); // Suma el irribarrea de Barrea
    kontHTML.innerHTML = kontatu; // Actualiza el contador
    globPrezHTML.innerHTML = globo.getPrezioa(); // Actualiza precio de globos
    barreaPrezHTML.innerHTML = barrea.getPrezioa(); // Actualiza precio de Barrea
    goxokiPrezHTML.innerHTML = goxoki.getPrezioa(); // Actualiza precio de goxoki
});

// Función para incrementar el puntaje basado en los globos
function zenbatIrribarre() {
    kontatu += globo.getIrribarrea() + goxoki.getIrribarrea(); // Suma irribarrea de globos y goxoki
}

// Listener para el botón de globos
document.getElementById('globoakButton').addEventListener('click', globoaErosi);

// Listener para el botón de goxokiak
document.getElementById('goxokiButton').addEventListener('click', goxokiaErosi);

// Listener para el botón de barrea
document.getElementById('barreaButton').addEventListener('click', barreaErosi);

// Función para comprar globos
function globoaErosi() {
    if (kontatu >= globo.getPrezioa()) {
        kontatu = globo.erosi(kontatu); 
        lanzarConfeti(); // Lanza confeti
    }
}

// Función para comprar goxokiak
function goxokiaErosi() {
    if (kontatu >= goxoki.getPrezioa()) {
        kontatu = goxoki.erosi(kontatu); 
        lanzarConfeti(); // Lanza confeti
    }
}

// Función para comprar barrea
function barreaErosi() {
    if (kontatu >= barrea.getPrezioa()) {
        kontatu = barrea.erosi(kontatu); // Realiza la compra y actualiza kontatu
        lanzarConfeti(); // Lanza confeti
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

// Listener para el botón "Musika jarri"
document.getElementById('musikaJarri').addEventListener('click', () => {
    musica.play(); // Inicia la música
});

// Listener para el botón "Musika kendu"
document.getElementById('musikaKendu').addEventListener('click', () => {
    musica.pause(); // Detiene la música
    musica.currentTime = 0; // Reinicia la música
});
