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
  fill(127)
  rect(10, 10, 380, 350, 20);

  
  strokeWeight(1);
  line(200, 10, 200, 360);
  line(10, 185, 390, 185);

  // Draw Fox
  drawFox();
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

function drawFox() {
  strokeWeight(0);
  
  fill(150); // gris oscuro
  triangle(200, 320, 180, 220, 200, 232); // cuello6 - principio
  triangle(105, 225, 145, 206, 135, 220); // cuello2

  fill(190); // gris medio
  triangle(120, 240, 145, 206, 180, 220); // cuello3

  fill(220); // gris claro
  triangle(105, 225, 145, 206, 116, 194); // cuello1
  triangle(120, 240, 182, 230, 180, 220); // cuello4

  fill(255);
  quad(180, 220, 200, 210, 200, 232, 190, 230); // Nariz

  fill(255, 170, 0); // Amarillo
  triangle(175, 170, 200.3, 150, 126, 123); // forehead
  triangle(180, 220, 190, 180, 170, 125); // entre nariz y ojo

  fill(255, 155, 0); // Naranja claro
  quad(116.5, 105, 117, 82, 110, 60, 105, 100); // oreja en medio
  triangle(150, 105, 200, 150, 130, 125); // forehead
  triangle(175, 170, 130, 125, 116, 140); // templo
  triangle(160, 185, 180, 220, 112, 193); // cachete exterior
  triangle(145, 170, 90, 200, 116, 140); //melena exterior

  fill(255, 101, 5); // Naranja intermedio
  quad(175, 170, 116, 140, 145, 170, 180, 180); //ariba ojo
  quad(175, 170, 200, 150, 200, 170, 190, 180); // arriba nariz
  triangle(160, 185, 180, 220, 180, 180); // cachete interior

  fill(220, 100, 5); // Naranja oscuro
  quad(180, 220, 200, 210, 200, 170, 185, 177); // Nariz tabique
  triangle(110, 60, 130, 125, 150, 105); // oreja arriba
  quad(116, 105, 116, 140, 110, 154, 105, 100); // oreja abajo
  triangle(145, 170, 90, 200, 160, 185); //melena interior
  triangle(200, 105, 200, 150, 150, 105); // cresta
  
  fill(0); //negro
  triangle(160, 185, 180, 180, 139, 164); //eye
  triangle(200, 210, 200, 220, 186, 217); // Nariz negro

  fill(250); // gris muy claro
  triangle(200, 320, 182, 230, 120, 240); // cuello5 - principio
  triangle(116.5, 80, 116, 140, 130, 125); // oreja dentro - blanco
  
  fill(80, 80, 80, 128); // 128 = 50% de transparencia (0–255)
  noStroke();
  beginShape();
    vertex(115, 194);
    vertex(180, 220);
    vertex(190, 230);
    vertex(200, 232);
    vertex(200, 237);
    vertex(190, 235);
    vertex(180, 225);
    vertex(175, 223);
  endShape(CLOSE);  
}