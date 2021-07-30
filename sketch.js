const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower
var ground

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    tower = new Tower(100,200,160,300);
    ground = new Ground(600,100,200,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    tower.display();
    ground.display();
}
