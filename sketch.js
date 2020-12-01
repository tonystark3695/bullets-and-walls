var  but,wall,speed,weight,thickness

function setup() {
  createCanvas(1200,400);
  speed=random(223,321)
  weight=random(400,1500)
  thickness=random(22,83)
  but=createSprite(50,200,20,5)
  wall=createSprite(1200,200,thickness,height/2)
  but.velocityX = map(speed,223,321,10,30)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  drawSprites();


  if(wall.x-but.x <=(but.width+wall.width)/2)
  {
but.velocityX=0
var deformation =0.5* weight* speed* speed/22509

if(deformation>500)
{
  wall.shapeColor=("red")
}


if(deformation<100)
{
  wall.shapeColor=("green")
}
  }
}
