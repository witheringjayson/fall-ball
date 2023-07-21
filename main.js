let score = 0;
let ballArray = [];
//Prints balls on screen
function setup() {
   createCanvas(500, 500);
    
   for (let i = 0; i < 100; i++) {
       let temp = new Ball(random(0, 500), 250, random(0 , 255), random(0 , 255), random(0 , 255), random(2, 5));
       ballArray.push(temp);
      
   }
}

// Randomizes ball color and controls score function
function draw() {
   background(0);


   for (let i = 0; i < ballArray.length; i++) {
       fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
       ellipse(ballArray[i].xPos, ballArray[i].yPos, 50, 50);


       ballArray[i].yPos += ballArray[i].speedValue;


       if (ballArray[i].yPos > 525) {
           ballArray[i].yPos = -25;
           score -= 1;
       }
   }
   fill(255)
   textSize(20);
   text("Score " + score, 10, 30)
}

function mouseClicked(){
  for (let i = 0; i < ballArray.length; i++) {
    let d = dist(mouseX, mouseY, ballArray[i].xPos, ballArray[i].yPos);
    if (d < 25) {
      score += 1; 
      ballArray[i].yPos = random(-500, 0)
    }
  }
}

class Ball {
   constructor(x, y, r, g, b, speed) {
       this.xPos = x;
       this.yPos = y;
       this.redValue = r;
       this.greenValue = g;
       this.blueValue = b;
       this.speedValue = speed;
   }
}

