var PLAY = 1;
var END = 0;
var gameState = PLAY;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup(){
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("monk",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,500,900,10)
  ground.velocityX= -5
 ground.x=ground.width/2
  console.log(ground.x)
  
  var survivalTime = 0
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("white")
  
  
  
  if(gameState === PLAY){
    
    stroke("black");
  text(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text ("survivalTime : " + survivalTime,10,50)
    
    if(keyDown("space")){
    monkey.velocityY=-12
  }
    
    if(obstacleGroup.isTouching(monkey)){
    gameState = END
  }
    
     if(ground.x<0){
ground.x=ground.width/2
  }
    monkey.velocityY = monkey.velocityY + 0.8
  
    spawnFood ();
  spawnObstacle();
  
    
  }
  
  if(gameState === END){
    
    ground.velocityX = 0;
      monkey.velocityY = 0
    
    
    
     obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1)
        FoodGroup.setLifetimeEach(-1)

  }
  
  
  monkey.collide(ground)
  
  
  
  
  
  
  drawSprites();

  
}

function spawnFood (){
if( frameCount % 60 === 0){
  var rand = Math.round(random(300,400))
  banana = createSprite(500,rand,20,20)
  
  
  
  banana.velocityX = -6;
  
  banana.addImage(bananaImage)
    banana.scale = 0.1;
  console.log(banana)
banana.lifeTime = 50
   FoodGroup.add(banana);
}

}

function spawnObstacle(){
  if(frameCount % 60===0){
    obstacle = createSprite(380,480,20,20)
     obstacle .velocityX = -6;
    obstacle.addImage(obstaceImage)
obstacle.scale = 0.1;
    obstacleGroup.add(obstacle)
  }
}






