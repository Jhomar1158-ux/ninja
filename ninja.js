
class Ninja{
    constructor(nombre, salud){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log(`El ninja se llama: ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad} y Salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud+=10;
    }
}



class Sensei extends Ninja{
    constructor(nombre){
        super(nombre,200)
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Obtuviste más salud!")
    }
}

const ninja1 = new Ninja("Jhomar", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Elias")
superSensei.speakWisdom();
superSensei.showStats();