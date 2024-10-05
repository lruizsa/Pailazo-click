// Pailazoa
class Globoa {
    constructor() {
        this.prezioa = 10; /* 10 irribarrerekin globo bat erosteko aukera */
        this.erosiak = 0; /* Zenbat objetu ditugun erosita */
    }

    getIrribarrea() {
        return this.erosiak; // Erositako globo kopurua bera gehituko da irribarre moduan
    }

    getPrezioa() {
        return this.prezioa;
    }

    getErosiak() {
        return this.erosiak; // Erositako globoen kopurua lortu
    }

    erosi(kontatu) {
        this.erosiak++; // Erositako globoen kopurua handitzea
        this.globoErosi(); // Erakutsi erositako puxiken kopurua
        kontatu = kontatu - this.prezioa;
        this.prezioa = 10 * (this.erosiak + 1);
        return kontatu;
    }

    globoErosi() {
        const container = document.getElementById("globoak");
        container.innerHTML = "Globoak: " + this.erosiak; // Display eguneratu
    }
}

export default Globoa;
