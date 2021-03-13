
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var dustbin,dustbinImage;
var log1,log2,log3;

function preload()
{
		dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,570,width,20);
	
	dustbin=createSprite(1200,443);
	dustbin.addImage(dustbinImage);
    dustbin.scale = 0.7;
	
	log1=new Dustbin(1200,550,150,20);
	log2=new Dustbin(1130,440,20,200);
	log3=new Dustbin(1275,440,20,200)
	
	paperBall = new Paper(200,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

 
  ground.display();
  paperBall.display();
  log1.display();
  log2.display();
  log3.display();
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:120,y:-120})
	}
}



