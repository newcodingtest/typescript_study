/***
 * 클래스 생성 방법
 * 
 */
class Greater {
    gretting: string;
    constructor(message: string){
        this.gretting = message;
    }
    greet(){
        return "Hello, " + this.gretting;
    }
}

let greater = new Greater("world");

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

/**
 * private & protected 지정자
 */
class AnimalV3 {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}
//new AnimalV3("test").name; //오류, name은 private로 비공개

class Gorani extends AnimalV3 {
    constructor(){
        super("gorani");
    }
}

class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let animalV3 = new AnimalV3("ingkey");
let gorani = new Gorani();
let person = new Person("yjy");

animalV3 = gorani;
console.log(animalV3);
//animalV3 = person; //오류, 서로 다른 타입이므로 호환되지 않음, protected도 이와 동일





/**
 * 읽기 전용 지정자
 */

class Cat {
    readonly name: string;
    readonly age: number = 1;
    constructor(name: string){
        this.name = name;
    }
}

let cat = new Cat("ingkey");
//cat.name = "test"; //오류, 읽기 전용
