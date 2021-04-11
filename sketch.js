var player;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10;
var enemyLaserG;
var heroLaserG;
var enemyImg, heroImg, bgImg, bossImg;
var spaceImg;
var enemyG;
var noLevel = 1;
var level;

var gameState = "play";


function preload(){
 enemyImg = loadImage("Images/Enemy.png");
 heroImg = loadImage("Images/Hero.png");
 spaceImg = loadImage("Images/Space.jpg");
 bossImg = loadImage("Images/Boss.png");

}

function setup() {
  createCanvas(1255,555);
  
  enemyG = new Group();
  level  = new Level();

  enemyLaserG = new Group();
  heroLaserG = new Group();

  
  if(noLevel === 1){ 
    level.level1Setup();
   }
  else if(noLevel === 2){
    level.level2Setup();
  }
  else if(noLevel === 3){}
}

function draw() {
  background(spaceImg);  

  if(noLevel === 1){ 
    level.level1Draw();
   }
  else if(noLevel === 2){
    level.level2Setup();
    level.level2Draw();
    
    
  }
  else if(noLevel === 3){}
  

 

  drawSprites();
}