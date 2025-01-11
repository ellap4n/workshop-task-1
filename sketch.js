

let n = 0;
var a = prompt("enter iteration number");

function setup() {
  createCanvas(400, 400);
  background(4, 6, 51);
  lineDrawing(30, 270, a, color(82, 255, 252));
}

function lineDrawing(startX, startY, iterations, colour) {
  stroke(colour);
  let a = random(0,width);
  let b = random(0,height);

  for (n = 0; n < iterations; n++) {
    line(startX, startY, a, b);
    startX = a;
    startY = b;
    
    a = random(0,width);
    b = random(0,height);

  }
}

function draw() {
}
