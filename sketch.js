var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Creating various sprites
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.1

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.5

	leftPaneSprite = createSprite(10, 400, 10, 800);
	leftPaneSprite.shapeColor = color(0);

	rightPaneSprite = createSprite(790, 400, 10, 800);
	rightPaneSprite.shapeColor = color(0);

	groundSprite = createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor = color(255)


	//Applying world to engine
	engine = Engine.create();
	world = engine.world;

	//Creating the package
	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true} );
 	World.add(world, ground);
 	boxPosition = width/2-100
 	boxY = 610;

	//creating the red drop-zone
 	boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20, 100, {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase = createSprite(boxPosition+100, boxY+40, 200, 20);
 	boxBase.shapeColor = color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20, {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite = createSprite(boxPosition+200 , boxY, 20, 100);
 	boxrightSprite.shapeColor = color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20, 100, {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
}


function draw() 
{
  	rectMode(CENTER);
	background(0);
	
	packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y 
	
		
	packageSprite.x = helicopterSprite.x;

	
	helicopterSprite.collide(leftPaneSprite);
	helicopterSprite.collide(rightPaneSprite);

	drawSprites();

}





function keyPressed()
{
	if (keyCode === LEFT_ARROW)
	{
		helicopterSprite.x = helicopterSprite.x - 50;
						
	} 

	if (keyCode === RIGHT_ARROW)
	{
		helicopterSprite.x = helicopterSprite.x + 50;
	
	}
	
	if (keyCode === DOWN_ARROW)
	{
		Matter.Body.setStatic(packageBody, false);	
		
	}
	

}
