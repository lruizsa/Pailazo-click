// Pailazoa
class Globoa {
    constructor() {
        this.irribarrea = 1; /* Irribare bat segunduko */
        this.prezioa = 10; /* 10 irribarrerekin globo bat erosteko aukera */
        this.erosiak = 0; /* Zenbat objetu ditugun erosita */
    }

    getIrribarrea() {
        return this.irribarrea * this.erosiak; // Multiplicar por los globos comprados
    }

    getPrezioa() {
        return this.prezioa * (this.erosiak + 1); // Precio del siguiente globo
    }

    getErosiak() {
        return this.erosiak; // Obtener el número de globos comprados
    }

    erosi() {
        this.erosiak++; // Incrementar el número de globos comprados
        this.globoErosi(); // Mostrar el número de globos comprados
    }

    globoErosi() {
        const container = document.getElementById("globoak");
        container.innerHTML = "Globoak: " + this.erosiak; // Actualizar el display
    }
}

export default Globoa;
