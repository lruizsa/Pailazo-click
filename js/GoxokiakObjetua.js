// Goxokiak klasea
class Goxokiak {
    constructor() {
        this.irribarrea = 0; // Segundoko irribarre kopurua
        this.prezioa = 200; // Goxokien hasierako prezioa
        this.erosiak = 0; // Erositako goxokien kontagailua
    }

    setIrribarrea(){
        this.irribarrea += 10; // erosten den bakoitzeko , irribarrearen kostua 10 igo
    }
    getIrribarrea() {
        return this.irribarrea;
    }

    getPrezioa() {
        return this.prezioa;
    }

    erosi(kontatu) {
        this.erosiak++; 
        const container = document.getElementById("goxoki");
        container.innerHTML = "Goxokiak: " + this.erosiak; 
        this.setIrribarrea();
        kontatu = kontatu - this.prezioa;
        this.igoPrezioa();
        return kontatu;
    }

    igoPrezioa() {
        // Prezio osoa handitzen du erositako kopuruaren arabera (erosiak).
        // Erositako gaien kopurua (erosiak) bider 100
        // eta egungo prezioari gehitzen dio (prezioa).
        this.prezioa += 100 * this.erosiak; 
    }
    
}

export default Goxokiak;
