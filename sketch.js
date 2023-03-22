let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 11;
  let EllipseY = height / 11;
  let EllipseSize = vol;

  //row1
  drawEllipse(EllipseX, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY, EllipseSize);

  //row2
  drawEllipse(EllipseX, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 2, EllipseSize);

  //row3
  drawEllipse(EllipseX, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 3, EllipseSize);

  //row4
  drawEllipse(EllipseX, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 4, EllipseSize);

  //row5
  drawEllipse(EllipseX * 2, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 5, EllipseSize);

   //row6
  drawEllipse(EllipseX, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 6, EllipseSize);

  //row7
  drawEllipse(EllipseX * 2, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 7, EllipseSize);

  //row8
  drawEllipse(EllipseX, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 8, EllipseSize);

  //row9
  drawEllipse(EllipseX, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 9, EllipseSize);

  //row10
  drawEllipse(EllipseX, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 10, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(started);
  }

  //row1
  drawHorizonticalEllipse(EllipseX, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY, EllipseSize);

  //row2
  drawHorizonticalEllipse(EllipseX, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 2, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 2, EllipseSize);

  //row3
  drawHorizonticalEllipse(EllipseX, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 3, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 3, EllipseSize);

  //row4
  drawHorizonticalEllipse(EllipseX, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 4, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 4, EllipseSize);

  //row5
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 5, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 5, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 5, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 5, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 5, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 5, EllipseSize);
  
  //row6
  drawHorizonticalEllipse(EllipseX, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 6, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 6, EllipseSize);
  
  //row7
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 7, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 7, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 7, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 7, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 7, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 7, EllipseSize);

  //row8
  drawHorizonticalEllipse(EllipseX, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 8, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 8, EllipseSize);

  //row9
  drawHorizonticalEllipse(EllipseX, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 9, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 9, EllipseSize);

  //row10
  drawHorizonticalEllipse(EllipseX, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 2, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 3, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 4, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 5, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 7, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 6, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 8, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 9, EllipseY * 10, EllipseSize);
  drawHorizonticalEllipse(EllipseX * 10, EllipseY * 10, EllipseSize);

  function drawHorizonticalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(started);
    //look up lerp for smoothness
  }

 if (started == false) {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textFont("Codystar")
    textStyle(BOLD)
    text("86% of physical fears reported were due to concealment. \n\n\n\n This refers to a visual occlusion of space \n big enough to hide a potential offender\n and from which the offender could\n watch and emerge to attack. \n\n\n\n Please click, and make noise to see the data.", width / 2, height / 2, width - 150, height - 150);
  }
}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

function mousePressed() {
  started = true;
  userStartAudio();
}
