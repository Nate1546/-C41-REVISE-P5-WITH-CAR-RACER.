var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

//var x=175;
var form, player, game;
var health = 50;
var lives = 5; 

var car5, car1, car2, car3, car4;
var cars = [];
var track, car5_img, car1_img, car2_img, car3_img, car4_img;

cars = [car1,car2,car3,car4,car5];

function preload(){
  track = loadImage("images/track.jpg");
  track.scale = 0.1;
  car_img =  loadImage("images/car.png");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  car5_img = loadImage("images/car.png");
  ground = loadImage("images/ground.png");
}

function setup(){
   canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

   gameState === 1;

function draw(){
  if(playerCount === 1){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  if (health<5){ 
    lives = lives - 1;
    health = 50;
    player.updateCount(1);
    game.update(1);
    
  }

}
