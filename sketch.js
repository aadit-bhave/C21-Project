
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.3,
		density:1,
	}

	Engine.run(engine);

	 ball = Bodies.circle(10,570,15, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2,670,width,20);
	
	leftSide = new Ground(1300,600,10,120);
	rightSide = new Ground(1500,600,10,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill ("yellow");
  groundObj.display()

  fill ("yellow");
	leftSide.display()

	fill ("yellow");
	rightSide.display()

	
  ellipse(ball.position.x, ball.position.y, 15,15);
	//rect(groundObj.position.x, groundObj.position.y, groundObj.width, groundObj.height);
	//rect(leftSide.position.x, leftSide.position.y, leftSide.width, leftSide.height);

  drawSprites();

  
}





function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:1, y:-1})
	}
}
