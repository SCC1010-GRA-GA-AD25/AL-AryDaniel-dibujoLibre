function preload() {
  myFontRegular = loadFont("assets/IMFellEnglish-Regular.ttf");
  myFontItalic = loadFont("assets/IMFellEnglish-Italic.ttf");
}

function setup() { 
  cnv = createCanvas(400, 550);
  centerCanvas();
  
}

function draw() {
  background(31, 131, 173);

  drawText();

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

function drawText() {
  textFont(myFontRegular);
  textSize(24);

  fill(0);
  noStroke();
  textSize(16);
  text(
    "The lion cannot protect himself from traps,\nand the fox cannot defend himself from wolves.\nOne must therefore be a fox to recognize traps,\nand a lion to frighten wolves.",
    30,
    height - 120,
  );
  
  textFont(myFontItalic);
  text("- Niccolò Machiavelli", 250, height - 30);
}