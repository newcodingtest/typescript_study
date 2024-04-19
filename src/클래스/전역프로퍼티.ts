class Person {
    static _fullname: string = "윤주영";
    
    speak():string{
        return Person._fullname;
    }
}

let person = new Person();
console.log(person.speak());