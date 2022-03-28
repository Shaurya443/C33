const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg
var snow1
var world
var penguinImg, penguin


function preload(){
bgImg = loadImage("bg.png")
penguinImg = loadAnimation("penguin1.png","penguin2.png")
snow_Img = loadImage("snow1.png")
}

function setup() {
  penguin = createSprite(200,600,50,50)
 penguin.addAnimation("penguinWalk",penguinImg)
 penguin.scale = 1.0
 
  createCanvas(900,700)
  engine = Engine.create();
  world = engine.world;



 
 
   
}
function draw(){
background(bgImg)
Engine.update(engine);

if(frameCount % 60 === 0){
  snow=createSprite(900,0,40,10)
snow.x = Math.round(random(900,0));
   snow.addImage("snowFalling",snow_Img)
    snow.scale = 0.1;
  snow.velocityY = 3
    snow.lifetime=134
  }



drawSprites();

}

