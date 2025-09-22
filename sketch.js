function preload() {
}

function setup() { 
  cnv = createCanvas(400, 550);
  centerCanvas();
}

function draw() {
  background(31, 131, 173);

  // Draw card in middle
  fill(255);
  stroke(0);
  strokeWeight(4);
  rect(10, 10, 380, 350, 20);

}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);   // moves the canvas
}
