function test(x: number, y?: number){
    return x + (y ||0);
}

console.log(test(1,2));
console.log(test(1));
console.log(test(1,undefined));
//console.log(test(1,null)); //오류

class C {
    a: number;
    b?: number;
}

let c = new C();
c.a = 12;
c.b = undefined;


