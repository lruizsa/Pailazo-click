import Globoa from "./globoakObjetua.js";
// import Karameluak from "./KarameluakObjetua.js";
// import Barrea from "./BarreakObjetua.js";

// Pailazo eta kontagailuaren irudia hartu
const pailazoAurpegiHTML = document.getElementById('pailazo'); // Pailazoaren ID-a
const kontHTML = document.getElementById('kontagailua'); // Kontagailuaren ID-a
let kontatu = 0; // Kontagailua 0-n inizializatu
let goxokiComprados = 0; // Contador de goxokiak comprados

// Llama a las funciones en el intervalo
setInterval(() => {
    zenbatIrribarre();
    kontHTML.innerHTML= kontatu;
    const globoErosiak = globo.getErosiak(); // Obtener el número de globos comprados
    // globoDesaktibatu(); // Actualiza el estado del botón de globos
    // goxokiDesaktibatu(); // Actualiza el estado del botón de goxokiak
}, 1000);

// // Listener-a sortu:
pailazoAurpegiHTML.addEventListener('click', () => {
    // Klick egitean, kontagailuan +1 egingo da.
    kontatu += (goxokiComprados > 0) ? 100 : 1; // Incremento de 100 si ya se han comprado goxokiak
    kontHTML.innerHTML= kontatu;
});

// Función para incrementar el puntaje basado en los globos
function zenbatIrribarre() {
    kontatu += globo.getIrribarrea(); 
}

// Inicializa objetos
let globo = new Globoa();
// let goxoki = new Karameluak();

// Listener para el botón de globos
document.getElementById('globoakButton').addEventListener('click', globoaErosi);

// // Listener para el botón de goxokiak
// document.getElementById('goxokiButton').addEventListener('click', goxokiaErosi);

// Función para comprar globos
function globoaErosi() {
    if (kontatu >= globo.getPrezioa()) {
        kontatu -= globo.getPrezioa();
        globo.erosi();
        lanzarConfeti();
    }
}

// // Función para comprar goxokiak
// function goxokiaErosi() {
//     const precioGoxoki = goxoki.getPrezioa(); // Obtener el precio actual de los goxokiak
//     if (kontatu >= precioGoxoki) {
//         kontatu -= precioGoxoki;
//         goxoki.erosi(); // Aumentar la cantidad de goxokiak comprados
//         goxokiComprados++; // Incrementar el contador de goxokiak
//         // Incrementar el precio para la próxima compra
//         goxoki.igoPrezioa();
//         lanzarConfeti();
//     }
// }

// //Barrea
// let barrea = new Barrea();
// barrea.barreaErosi();

// function barreaErosi(){
    
//     if(kontatu>=barrea.getPrezioa()){
//         kontatu-=barrea.getPrezioa();
//         barrea.erosi();
//         lanzarConfeti();
//     }
// }
// document.getElementById('barreakButton').addEventListener('click', barreaErosi);

// // Desactivar botón de globos si es necesario
// function globoDesaktibatu() {
//     const globoButton = document.getElementById('globoakButton');
//     globoButton.disabled = (kontatu < globo.getPrezioa() || kontatu < 10);
// }

// // Desactivar botón de goxokiak si es necesario
// function goxokiDesaktibatu() {
//     const goxokiButton = document.getElementById('goxokiButton');
//     goxokiButton.disabled = (kontatu < goxoki.getPrezioa());
// }

// Función para lanzar confeti
function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
