// Goxokiak klasea
class Goxokiak {
    constructor() {
        this.irribarrea = 0; // Cantidad de irribarre por segundo
        this.prezioa = 200; // Precio inicial de los goxokiak
        this.erosiak = 0; // Contador de goxokiak comprados
    }

    setIrribarrea(){
        this.irribarrea += 10;
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
        this.prezioa += 100 * this.erosiak; // Aumentar el precio en 50 irribarre
    }
    
}

export default Goxokiak;
