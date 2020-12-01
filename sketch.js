function setup(){


createCanvas(400,400);
 
bullet= createSprite( 394,140,20,2)
bullet.shapeColor = 'black';
bullet.velocityX = -20 

wall  = createSprite(6,140,20,100)
wall.shapeColor = 'yellow'

}

function draw() {
  background('white');  
  if(bullet.x-wall.x<(bullet.width/3+wall.width/2)){
  wall.shapeColor = 'brown'
bullet.shapeColor = 'blue'  
bullet.velocityX = 0
}
  else{
    wall.shapColor = 'yellow'
    bullet.shapeColor = 'black'
   
  }
  drawSprites();
}
