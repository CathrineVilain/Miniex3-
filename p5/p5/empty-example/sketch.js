
var cat;
var meow;
var x = 0;
var speed = 4;
function preload() {
  cat = loadImage ('Flowers/cat.jpeg')
  //meow = loadSound('meow.mp3')
}

function setup() {
  // put setup code here
  createCanvas(1000,500);


}

function draw() {
  // put drawing code here
  background('#fae')
image(cat,x,90,350)
if (x > 770){
  speed = -4;
}
x = x + speed ;

if (x < -100){
  speed = +4;
}
}
//if catx === 1400 speed -1
//else ...
//if catx === 0 speed +1
//if catx === 0 reSizeimage 150, 100

//Mousepressed() {
  //meow.setVolume(0.1);
  //meow.play();
