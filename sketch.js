const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;
var ground;
var box1, box2;


function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(390,100,50,100);
 box2 = new Box (400,170,50,100)
ground = new Ground(600,780,1200,20)
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}