
var ruby1, ruby2, ruby3;

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá zoog hluti.
  ruby1 = new Ruby(300,300, 55,55, 28,28);
  ruby2 = new Ruby(500,100, 85,85, 112,112);
  ruby3 = new Ruby(100,100, 85,85, 112,112);
}

function draw() {
	background(232, 254, 254);
  fill(179, 232, 233);
  noStroke();
	ellipse(300,300,400,400);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
  ruby1.move();
  ruby1.show();
  ruby2.move();
  ruby2.show();
  ruby3.move();
  ruby3.show();
}

// Klasinn Zoog
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class Ruby{
  constructor(x,y, hendi1, hendi2, puttar1, puttar2) {
    this.x = x;
    this.y = y;
    this.hendi1 = hendi1;
    this.hendi2 = hendi2;
    this.puttar1 = puttar1;
    this.puttar2 = puttar2;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.eyeColor = color(100,100,100);
  }

  // Teiknar ruby
  show(){

      noStroke();

    // Teiknar ruby
      rectMode(CENTER);
      fill(84, 17, 43);
      rect(this.x,this.y, 115,100, 20);
      // x var 200 og y var 95

      fill(223, 67, 128);
      rect(this.x,this.y+5, 70,75, 10);
      rect(this.x,this.y+45, 25,25, 5);

      fill(84, 17, 43);
      rect(this.x,this.y-25, 100,20, 20);

      fill(223, 67, 128);
      rect(this.x+50,this.y+70, 40,35, 5);
      rect(this.x-50,this.y+70, 40,35, 5);
      rect(this.x+75,this.y + this.hendi2, 35,65, 5);
      rect(this.x-75,this.y + this.hendi1, 35,65, 5);
      rect(this.x+24,this.y+155, 37,65, 5);
      rect(this.x-24,this.y+155, 37,65, 5);

      fill(138, 33, 79);
      rect(this.x,this.y+95, 85,85, 5);
      rect(this.x+29,this.y+180, 47,20, 0,15,0,0);
      rect(this.x-29,this.y+180, 47,20, 15,0,0,0);
      rect(this.x,this.y-20, 115,15);

      fill(58, 5, 26);
      rect(this.x,this.y+130, 85,30,);
      rect(this.x-24,this.y+145, 37,30);
      rect(this.x+24,this.y+145, 37,30);

      fill(84, 17, 43);
      rect(this.x-75,this.y+this.puttar1, 2,10, 2);
      rect(this.x-67,this.y+this.puttar1, 2,10, 2);
      rect(this.x-83,this.y+this.puttar1, 2,10, 2);
      rect(this.x+75,this.y+this.puttar2, 2,10, 2);
      rect(this.x+67,this.y+this.puttar2, 2,10, 2);
      rect(this.x+83,this.y+this.puttar2, 2,10, 2);

      rect(this.x,this.y+30, 30,2, 2);
      rect(this.x-15,this.y+30, 2,10, 2);
      rect(this.x+15,this.y+30, 2,10, 2);

      fill(248, 240, 247);
      ellipse(this.x+17,this.y+10, 20,20);
      ellipse(this.x-17,this.y+10, 20,20);

      fill(138, 33, 79);
      ellipse(this.x+10,this.y+10, 10,10);
      ellipse(this.x-10,this.y+10, 10,10);
      rect(this.x-12,this.y, 12,6, 3);
      rect(this.x+12,this.y, 12,6, 3);


  }

  // Hreyfir zoog um skjáinn.
  // Hann minnkar sífelt hraðann, en velur svo slembistenfu
  // og fyglir henni á nyjum slbenum hraða.
	move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.05;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,5);
		}
      if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
        this.blink();
        this.dir = atan((this.y - height/2)/(this.x-width/2));
        if(this.x - width/2 > 0){
        	this.dir = this.dir + PI;
        }
     }
	}
  blink(){
    if (this.hendi1 = 55){
      this.hendi1 = 85;
    }
    if (this.hendi1 = 85){
      this.hendi1 = 55;
    }
    if (this.hendi2 = 55){
      this.hendi2 = 85;
    }
    if (this.hendi2 = 85){
      this.hendi2 = 55;
    }
    if (this.puttar1 = 28){
      this.puttar1 = 112;
    }
    if (this.puttar1 = 112){
      this.puttar1 = 28;
    }
    if (this.puttar2 = 28){
      this.puttar2 = 112;
    }
    if (this.puttar2 = 112){
      this.puttar2 = 28;
    }

  }

}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
