
function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(250, 216, 202);
  fill(236,36,94);
  if(mouseX < 200 && mouseY < 200){
    //x er á bilinu frá 0 upp í width/2
  	fill(236,36,94);
    ellipse(mouseX, mouseY, 50,50);
  }
  if(mouseX > 200 && mouseY > 200){
    //x er á bilinu frá 0 upp í width/2
  	fill(188, 164, 249);
    ellipse(mouseX, mouseY, 50,50);
  }
  if(mouseX > 200 && mouseY < 200){
    //x er á bilinu frá 0 upp í width/2
  	fill(249, 231, 164);
    ellipse(mouseX, mouseY, 50,50);
  }
  if(mouseX < 200 && mouseY > 200){
    //x er á bilinu frá 0 upp í width/2
  	fill(249, 164, 183);
    ellipse(mouseX, mouseY, 50,50);
  }

}
