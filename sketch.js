var car,wall;
var speed,weight;

function setup() {
  createCanvas(1500,500);
  car = createSprite(200, 200, 50, 50);
  wall = createSprite(1200,200,60,100);

  

  speed=random(45,90);
  car.velocityX = speed;
  weight=random(400,1500);

}

function draw() {
  background("white");
  
  if(wall.x - car.x < (car.width + wall.width)/2)
    {
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed* speed/22509;
      if(deformation > 180)
      {
         car.shapeColor = "yellow";
       }
       if(deformation < 180 && deformation > 100)
     {
        car.shapeColor = "green";
      }
      if(deformation < 100)
      {
       car.shapeColor = "red";
      }
    }
    console.log(deformation)
  drawSprites();
  text(deformation,100,100);
}
