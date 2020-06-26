//< y >

var ball = {
  x: 300,
  y: 200,
  xspeed: -10,
  yspeed: 8
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  display();
  move();
  bounce();
}


function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed; 
}



function bounce(){
  if (ball.x >= width || ball.x <= 0 ){
        ball.xspeed = ball.xspeed * -1;
        fill(random(255), 0, random(255));
      }
  if (ball.y >= height || ball.y <= 0 ){
        ball.yspeed = ball.yspeed * -1;
        fill(random(255), 0, random(255));
      }
}


function display(){
  stroke(random(255), random(255), random(255));
  strokeWeight(3);
  ellipse(ball.x, ball.y,24,24);
}