abstract class Person {
    constructor(public name: string){

    }

    printName(): void {
        console.log(`Person name is ${this.name}`);
    }

    abstract doSomething(): void;
}

class AngryPerson extends Person {
    constructor(){
        super("윤주영");
    }

    doSomething(): void {
       console.log("fuck!!, i'm angry!");
    }

    kick(): void {
        console.log("kick your face!");
    }
}

let person: Person; //추상 타입 래퍼런스 생성
//person = new Person(); //오류, 추상 클래스는 인스턴스화 불가.
person = new AngryPerson();
person.printName();
person.doSomething();
//person.kick(); //오류, 상위 추상 타입에 정의되지 않은 메서드