// Hér kemur kóðinn þinn:
var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 100;
var y = 100;
var mouthLength = 20;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(55, 84, 86);
  fill(242, 90, 67);
  noStroke();
  rect(x, y, faceWidth, faceHeight, 30);
  fill(84, 117, 119);
  noStroke();
  rect(175, 150, eyeSize, eyeSize, 10, 10, 2, 2);
  rect(125, 150, eyeSize, eyeSize, 10, 10, 2, 2);
  fill(255, 144, 133);
  noStroke();
  rect(150, 175, mouthLength, 5, 1, 1, 10, 10);
  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  20);
  mouthLength = random(10, 30);
}
