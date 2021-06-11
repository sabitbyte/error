var trex, trex_running, edges;
var groundImage;
var ground
var invisground
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
//creating invisible ground

invisground=createSprite(300,195,600,10)
invisground.visible=false


  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  // creating ground
 ground = createSprite(300,190,600,10)
  ground.addAnimation("ground",groundImage)
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  

}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisground)

ground.velocityX=-6;

if (ground.x<0){
  ground.x=ground.width/2
}




  drawSprites();
}