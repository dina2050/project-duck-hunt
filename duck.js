var gameArea = document.createElement("div");
document.body.appendChild(gameArea);
gameArea.id = "gameArea"


var posX = 0;
var posY = 0;
for(let i=0; i<10;i++){
    var duck = document.createElement("div");
    gameArea.appendChild(duck)
    duck.className="duck"
    duck.id = i
  
    
}

setInterval(wow,1000)

function wow() {

    posX = Math.random() * 450
    posY = Math.random() * 450
    duck.style.top = posY + "px";
    duck.style.left = posX + "px";
    duck.style.transitionDuration = "1s"
}


function killduck(event) {
    this.remove();

    duck = document.createElement("div");
    gameArea.appendChild(duck)
    gameArea.id = "gameArea"
    duck.id = "duck"
    duck.addEventListener("click", killduck);
}


duck.addEventListener("click", killduck);
