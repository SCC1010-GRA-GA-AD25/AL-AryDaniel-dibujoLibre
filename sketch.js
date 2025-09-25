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
  stroke(50);
  strokeWeight(4);
  fill(0)
  rect(10, 10, 380, 350, 20);

  // Draw Fox
  drawFox();
  
  // Draw Lion
  drawLion();
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

function drawLion() {
  // Why I mix spanish and english? cuz I can
  // Why "top", "left", "right", "north", "south"? cuz I can

  fill(255, 170, 0); // Amarillo
  square(200, 190, 50) // a square (to cover the space)
  square(200, 120, 80) // a square (to cover the space)

  fill(255, 155, 0); // Naranja claro
  triangle(245, 215, 230, 190, 275, 170); // lower cheek 
  triangle(200, 190, 230, 190, 200, 120); // septum
  
  fill(220, 100, 5); // Naranja oscuro
  triangle(200, 90, 250, 90, 200, 120); // melena top
  triangle(310, 142, 290, 180, 250, 129); // melena left
  triangle(275, 250, 230, 300, 275, 170); // cheek melena right - first
  triangle(245, 215, 230, 300, 275, 170); // cheek melena right - second
  
  fill(255, 101, 5); // Naranja intermedio
  triangle(300, 140, 250, 90, 200, 120); // melena top-left
  triangle(275, 230, 295, 185, 275, 160); // melena bottom-left
  
  
  triangle(245, 225, 235, 275, 200, 320); // chick - north
  triangle(245, 225, 200, 260, 200, 320); // chick - south
  
  fill(255)
  triangle(215, 230, 200, 260, 200, 230); // mouth - north
  triangle(225, 241, 200, 260, 215, 230); // mouth - south
  triangle(200, 190, 225, 190, 200, 185); // nose
  
  fill(179, 120, 46) // brown dark
  triangle(200, 190, 225, 190, 200, 210); // nose
  triangle(220, 170, 240, 170, 260, 140); // eye
  triangle(275, 170, 230, 190, 275, 160); // upper cheek
  triangle(215, 230, 200, 235, 200, 230); // mouth - dark part
  triangle(205, 230, 200, 245, 200, 230); // mouth - dark part

  fill(0)
  triangle(220, 170, 230, 190, 260, 170); // eye
  strokeWeight(3);
  stroke(0);     // color del punto
    point(225, 215);
    point(230, 205);
    point(220, 205);
  strokeWeight(0);

  fill(80, 80, 80, 128); // 128 = 50% de transparencia (0–255)
  noStroke();
  beginShape();
    vertex(200, 260);
    vertex(242, 225);
    vertex(245, 215);
    vertex(275, 170);
    vertex(275, 160); // peak
    vertex(276, 170);
    vertex(248, 215);
    vertex(245, 226);
    vertex(200, 268);
  endShape(CLOSE);  
  
}

