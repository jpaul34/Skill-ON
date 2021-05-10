class SquareAnimation {

    constructor(direction, side) {
        this.numberOfLaps = 0;
        this.speed = 0.5;
        this.animateSquare(direction, side);
    }

    animateSquare(direction, side) {
        var square = document.getElementById("squareBox")
        this.moveSquare(square, side, direction); 
    }

    moveSquare(square, side, direction) {
        let screenWidth = window.innerWidth - 51;
        let screenHeight = window.innerHeight - 50;
        switch (side) {
            case 1:
                direction == 1 ? this.moveSquareAxisPlusX(square, 0, screenWidth, side, direction)
                                : this.moveSquareAxisLessX(square, screenWidth, side, direction)
                break;
        
            case 2:
                direction == 1 ? this.moveSquareAxisPlusY(square, 0, screenHeight, side, direction)
                                : this.moveSquareAxisLessY(square, screenHeight, side, direction);
                break;

            case 3:
                direction == 1 ? this.moveSquareAxisLessX(square, screenWidth, side, direction)
                                : this.moveSquareAxisPlusX(square, 0, screenWidth, side, direction);
                break;

            case 4:          
                direction == 1 ? this.moveSquareAxisLessY(square, screenHeight, side, direction)
                                : this.moveSquareAxisPlusY(square, 0, screenHeight, side, direction);
                break;
                                
            default:
                this.numberOfLaps++;
                this.printNumberLap();
                side = this.numberOfLaps >= 3 ? 4 : 1;
                direction = this.numberOfLaps >= 3 ? -1 : 1;
                this.numberOfLaps >= 6 ? this.sowPopup()
                                        : this.animateSquare(direction, side);
                break;
        }
    }

    printNumberLap() {
        console.log('Vuelta N°: ' + this.numberOfLaps);
    }

    sowPopup() {
        let popup = document.getElementById("cyclePopup");
        popup.style.visibility = 'visible';
    }

    moveSquareAxisPlusX(square, positionX, maxPositionX, side, direction) {
        let animationAxisPlusX = setInterval(
            () => {
                if (positionX <= maxPositionX) {
                    positionX++;
                    square.style.left = positionX + 'px';
                } else {
                    clearInterval(animationAxisPlusX);
                    side += direction;
                    this.moveSquare(square, side, direction);
                }
            },
            this.speed
        );
    }

    moveSquareAxisPlusY(square, positionY, maxPositionY, side, direction){
        let animationAxisPlusY = setInterval(
            () => {
                if (positionY < maxPositionY) {
                    positionY++;
                    square.style.top = positionY + 'px';
                } else {
                    clearInterval(animationAxisPlusY);
                    side += direction;
                    this.moveSquare(square, side, direction);
                }
            },
            this.speed
        );
    }

    moveSquareAxisLessX(square, positionX, side, direction){
        let animationAxisLessX = setInterval(
            () => {
                if (positionX >= 0) {
                    positionX--;
                    square.style.left = positionX + 'px';
                } else {
                    clearInterval(animationAxisLessX);
                    side += direction;
                    this.moveSquare(square, side, direction);
                }
            },
            this.speed
        );
    }

    moveSquareAxisLessY(square, positionY, side, direction){
        let animationAxisLessY = setInterval(
            () => {
                if (positionY >= 0) {
                    positionY--;
                    square.style.top = positionY + 'px';
                } else {
                    clearInterval(animationAxisLessY);
                    side += direction;
                    this.moveSquare(square, side, direction);
                }
            },
            this.speed
        );
    }

}

let squareAnimation = new SquareAnimation(1, 1);
