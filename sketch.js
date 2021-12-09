var canvas , backgroundImage;
var gameState = 0 ;
var playerCount ;
var database ;
var form ;
var player ;
var game ;
var allPlayers

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);
  game = new Game();
game.getState();
game.start();
}

function draw(){
  
  
}



