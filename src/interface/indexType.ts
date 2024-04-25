/**
 * 함수 형식의 인터페이스에서 인덱스를 사용하는 방법
 */

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["yjy", "kjj"];

let myStr: string = myArray[0];

console.log(myStr);


interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;    // 성공, length는 숫자입니다
    name: string;      // 성공, name은 문자열입니다
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 성공, length는 숫자입니다
 ///  name: string;      // 오류, `name`의 타입은 인덱서의 하위타입이 아닙니다
}



//읽기 전용
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let readOnlyMyArr: ReadonlyStringArray = ["Alice", "Bob"];
// readOnlyMyArr[2] = "Mallory"; // 오류!
