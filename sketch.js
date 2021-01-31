var canvas;
var music;
var red;
var blue;
var green;
var yellow;
var box;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    red = createSprite (50, 550, 220, 40);
    blue = createSprite (250, 550, 220, 40);
    yellow = createSprite (500,550, 220, 40);
    green = createSprite (750,550, 220, 40);
    box = createSprite (200, 400, 20, 20);
    box.velocityX = 4;
    box.velocityY = -2;
    //create box sprite and give velocity
    red.shapeColor = "red";
    blue.shapeColor = "blue";
    yellow.shapeColor = "yellow";
    green.shapeColor = "green";
    
}

function draw() {
    background ("lightblue");
    //create edgeSprite
    var edges = createEdgeSprites();
    
   box.bounceOff(edges);
    
    if(box.isTouching(red)){
        box.bounceOff(red);
        box.shapeColor = "red";
    }
    if(box.isTouching(blue)){
        box.bounceOff(blue);
        box.shapeColor = "blue";
    }
    if(box.isTouching(yellow)){
        box.bounceOff(yellow);
        box.shapeColor = "yellow";
    }
    if(box.isTouching(green)){
        box.bounceOff(green);
        box.shapeColor = "green";
    }
drawSprites();
    //add condition to check if box touching surface and make it box
}

