var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  //speed & weight
  speed = random(55,90);
  weight=random(400,1500);
  //car
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  //wall
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(255,255,255);
  console.log(deformation);
  if(car.isTouching(wall)) {
    deformation = (weight*speed*speed*0.5)/22500;
    colorChoice();
  }
  
  drawSprites();
}
function colorChoice() {
  if(deformation <= 100) {
    deformationV = 1;
    car.velocityX = 0;
    car.x = 50;
  }
  if(100 < deformation < 180) {
    deformationV = 2;
    car.velocityX = 0;
    car.x = 50;
  }
  if(deformation > 180) {
    deformationV = 3;
    car.velocityX = 0;
    car.x = 50;
  }
  switch (deformationV) {
    case 1:
      car.shapeColor = "green";
      break;
    case 2:
      car.shapeColor = "yellow";
      break;
    case 3:
      car.shapeColor = "red";
      break;
      default:
        car.shapeColor = "yellow";
        break;
  }


}