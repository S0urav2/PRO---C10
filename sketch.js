var seaImg,shipImg1 

function preload()
{
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png")
}

function setup(){
  createCanvas(1000,800);
  
    sea = createSprite(1000,300);
    sea.addImage(seaImg)

    ship = createSprite(500,400);
    ship.addAnimation("ship", shipImg1)
}

function draw() {
  background(255);

  sea.velocityX = -2




    if(sea.x < 0){
      sea.x = sea.width/2;
    }





  drawSprites()
 
}