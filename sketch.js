
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof = new Ground(400, 100, 1200, 30);
	 bob1 = new Bob(200,400,100);
	 bob2 = new Bob(300,400,100);
	 bob3 = new Bob(400,400,100);
	 bob4 = new Bob(500,400,100);
	 bob5 = new Bob(600,400,100);

	 rope1= new Rope(bob1.body,roof.body,-bob1.r*2,0);
	 rope2= new Rope(bob2.body,roof.body,-bob2.r,0);
	 rope3 = new Rope(bob3.body,roof.body,0,0);
	 rope4 = new Rope(bob4.body,roof.body,bob4.r,0);
	 rope5 = new Rope(bob5.body,roof.body,bob5.r*2,0);
	Engine.run(engine);
  
}




function draw() {
  background(255,233,255);
  rectMode(CENTER);
  Engine.update(engine);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		console.log("hello world")
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-3045,y:174});
	}
}



