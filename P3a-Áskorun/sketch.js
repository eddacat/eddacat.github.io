function setup() {
  createCanvas(300,300);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(3);
}

function draw(){
  for(var i = 0; i < width ; i = i + 10) {
    fill(random(177,360),75,100);
    for(var j = 0; j < height; j = j + 10){
      ellipse(i,j, 10,10);
    }
  }
}
