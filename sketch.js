
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1, pendulum3, pendulum4, pendulum5;
var constraint1, constraint2, constraint3, constraint4, constraint5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	pendulum1 = new Pendulum(250, 600, 60);
	pendulum2 = new Pendulum(310, 600, 60);
	pendulum3 = new Pendulum(370, 600, 60);
	pendulum4 = new Pendulum(430, 600, 60);
	pendulum5 = new Pendulum(490, 600, 60);

	constraint1 = new Constraint1(pendulum1.body, {x:250, y:250});
	constraint2 = new Constraint1(pendulum2.body, {x:310, y:250});
	constraint3 = new Constraint1(pendulum3.body, {x:370, y:250});
	constraint4 = new Constraint1(pendulum4.body, {x:430, y:250});
	constraint5 = new Constraint1(pendulum5.body, {x:490, y:250});


}


function draw() {
  rectMode(CENTER);
  background('red');
  
  drawSprites();

  rectMode(CENTER)
  rect(400, 250, 400, 40);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();

  console.log(pendulum1.body.y);
 
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}




