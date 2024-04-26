function add(x: number, y: number): number {
    return x + y;
}

//타입 추론 가능
let myAdd = add;

let myAdd1 = add(1,2);
//let myAdd1 = add(1,2,3); //오류, 많은 매개변수
//let myAdd1 = add(1); //오류, 적은 매개변수
//let myAdd1 = add(1,null); //오류, null x
//let myAdd1 = add(1,undefined); //오류, undefined x

//? 사용시 undefined 인식 가능
function buildNameV1(firstName: string, lastName?: string){
    return firstName + " " + lastName;
}
let result1 = buildNameV1("jy");
let result2 = buildNameV1("jy","yoon");
let result3 = buildNameV1("jy",undefined);
//let result = buildNameV1("jy",null); //오류, null 사용 불가
console.log(result1)
console.log(result2)

function buildNameV2(firstName: string, lastName = "yoon"){
    return firstName + " " + lastName;
}

let result4 = buildNameV1("jy");
let result5 = buildNameV1("jy","yoon");
let result6 = buildNameV1("jy",undefined);
console.log(result4)
console.log(result6)

function buildNameV3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let myName = buildNameV3("jy","yoon","kim","park");
console.log(myName);


