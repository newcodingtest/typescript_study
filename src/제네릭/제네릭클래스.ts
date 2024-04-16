class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){return x+y;};

console.log(myGenericNumber.add(myGenericNumber.zeroValue,10));

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "one";
myGenericString.add = function(x,y){return x+y;};

console.log(myGenericString.add(myGenericString.zeroValue,"test"));