let circleX = 0; //x position for circle 
let circleRed = 0;
let xpos = 0;
let ypos = 0;
let circleSize = 0;
let img;
let a = 80;
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

function preload() {
    img = loadImage('tree.jpeg');
    img2 = loadImage("green.jpeg");
    img3 = loadImage('sad2.png');
    img5 = loadImage('flower.jpeg');
    img6 = loadImage('dark.jpeg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100, 100, 0); 
    background(208, 227, 197);
    image(img, 40, 155, windowWidth /3.5, windowHeight / 5);
    
    image(img5, 220, 155, windowWidth /3.5, windowHeight / 5);
  image(img6, 399, 155, windowWidth / 3.5, windowHeight / 5);
  image(img2, 0, 0, windowWidth, windowHeight);
   
  noStroke();
    rectMode(CENTER); 
}

function draw() {
 
  circleRed = map(mouseX, 0, width, 0,200);
    circleSize = map(mouseY, 0, height, 0, 30);
    xpos = random(width);
    ypos = random(height);
    fill(mouseX, mouseY, 200, 200);
    ellipse(xpos, ypos, circleSize);
    circleX = circleX + 5;
    console.log("x=" + mouseX);
    console.log("y=" + mouseY);
    textSize(18);
    text('vvvvvvvvvvvvv', xpos, ypos / 2);
  image(img3, x, y, windowWidth / 1.7, windowHeight / 1.4);
   x += xspeed;
  y += yspeed;
  if (x > width - 20 || x < 10) {
    xspeed = -xspeed;
  }
  if (y > height - 80 || y < 80) {
    yspeed = -yspeed;}
}

