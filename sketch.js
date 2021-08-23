var pathImage;
var path;
var boundary1,boundary2;
var jaxon,runnerAnim;
function preload(){

  //pre-load images
  pathImage=loadImage("path.png");
  runnerAnim = loadAnimation("runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  boundary1 = createSprite(10,300,60,300);
  boundary2 = createSprite(385,300,60,300);
  jaxon = createSprite(200,350,50,50)
  jaxon.addAnimation("running",runnerAnim);
  jaxon.scale = 0.05;
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 10;
  path.scale = 1.3;



}

function draw() {
  background(0);
  
  jaxon.x = mouseX;
  jaxon.depth = path.depth;
  jaxon.depth++;
  if(path.y > 400){
    path.y = -50;
  }
  jaxon.collide(boundary2);
  jaxon.collide(boundary1);
  
  boundary1.visible = false;
  boundary2.visible = false;

  drawSprites();
}

