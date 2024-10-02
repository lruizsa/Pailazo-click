//Barreak
class Barrea{
    constructor(){
        this.irribarrea = 10; /* 10 irribarre segunduko  */
        this.prezioa = 50; /* 50 irribarrerekin "barreak" erosteko aukera  */
        this.erosiak = 0; /* Zenbat objetu ditugun erosita */
    }

    getIrribarrea(){
        return this.irribarrea;
    }

    getPrezioa(){
        return this.prezioa*(this.erosiak+1);
    }

    erosi(){
        this.erosiak++;
        this.irribarreaErosi();
    }   

    irribarreaErosi(){
        const container = document.getElementById("irribarreak");
        container.innerHTML = "Zenbat irribarre erosi dituzu? " + this.erosiak;
    }

}

export default Barrea;