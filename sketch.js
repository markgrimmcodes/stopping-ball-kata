let x = 0;
let y = 100;
function setup() {
  createCanvas(200, 200);
}
function mousePressed() {
  x = 0;
}
function draw() {
  background(220);
  circle(x, y, 30);
  if (x < 200) {
    x = x + 1;
  }
}
