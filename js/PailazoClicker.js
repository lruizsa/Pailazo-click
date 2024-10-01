import Globoa from "../js/globoakObjetua.js";



// Pailazo eta kontagailuaren irudia hartu
const pailazoAurpegi = document.getElementById('pailazo'); // Pailazoaren ID-a
const kont = document.getElementById('kontagailua'); // Kontagailuaren ID-a
let kontatu = 0; // Kontagailua 0-n inizializatu

// Listener-a sortu:
pailazoAurpegi.addEventListener('click', () => {
    // Klick egitean, kontagailuan +1 egingo da.
    kontatu++;
    
    erosita();
    /*pailazoAurpegi.style.transform = 'scale(1.2)'; 
    setTimeout(() => {
        pailazoAurpegi.style.transform = 'scale(1)'; 
    }, 200); */
});




let globo = new Globoa();
globo.globoErosi();


function globoaErosi(){
    
    if(kontatu>=globo.getPrezioa()){
        kontatu-=globo.getPrezioa();
        erosita();
        globo.erosi();
        lanzarConfeti();
    }
}

function erosita(){
    kont.textContent = kontatu; // kont aldagaia dagoen tokian, zenbakia inprimitu
}
document.getElementById('globoakButton').addEventListener('click', globoaErosi);


setInterval(() => {
    zenbatPuntu();
    erosita();
}, 1000);

function zenbatPuntu(){
    kontatu+=globo.getIrribarrea();
}




function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}