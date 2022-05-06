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

const ninja1 = new Ninja("Jhomar", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();