 
let square = {
    x1: 0,
    x2: parseInt(prompt("Input final x coordinate")),
    y1: 0,
    y2: parseInt(prompt("Input final y coordinate"))
}

let rover = {
    x: 1,
    y: 1,
    direction: "N" // N S E W
}

function roverCoordinates() {
    alert(`The rover's x coordinate is ${rover.x} and the y coordinate is ${rover.y} 
    and it's facing ${rover.direction}`)    
}

function changeDirection() {
    const newDirection = prompt("New direction").toUpperCase(); // N S E W

    if (newDirection == 'N' || 
    newDirection == "S" || 
    newDirection == "E" || 
    newDirection == "W") {
    
        rover.direction = newDirection;
    }
}

function moveForward() {
    switch (rover.direction) {
        case "N":
            rover.y++;
            break;
        case "S":
            rover.y--;
            break;
        case "E":
            rover.x++;
            break;
        case "W":
            rover.x--;
            break;
    
        default:
            alert("Something's wrong");
            break;
    }
    checkSquare();
}

function checkSquare() {
    if (rover.x == square.x1 || rover.x == square.x2){
        alert(`You lost the rover`);
    }

    if (rover.y == square.y1 || rover.x == square.y2){
        alert(`You lost the rover`);
    }
}

console.log("nice boobies");
