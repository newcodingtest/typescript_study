
/**
 * 접근자 사용시에는 
 * ECMAScript 5 이상을 출력하도록 컴파일러를 설정
 */
class Person {
    private _fullName: string;

    get fullName():string {
        return this._fullName;
    }

    set fullName(name: string){
        this._fullName = name;
    }
}

let person = new Person();
person.fullName = "yjy";
console.log(person.fullName);