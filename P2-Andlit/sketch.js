// Hér kemur kóðinn þinn:
var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(55, 84, 86);
  fill(242, 90, 67)
  rect(x, y, faceWidth, faceHeight, 30);
  rect(200, 150, eyeSize, eyeSize, 10, 10, 2, 2)
  rect(150, 200, eyeSize, eyeSize, 10, 10, 2, 2)
  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
}
