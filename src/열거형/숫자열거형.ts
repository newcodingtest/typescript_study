/**
 * 시작 인덱스는 기본적으로 0, 또는 지정된 인덱스 부터
 */
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
enum DirectionV1 {
    Up,
    Down,
    Left,
    Right,
}

function response(message: string, direction: Direction){
    console.log(`${message}:::${direction}`);
}
function responseV1(message: string, direction: DirectionV1){
    console.log(`${message}:::${direction}`);
}

response("test", Direction.Up);
responseV1("test", DirectionV1.Up);