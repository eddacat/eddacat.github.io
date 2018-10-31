function setup() {
  createCanvas(300,300);
  background(100);
  noStroke();
  frameRate(5);
}

function draw() {
  for(var x = 0; x < width; x = x+10){
    fill(random(50, 150));
    rect(x,width/2, 10,10);
  }
}
