function setup() {
  createCanvas(600,600);
  noStroke();
}

function draw() {
  background(178, 234, 236);
  ruby(mouseX,mouseY,85,85, 112,112);
  ruby(300,300, 55,55, 28,28);
  ruby(500,100, 85,55, 112,28);
  ruby(100,100, 55,85, 28,112);

// Teiknar ruby
function ruby(x,y, hendi1, hendi2, puttar1, puttar2){
  rectMode(CENTER);
  fill(84, 17, 43);
  rect(x,y, 115,100, 20);
  // x var 200 og y var 95

  fill(223, 67, 128);
  rect(x,y+5, 70,75, 10);
  rect(x,y+45, 25,25, 5);

  fill(84, 17, 43);
  rect(x,y-25, 100,20, 20);

  fill(223, 67, 128);
  rect(x+50,y+70, 40,35, 5);
  rect(x-50,y+70, 40,35, 5);
  rect(x+75,y + hendi2, 35,65, 5);
  rect(x-75,y + hendi1, 35,65, 5);
  rect(x+24,y+155, 37,65, 5);
  rect(x-24,y+155, 37,65, 5);

  fill(138, 33, 79);
  rect(x,y+95, 85,85, 5);
  rect(x+29,y+180, 47,20, 0,15,0,0);
  rect(x-29,y+180, 47,20, 15,0,0,0);
  rect(x,y-20, 115,15);

  fill(58, 5, 26);
  rect(x,y+130, 85,30,);
  rect(x-24,y+145, 37,30);
  rect(x+24,y+145, 37,30);

  fill(84, 17, 43);
  rect(x-75,y+puttar1, 2,10, 2);
  rect(x-67,y+puttar1, 2,10, 2);
  rect(x-83,y+puttar1, 2,10, 2);
  rect(x+75,y+puttar2, 2,10, 2);
  rect(x+67,y+puttar2, 2,10, 2);
  rect(x+83,y+puttar2, 2,10, 2);

  rect(x,y+30, 30,2, 2);
  rect(x-15,y+30, 2,10, 2);
  rect(x+15,y+30, 2,10, 2);

  fill(248, 240, 247);
  ellipse(x+17,y+10, 20,20);
  ellipse(x-17,y+10, 20,20);

  fill(138, 33, 79);
  ellipse(x+10,y+10, 10,10);
  ellipse(x-10,y+10, 10,10);
  rect(x-12,y, 12,6, 3);
  rect(x+12,y, 12,6, 3);

}
}
