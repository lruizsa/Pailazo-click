//Barreak
class Barrea {
    constructor() {
        this.irribarrea = 0; // Hasierako irribarrearen kantitatea segundoko
        this.prezioa = 100; // Barrea erosteko hasierako prezioa
        this.erosiak = 0; // Erositako Barreen kontagailua
    }
    
    setIrribarrea() {
        // Mejora la cantidad de irribarrea
        this.irribarrea = this.irribarrea + 5 ;
    }

    getIrribarrea() {
        return this.irribarrea;
    }

    getPrezioa() {
        return this.prezioa; // Momentuko prezioa itzultzen du
    }

    erosi(kontatu) {
        this.erosiak++; // Erosketa-kontagailua handitzen du
        kontatu = kontatu - this.prezioa; // Kontatuaren prezioa kentzen du
        this.barreakErosi();
        this.prezioa = Math.round(this.prezioa * 4); // Prezioak gora egiten du
        this.setIrribarrea(); // Eguneratu irribarrea
        return kontatu; // Kontatu-ren balio berria itzultzen du
    }   

    // Zenbat barre erosi diren azaltzen du:
    barreakErosi() {
        const container = document.getElementById("barreak");
        container.innerHTML = "Barreak: " + this.erosiak; 
    }
}

export default Barrea;
