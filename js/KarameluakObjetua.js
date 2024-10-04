// Karamelua klasea
class Karameluak {
    constructor() {
        this.irribarrea = 20; // Cantidad de irribarre por segundo
        this.prezioa = 100; // Precio inicial de los goxokiak
        this.erosiak = 0; // Contador de goxokiak comprados
    }

    getIrribarrea() {
        return this.irribarrea;
    }

    getPrezioa() {
        return this.prezioa*(this.erosiak+1);
    }

    erosi() {
        this.erosiak++; // Incrementar el contador de goxokiak comprados
        this.goxokiaErosi(); // Mostrar el número de goxokiak comprados
    }

    igoPrezioa() {
        this.prezioa += 50; // Aumentar el precio en 50 irribarre
    }

    goxokiaErosi() {
        const container = document.getElementById("goxoki");
        container.innerHTML = "Goxokiak: " + this.erosiak; // Mostrar cuántos goxokiak se han comprado
    }

    
}

export default Karameluak;
