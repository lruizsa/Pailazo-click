//Pailazoa
class Globoa{
    constructor(){
        this.irribarrea = 1; /* Irribare bat segunduko  */
        this.prezioa = 10; /* 10 irribarrerekin globo bat erosteko aukera  */
        this.erosiak = 0; /* Zenbat objetu ditugun erosita */
    }

    getIrribarrea(){
        return this.irribarrea*(this.erosiak);
    }

    getPrezioa(){
        return this.prezioa*(this.erosiak+1);
    }
    getErosiak(){
        return this.erosiak;
    }

    erosi(){
        this.erosiak++;
        console.log('globoa erosi da')
        // this.globoErosi();
    }   


    // globoErosi(){
    //     const container = document.getElementById("globoak");
    //     container.innerHTML = "Zenbat globo erosi dituzu? " + this.erosiak;
    // }
    


}

export default Globoa;

