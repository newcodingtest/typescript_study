interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearchV1: SearchFunc;
mySearchV1 = function(source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
}

//매개변수 이름 다르게 가능
let mySearchV2: SearchFunc;
mySearchV2 = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

//타입 추론 가능
let mySearchV3: SearchFunc;
mySearchV3 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}






