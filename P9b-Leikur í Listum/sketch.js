var boltar = [];
var words = ["svo", "margir", "boltar"];

function setup() {
  createCanvas(600,600);
  colorMode(HSB);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  background(258, 23, 89);
  // Hreyfum og teiknum alla boltana sem eru í boltar listanum
	for (var i = 0; i < boltar.length; i++){
    boltar[i].show();
		boltar[i].move();
  }
  for(var i = 0; i < words.length; i++){
   text(words[i],300,50+ 32*i);
 }
}

// Þegar smellt er á músina eru búnir til 5 nýjir boltar.
function mousePressed() {
	litur = color ((random(0,60)),60,70);
	for (var i = 0; i < 5; i++){
		boltar.push(new Ball(mouseX,mouseY,litur));
  }
}
function keyPressed() {
  words.push("boltar");
}
// Býr til bolta sem fer um skjáinn+
// og skoppar af mörkum hans
class Ball{
  // Býr til nýjann bolta með miðju í (x,y)
	// litur: stjórnar litnum á boltanum
  constructor(x,y,litur) {
    this.x = x;
    this.y = y;
		this.xSpeed = random(-2,2);
		this.ySpeed = random(-2,2);
		this.litur = litur;
  }
	// Hreyfir sápukúluna til
  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
		this.bounce();
  }
	// Lætur boltann skoppa af veggjunum
	bounce() {
    if(this.x < 0 || this.x > width){
			this.xSpeed = -this.xSpeed;
		}
    if(this.y < 0 || this.y > height){
			this.ySpeed = -this.ySpeed;
		}
  }
	// Teiknar boltann
  show() {
    noStroke(0);
    fill(this.litur);
    ellipse(this.x,this.y,40,40);
  }
}
