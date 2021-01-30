var bullet;
var wall;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
speed = random (223,321);
weight = random (30,52);

thickness = random (22,83);

bullet = createSprite (50,200,50,5);
bullet.velocityX = speed;
bullet.shapeColor = "white";

wall = createSprite (1200,200,thickness,height/2);
wall.shapeColor = (80,80,80);



}

function draw() {
  background("gray");  
  
if(isTouching(bullet,wall)){
   bullet.velocityX = 0;
   var damage = (0.5 * weight * speed * speed)/ (thickness * thickness * thickness);

          if(damage < 10){
          wall.shapeColor = "green";
        }

          if(damage>10 || damage === 10){
          wall.shapeColor = "red";
        }
    
    
        }
 
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  //making the function return a boolean value
      return true;
}
else {
  return false;
}
}