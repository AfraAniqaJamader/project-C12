var player,player_img;
var road,road_img;
var boundary1;
var boundary2;

function preload(){
  //pre-load images  

  player_img = loadAnimation("Runner-1.png","Runner-2.png") 

  road_img = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
 

  //create path sprite
  road = createSprite(200,200,400,400)
  road.addImage("path",road_img)
  road.scale = 1.2
  road.velocityY=4;

  //create player sprite
  player = createSprite(200,360,20,50)
  player.addAnimation("running",player_img)
  player.scale=0.05

  boundary1 = createSprite(20,200,20,400)
  boundary1.visible = false;
 
  boundary2 = createSprite(380,200,20,400)
  boundary2.visible = false;

}

function draw() {
  background("black");

  if(keyWentDown(RIGHT_ARROW)){
    player.x = player.x+20;
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.x = player.x+0;
  }
  if(keyWentDown(LEFT_ARROW)){
    player.x = player.x-20;
  }
  if(keyWentUp(LEFT_ARROW)){
    player.x = player.x-0;
  }

  player.collide(boundary1);
  player.collide(boundary2);


  if(road.y>400){
    road.y=height/2;
  }

  drawSprites();

}
