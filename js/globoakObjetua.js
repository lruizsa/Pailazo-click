// Pailazoa
class Globoa {
    constructor() {
        this.irribarrea = 1; /* Irribare bat segunduko */
        this.prezioa = 10; /* 10 irribarrerekin globo bat erosteko aukera */
        this.erosiak = 0; /* Zenbat objetu ditugun erosita */
    }

    getIrribarrea() {
        return this.irribarrea * this.erosiak; // Erositako globo kopurua bera gehituko da irribarre moduan
    }

    getPrezioa() {
        return this.prezioa;
    }

    getErosiak() {
        return this.erosiak; // Obtener el número de globos comprados
    }

    erosi(kontatu) {
        this.erosiak++; // Incrementar el número de globos comprados
        this.globoErosi(); // Mostrar el número de globos comprados
        kontatu = kontatu - this.prezioa;
        this.prezioa = 10 * (this.erosiak + 1);
        return kontatu;
    }

    globoErosi() {
        const container = document.getElementById("globoak");
        container.innerHTML = "Globoak: " + this.erosiak; // Actualizar el display
    }
}

export default Globoa;
