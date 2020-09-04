var car, wall;
var light, speed;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 100, 30, 20);
  car.shapeColor = "white";

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  wall = createSprite(750, 100, 20, 100);
  wall.shapeColor = "skyblue";

  car.velocityX = speed;
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180){
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230, 230, 0)
    }
    if(deformation < 100){
      car.shapeColor = color(0, 250, 0);
    }
  }
  drawSprites();
}