function setup() {
  createCanvas(300,300);
  colorMode(HSB);
  background(200, 70, 100);
  fill(0);
  frameRate(3);
  noStroke();
}

function draw(){
  for(var x = 0; x < width; x = x+10){
    for(var y = 0; y < height; y = y+10){
      fill(random(177,200),70,100);
      rect(x,y, 10,10);
    }
  }
  for(var x = 0; x < 75; x = x+10){
    fill(random(280,360),70,100);
    rect(x,y, 10,10);
  }
}
