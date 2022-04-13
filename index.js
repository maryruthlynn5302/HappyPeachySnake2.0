// get canvas also define a const
const canvas = document.getElementById('peachysnake');
//context from canvas, only need to use 2d
const ctx = canvas.getContext('2d')


// I am making a start button here... I didn't think about it much until just now, its long becuase you can use it 
// to start and stop. 


var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", Start);
// This is my start game button, it does show up nicely on my page and does start but 
// for some reason won't make the snak stop when you click stop. 
function Start(){
    console.log("Started");
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
}
// this is the function for the stop button, like I said it does not work :/
function Stop(){
    console.log("Stopped");
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
}

// first always set up the game loop with a function to always update the screen
// also have to define how fast this snake will go, but as it grows longer, speed will increase
let mpg = 5; // updating a screen 5 times a second 
//this is how many cubes there chould be across and vertically on the board 
let cubeSpacing = 20; 
//this is how the canvas width goes with the spacing. !!!!!!! I think I just dont quite have the size of the board correct. 
let cubeSize = canvas.width / cubeSpacing - 2;
//snake A and B are points of where the snake starts and ends 
let snakeA = 10;
let snakeB = 10; 
// peach x and y is where the peach moves across the board 
let peachX = 5;
let peachY = 5;



let xVelocity = 0; 
let yVelocity = 0; 


// this is my big function that encompasses all the little functions and where I declare them 
function writeSnake(){
    // function refreshBoard to refresh the game board
    refreshBoard();
    createSnake();
    createPeach();
    checkPeachCrash();
    alterSnakeLocation();
    
    
// call out setTimeOut to give it the mpg or speed within the function, push writeSnake into setTimeOut 
//writeSnake takes in milliseconds 
setTimeout(writeSnake, 1000/ mpg);
}
//my refresh board is refrshing five times per second 
function refreshBoard(){
    ctx.fillStyle = '#e4a53a';
    ctx.fillRect(0,0,canvas.clientWidth, canvas.height);
}

//this is the function for my green snake color, width, size
function createSnake(){
    ctx.fillStyle = 'green';
    ctx.fillRect(snakeA * cubeSpacing, snakeB * cubeSpacing, cubeSize, cubeSize)

}

//this is the function for my peach color, size, width 
function createPeach(){
    ctx.fillStyle = '#ff6900'
    ctx.fillRect(peachX *cubeSpacing, peachY* cubeSpacing, cubeSize, cubeSize)
}


//!!!!!! This function is supposed to be when the snake eats the peach it will go away but 
// it is not working like it should 
function checkPeachCrash(){
    if(peachX === snakeA && peachY == snakeB){
        peachX = Math.floor(Math.random() * cubeSpacing)
        peachy = Math.floor(Math.random() * cubeSpacing)
    }
}



// this is to change the snake direction which does work 
function alterSnakeLocation(){
    snakeA = snakeA + xVelocity;
    snakeB = snakeB + yVelocity;
}


document.body.addEventListener("keydown", keyDown);
//this function is for the up down keft and right keys which are all fine and work. 
function keyDown(event){
    //up 
    if(event.keyCode == 38){
        if(yVelocity == 1)
        return; 
        yVelocity = -1;
        xVelocity = 0; 
    }

    //down 
    if(event.keyCode == 40){
        if(yVelocity == -1)
        return; 
        yVelocity = 1;
        xVelocity = 0; 
    }
    
 //left
 if(event.keyCode == 37){
    if(xVelocity == 1)
    return; 
    yVelocity = 0;
    xVelocity = -1; 
}

 //right 
 if(event.keyCode == 39){
    if(xVelocity == -1)
    return; 
    yVelocity = 0;
    xVelocity = 1; 
}







}



writeSnake();
