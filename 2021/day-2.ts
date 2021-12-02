export const getPosition = (positions: string[]) => {
    let horizontalPosition = 0;
    let depth = 0;
    positions.forEach(position => {
        const [direction, amount] = position.split(' ');
        if (direction === Direction.FORWARD) {
            horizontalPosition += Number(amount)
        } else if (direction === Direction.DOWN) {
            depth += Number(amount)
        } else if (direction === Direction.UP) {
            depth -= Number(amount)
        }
    });
    return horizontalPosition * depth;
}

export const getPositionWithAim = (positions: string[]) => {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    positions.forEach(position => {
        const [direction, amount] = position.split(' ');
        if (direction === Direction.FORWARD) {
            horizontalPosition += Number(amount);
            depth += aim * Number(amount);
        } else if (direction === Direction.DOWN) {
            aim += Number(amount);
        } else if (direction === Direction.UP) {
            aim -= Number(amount);
        }
    });
    return horizontalPosition * depth;
}

enum Direction {
    FORWARD = 'forward',
    DOWN = 'down',
    UP = 'up'
}
