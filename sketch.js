var dog,sadDog,happyDog;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}




function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  database = firebase.database();
 game= new Game();
  game.getState();
game.start();
  

}

function draw() {
  background(46,139,87);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();}

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
