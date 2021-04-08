let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 31;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let highScore = 1;
function score(){
 let score = document.querySelector("#highScore").innerHTML = highScore++;
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 18 + 1) * box
}


function criarBG(){
    context.fillStyle = "#ABC4A8";
    context.fillRect (0, 0, 29 * box, 50 * box);
}


function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "#D9DAD2";
        context.fillRect(snake[i].x, snake[i].y, box, box );
    }
}

function drawfood() {
    context.fillStyle = "#E88076"
    context.fillRect (food.x, food.y, box, box);
    
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
        
    if(event.keyCode == 38 && direction != "down") direction = "up";
        
    if(event.keyCode == 39 && direction != "left") direction = "right";
        
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
  

    if(snake[0].x > 22 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 23 * box;
    if(snake[0].y > 18 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 19 * box;

   
   for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo);
      alert('iiiiiruuu acabou jogo tente novamente');
    }
}
   
    criarBG();
    criarCobrinha();
    drawfood();

    let snakey = snake[0].y;
    let snakex = snake[0].x;

    if (direction =="right") snakex += box;
    if (direction =="left") snakex -= box;
    if (direction =="up") snakey -= box;
    if (direction =="down") snakey += box;
       
    if(snakex != food.x || snakey != food.y) {
        snake.pop();

    }
    else{food.x = Math.floor(Math.random() * 17 + 1) * box;
         food.y = Math.floor(Math.random() * 18 + 1) * box;
         score();
    }
let newHead = 
{
    x: snakex,
    y: snakey
 }

 snake.unshift(newHead);

}



let jogo  = setInterval(iniciarJogo, 100);