function drawOldLion() {
  strokeWeight(0);
  // -------------- Melena -----------------
  fill(242, 243, 174) // blanco (nariz ojo)
  fill(221, 142, 62) // crema (cara claro)

  
  fill(198, 145, 69) // brown medium
    quad(215, 120, 215, 70, 285, 30, 275, 70); // Nivel 3
    triangle(200, 70, 200, 96, 215, 60); 
    beginShape(); // Nivel 1
    vertex(280, 88);
    vertex(300, 95);
    vertex(320, 130);
    vertex(230, 110);
    endShape(CLOSE);
    
    triangle(260, 190, 320, 280, 306, 230) // 1
    
    triangle(200, 270, 200, 295, 210, 275)
    quad(200, 300, 200, 345, 210, 340, 215, 280)
    quad(223, 243, 230, 250, 250, 310, 240, 320); // 
    quad(240, 245, 260, 200, 278, 240, 260, 300); // 2
    quad(296, 250, 299, 285, 275, 320, 275, 225); // 3
    square(250, 165, 55) // 3
    
  fill(179, 120, 46) // brown dark
    triangle(213, 125, 242, 90, 218, 105); 
    triangle(200, 115, 200, 95, 226, 69); // melena top
    beginShape(); // 2 melena right L
      vertex(273, 165)
      vertex(270, 135)
      vertex(310, 150)
      vertex(325, 210)
      vertex(300, 175)
    endShape(CLOSE);
    quad(270, 205, 270, 195, 320, 220, 320, 240)
    triangle(250, 170, 280, 220, 275, 250)
      
    triangle(230, 250, 240, 280, 244, 240)

    beginShape() // 2 - melena abajo
      vertex(210, 275)
      vertex(217, 271)
      vertex(233, 285)
      vertex(238, 310)
      vertex(233, 320)
      vertex(235, 323)
      vertex(230, 355)
      vertex(220, 330)
      vertex(220, 315)
      vertex(202, 289)
    endShape(CLOSE)
      
  fill(220, 100, 5); // Naranja oscuro - fox
    beginShape(); // Nivel 2 - cafe oscuro - melena costado
      vertex(295, 250);
      vertex(300, 300);
      vertex(310, 264);
      vertex(280, 220);
      vertex(255, 210);
    endShape(CLOSE);
    
    triangle(247, 110, 290, 120, 300, 175)
    
    beginShape(); // Nivel 2
    vertex(250, 80);
    vertex(290, 75);
    vertex(275, 95);
    vertex(260, 100);
    vertex(235, 115);
    vertex(220, 115);
  endShape(CLOSE);

  beginShape(); // Nivel 1
  vertex(220, 50);
  vertex(240, 40);
  vertex(260, 35);
    vertex(245, 45);
    vertex(230, 65);
    vertex(200, 95);
    endShape(CLOSE);
    
    
    triangle(200, 290, 220, 280, 200, 310) // 3 abajo melena
    
    triangle(215, 270, 228, 260, 232, 284)
    
    quad(240, 280, 240, 245, 265, 310, 256, 330); // 1
  
    triangle(200, 115, 215, 105, 220, 80); 

  // -----------------------------------------------------
  // -------------- Cuerpo -------------------------------
  // -----------------------------------------------------
    
  fill(255, 170, 0); // Amarillo
    quad(245, 152, 265, 130, 275, 145, 200, 220);
  
    
    beginShape();
    vertex(200, 190);
    vertex(200, 150);
    vertex(207, 146);
    vertex(220, 165);
    vertex(215, 185);
    vertex(223, 205);
    endShape(CLOSE);


  fill(222, 143, 18)
    quad(217, 110, 250, 112, 240, 195, 207, 146); // fore head
    
  fill(255, 153, 51); // naranja
    triangle(245, 152, 250, 112, 265, 130);
    square(200, 210, 35) // above nouse
    
    beginShape(); // cheek
      vertex(220, 165);
      vertex(235, 153);
      vertex(260, 155);
      vertex(275, 145);
      vertex(273, 175);
      vertex(280, 205);
      vertex(250, 240);
      vertex(240, 230);
      vertex(230, 225);
      vertex(215, 185);
    endShape(CLOSE);

    beginShape(); // chin
      vertex(228, 265);
      vertex(230, 253);
      vertex(200, 253);
      vertex(200, 275);
      vertex(210, 275);
    endShape(CLOSE);
  
  fill(255);
    beginShape(); // muzzle
      vertex(200, 253);
      vertex(200, 238);
      vertex(205, 233);
      vertex(220, 230);
      vertex(228, 218);
      vertex(240, 220);
      vertex(245, 228);
      vertex(244, 245);
      vertex(236, 253);
      vertex(210, 257);
    endShape(CLOSE);

    
  fill(110, 70, 43) // really dark brown
    quad(200, 190, 230, 209, 220, 232, 200, 220);
    quad(200, 115, 200, 150, 207, 146, 220, 100);
    
    beginShape(); // cheek
      vertex(235, 180);
      vertex(230, 188);
      vertex(233, 170);
      vertex(245, 165);
      vertex(260, 165);
    endShape(CLOSE);

    fill(255)
    beginShape();
      vertex(238, 173);
      vertex(250, 170);
      vertex(249, 176);
      vertex(244, 180);
      vertex(239, 178);
    endShape(CLOSE);
}