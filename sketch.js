
let n = 0;

function setup() {
  createCanvas(400, 400);
  background(4, 6, 51);
  lineDrawing(30, 270, 500, color(82, 255, 252));
}

function draw() {
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