var car,wall;
var speed,weight;

function setup(){
  creatCanvas(1600,400);
  speed=random(22,25);
  weight=random(400,1500);

  car=creatSprit()
    car.velocityX=speed;

    wall=creatSprit(1500,200,60,hight/2);
    wall.shapeColoer(80,80,80);

}

function draw(){
  
}