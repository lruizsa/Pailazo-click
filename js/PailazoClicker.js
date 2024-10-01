// Pailazo eta kontagailuaren irudia hartu
const pailazoAurpegi = document.getElementById('pailazo'); // Pailazoaren ID-a
const kont = document.getElementById('kontagailua'); // Kontagailuaren ID-a
let kontatu = 0; // Kontagailua 0-n inizializatu

// Listener-a sortu:
pailazoAurpegi.addEventListener('click', () => {
    // Klick egitean, kontagailuan +1 egingo da.
    kontatu++;
    kont.textContent = kontatu; // kont aldagaia dagoen tokian, zenbakia inprimitu
    /*pailazoAurpegi.style.transform = 'scale(1.2)'; 
    setTimeout(() => {
        pailazoAurpegi.style.transform = 'scale(1)'; 
    }, 200); */
});



