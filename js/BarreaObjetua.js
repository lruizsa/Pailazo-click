//Barreak
class Barrea {
    constructor() {
        this.irribarrea = 1; // Cantidad de irribarrea inicial por segundo
        this.prezioa = 50; // Precio inicial para comprar Barrea
        this.erosiak = 0; // Contador de Barrea compradas
    }
    
    setIrribarrea() {
        // Mejora la cantidad de irribarrea
        this.irribarrea = (this.irribarrea * 4 )- Math.round(this.erosiak * 1.5);
    }

    getBarrea() {
        return this.irribarrea;
    }

    getPrezioa() {
        return this.prezioa; // Devuelve el precio actual
    }

    erosi(kontatu) {
        this.erosiak++; // Incrementa el contador de compras
        kontatu = kontatu - this.prezioa; // Resta el precio de kontatu
        this.prezioa = Math.round(this.prezioa * 1.5); // Aumenta el precio
        this.setIrribarrea(); // Actualiza la irribarrea
        return kontatu; // Devuelve el nuevo valor de kontatu
    }   
}

export default Barrea;
