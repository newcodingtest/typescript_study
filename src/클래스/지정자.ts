

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
