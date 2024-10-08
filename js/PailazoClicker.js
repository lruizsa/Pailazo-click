import Globoa from "./globoakObjetua.js"; //Klaseak inportatu
import Goxokiak from "./GoxokiakObjetua.js"; //Klaseak inportatu
import Barrea from "./BarreaObjetua.js"; //Klaseak inportatu

// Pailazo, kontagailu, globo, barrea eta goxokien elementua hartu
const pailazoAurpegiHTML = document.getElementById('pailazo'); 
const kontHTML = document.getElementById('kontagailua'); 
const globPrezHTML = document.getElementById('globoPrezioa'); 
const globIpSHTML = document.getElementById('globoIpS'); 
const globoIehunHTML = document.getElementById('globoIehun'); 
const barreaPrezHTML = document.getElementById('barreaPrezioa'); 
const barreHobekuntzaHTML = document.getElementById('barreHobekuntza'); 
const goxokiPrezHTML = document.getElementById('goxokiPrezioa'); 
const goxokiIpSHTML = document.getElementById('goxokiIpS'); 
const goxokiIehunHTML = document.getElementById('goxokiIehun'); 
const IpSTotalaHTML = document.getElementById('IpSTotala'); 
let kontatu = 0; 
let IpSTotala = 0;

// Musika elementua hartu
const musica = document.getElementById('musika');

// Objetuak inizializatu
let globo = new Globoa();
let goxoki = new Goxokiak();
let barrea = new Barrea();

// Tarte horretan funtzioei deitu.
setInterval(() => {
    zenbatIrribarre();
    kontHTML.innerHTML = kontatu; // Kontagailua aktualizatzen du
    IpSTotalaHTML.innerHTML = IpSTotala + " irribarre segunduko";
    globPrezHTML.innerHTML = globo.getPrezioa()+ " irribarre behar dituzu erosteko"; // Globoen prezioa aktualizatzen du
    barreaPrezHTML.innerHTML = barrea.getPrezioa()+ " irribarre behar dituzu erosteko"; // Barrea-ren prezioa aktualizatzen du
    goxokiPrezHTML.innerHTML = goxoki.getPrezioa()+ " irribarre behar dituzu erosteko"; // Goxoki-ren prezioa aktualizatzen du
    barreHobekuntzaHTML.innerHTML = barrea.getIrribarrea() + " irribarre gehitzen ditu klik-ero";
    globIpSHTML.innerHTML = "Ekoizten dituen irribarreak/s: " +globo.getErosiak();
    globoIehunHTML.innerHTML = "Ekoizten dituen ehunekoa: " + ehunekoaKalkulatu(globo) + "%"; // globoaren portzentaia
    goxokiIehunHTML.innerHTML = "Ekoizten dituen ehunekoa: " +ehunekoaKalkulatu(goxoki) + "%";
    goxokiIpSHTML.innerHTML = "Ekoizten dituen irribarreak/s: " + goxoki.getIrribarrea();

    globoDesaktibatu(); //funtzioek botoiak desaktibatzen dituzte, hau da, erabiltzaileak erosketa egin dezan esperoan egon behar dutela adierazten dute.
    goxokiDesaktibatu(); //funtzioek botoiak desaktibatzen dituzte, hau da, erabiltzaileak erosketa egin dezan esperoan egon behar dutela adierazten dute.
    barreaDesaktibatu(); //funtzioek botoiak desaktibatzen dituzte, hau da, erabiltzaileak erosketa egin dezan esperoan egon behar dutela adierazten dute.
    IpSTotala = globo.getErosiak() + goxoki.getIrribarrea();
}, 1000); //1000 milisegundo) igaro ondoren berriro exekutatuko dira

// Pailazoan klik egitean....
pailazoAurpegiHTML.addEventListener('click', () => {
    kontatu += 1 + barrea.getIrribarrea(); // Barrearen irribarreak gehitu
    kontHTML.innerHTML = kontatu; // Kontagailua aktualizatu
});

// Globoetan oinarritutako puntuazioa handitzeko funtzioa
function zenbatIrribarre() {
    kontatu += globo.getIrribarrea() + goxoki.getIrribarrea(); // Globoen irribarrea eta goxokia
}

// Objetu bat jaso eta bere irribarre ekoizpenaren ehuneko bueltatzen du
function ehunekoaKalkulatu(objetu) {
    if (IpSTotala > 0) {
        return ((objetu.getIrribarrea() / IpSTotala) * 100).toFixed(2);
    } else {
        return 0; 
    }
}

// Globoen botoiarentzak listenerra --> klikatzean, globoaErosi funtzioari deituko dio
document.getElementById('globoakButton').addEventListener('click', globoaErosi);

// Goxokien botoiarentzak listenerra --> klikatzean, goxokiaErosi funtzioari deituko dio
document.getElementById('goxokiButton').addEventListener('click', goxokiaErosi);

// Barreen botoiarentzak listenerra --> klikatzean, barreaErosi funtzioari deituko dio
document.getElementById('barreaButton').addEventListener('click', barreaErosi);

// Globoak erosteko funtzioa 
function globoaErosi() {
    if (kontatu >= globo.getPrezioa()) {
        kontatu = globo.erosi(kontatu); 
        lanzarConfeti(); // Erostean konfetia bota
    }
}

// Goxokiak erosteko funtzioa 
function goxokiaErosi() {
    if (kontatu >= goxoki.getPrezioa()) {
        kontatu = goxoki.erosi(kontatu); //Erosketa egin eta kontatu aktualizatu
        lanzarConfeti(); // Erostean konfetia bota
    }
}

// Barrea erosteko funtzioa 
function barreaErosi() {
    if (kontatu >= barrea.getPrezioa()) {
        kontatu = barrea.erosi(kontatu); //Erosketa egin eta kontatu aktualizatu
        lanzarConfeti(); // Erostean konfetia bota
    }
}

// Botoia desaktibatzeko
function globoDesaktibatu() {
    const globoButton = document.getElementById('globoakButton');
    globoButton.disabled = (kontatu < globo.getPrezioa() || kontatu < 10);
}

// Botoia desaktibatzeko
function goxokiDesaktibatu() {
    const goxokiButton = document.getElementById('goxokiButton');
    goxokiButton.disabled = (kontatu < goxoki.getPrezioa());
}

// Botoia desaktibatzeko
function barreaDesaktibatu() {
    const barreaButton = document.getElementById('barreaButton');
    barreaButton.disabled = (kontatu < barrea.getPrezioa());
}

// Konfetia botatzeko funtzioa
function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// "Musika jarri" botoia sakatzerakoan musika hasten da
document.getElementById('musikaJarri').addEventListener('click', () => {
    musica.play(); // Musika hasi
});

// "Musika kendu" botoia sakatzerakoan musika bukatzen da
document.getElementById('musikaKendu').addEventListener('click', () => {
    musica.pause(); // Musike gelditu
    musica.currentTime = 0; // Musika berrabiarazten du
});
