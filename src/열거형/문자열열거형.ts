enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

function response(message: string, direction: Direction){
    console.log(`${message}:::${direction}`);
}

response("test", Direction.Up);