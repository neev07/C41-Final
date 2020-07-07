var drops = [];
var BWU,BWU_img;

function preload(){
  BWU_img = loadImage("BWU.jpg");
}

function setup() {
  createCanvas(640, 2060);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  BWU = createSprite(320,1650,10,10);
  BWU.addImage("BWU",BWU_img);
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
  drawSprites();
}