// Hér kemur kóðinn þinn:
var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 175;
var y = 125;
var mouthLength = 20;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(55, 84, 86);
  rectMode(CENTER);
  fill(242, 90, 67);
  noStroke();
  rect(x, y, faceWidth, faceHeight, 30);
  rectMode(CENTER);
  fill(84, 117, 119);
  noStroke();
  rect(175, 150, eyeSize, eyeSize, 10, 10, 2, 2);
  rect(125, 150, eyeSize, eyeSize, 10, 10, 2, 2);
  rectMode(CENTER)
  fill(255, 144, 133);
  noStroke();
  rect(150, 175, mouthLength, 5, 1, 1, 10, 10);
  rectMode(CENTER);
  fill(84, 117, 119);
  noStroke();
  rect(175, 165, 20, 10, 5);
  rect(125, 165, 20, 10, 5);
  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  20);
  mouthLength = random(10, 30);
}
