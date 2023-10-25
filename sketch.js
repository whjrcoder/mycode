const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball
var world;
var engine
function preload(){
bgimg = loadImage("bowling-lane2.png")
ballimg = loadImage("bowlingball.png")
var balls=[]
}


function setup() {
	createCanvas(1200,600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	//angle=44

	Engine.run(engine);
	
	pin1 = new Pins(750,270,60)
	pin2 = new Pins(770,260,60)
	pin3 = new Pins(1635,420,120)
	pin4 = new Pins(1685,400,80)
	pin5 = new Pins(1685,430,80)
	pin6 = new Pins(1685,460,80)
	pin7 = new Pins(1685,490,80)
	pin8 = new Pins(1685,520,80)
	// cons=new Slingshot(ball.body,{x:230,y:270})
	// arrow= new Arrow(150, 270, 100, 50, angle);
	ball = new Ball(170,270)
}


function draw() {
	
	background("white");
	imageMode(CENTER)
	image(bgimg,600,300,1200,600)
	rectMode(CENTER);
	
	
	
	pin1.display();
	pin2.display();
	pin3.display();
	pin4.display();
	pin5.display();
	pin6.display();
	pin7.display();
	pin8.display();
	// arrow.display();
	ball.display()
	detectollision(ball,pin1);
	detectollision(ball,pin2);

	

}



function keyPressed(){
	
		if (keyCode === RIGHT_ARROW) {

			ball.shoot()
		}
		 
		  
		 
		}





function detectollision(lball,lpin){

	pinBodyPosition=lpin.body.position
	ballBodyPosition=lball.body.position
	
	var distance=dist(ballBodyPosition.x, ballBodyPosition.y, pinBodyPosition.x, pinBodyPosition.y)
		if(distance<=lpin.r+lball.r+20)
	  {
		
		  Matter.Body.setStatic(lpin.body,false);
		  
	  }
	}