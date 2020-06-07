

var gameState = 0;
var player,playerimg;
var track;
var carImg1,carImg2,carimg3,carImg4,carImg45;
var car,rand;
var carsGroup;
var invisiblegr,invisiblegr2;
var score = 0;
var posY = -5000,posX = -500

function preload(){
  playerimg = loadImage("images/police1.png");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car1.png");
  carImg3 = loadImage("images/car1.png");
  carImg4 = loadImage("images/car1.png");
  carImg5 = loadImage("images/car1.png");
  track = loadImage("images/track2.jpg");
  
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight-170);

  player = createSprite(displayWidth/2+100,1200,40,40);
  player.addImage(playerimg);
  player.scale = 1;
  invisiblegr = createSprite(198,displayHeight/2,40,displayHeight*8);
  invisiblegr2 = createSprite(1260,displayHeight/2,40,displayHeight*8);
   carsGroup = new Group();
 
}

function draw(){
background("white");
  image(track, 0,-displayHeight*6,displayWidth-10, displayHeight*9);
  camera.position.x = displayWidth/2;
  camera.position.y = player.y-100; 
  fill("brown");
  noStroke();
  textSize(30);
  text("Your Score: "+ score,190,player.y-200);
  if(gameState === 0){
    player.velocityY = 0
   text("press the space key to start the game",displayWidth/2,200);
    invisiblegr.visible = false;
  invisiblegr2.visible = false;
  player.collide(invisiblegr);
  player.collide(invisiblegr2);
  player.scale = 0.6
  
  if(keyDown("space")){
    gameState = 1
  }
}
 else if(gameState===1){
  if(keyDown(LEFT_ARROW)){
    player.x -= 17;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 17;
  } 
  
      if(frameCount%20===0){
        rand = random(700,1000);
        car = createSprite(rand,player.y-2000,30,30);
        carsGroup.velocityYEach= 10;
        player.velocityY = -20;
      car.collide(invisiblegr);
      car.collide(invisiblegr2);
       var carswap = Math.round(random(1,5));
      switch(carswap) {
        case 1: car.addImage(carImg1);
                break;
        case 2: car.addImage(carImg2);
                break;
        case 3: car.addImage(carImg3);
                break;
        case 4: car.addImage(carImg4);
                break;
        case 5: car.addImage(carImg5);
                break;
        default: break;
      }
     
      carsGroup.scale = 0.5;
     
      carsGroup.add(car);
     /* if(player.isTouching(carsGroup)||player.y===-4400){
        gameState = 2;
             
 }*/
    } 
  }
  
     if(gameState===2){
      player.destroy();
      carsGroup.destroyEach();

    }
  
    


  drawSprites();
}