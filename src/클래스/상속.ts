/**
 * 상속(간단)
 */

class Animal {
    name: string;
    move(distanceInMeters: number = 0) {
        console.log(`Animal moves ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log("Waar! Waar!");
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

/**
 * 상속(복잡)
 */
class AnimalV1 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends AnimalV1 {
    constructor(name: string) {
        super(name);
    }
    //오버라이딩
    move(distanceInMeters = 5): void {
        console.log("sliping");
        super.move(distanceInMeters);
    }
}

let snk = new Snake("my lovely python");
snk.move();
snk.move(10);