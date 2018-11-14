var bakgrunnur;
var hjarta;
var hlutfall = 1;

function preload() {
  bakgrunnur = loadImage('bg.png_large'); //https://twitter.com/16pxl/status/1059615735964688385
  hjarta = loadImage('heart.png'); //https://www.gfxmag.com/wp-content/uploads/2018/03/1f496-sparkling-heart-emoji-icon-vector-symbol-1.png
   }
function setup() {
  createCanvas(700,700);
  background (bakgrunnur) ;
  colorMode(HSB);
  frameRate(2);
}
function draw(){
  hlutfall = random(0.05,0.2);
 tint(random(270,360),70,100);
 imageMode(CENTER);
 image(hjarta, random(0,width),random(0,height),hjarta.width*hlutfall,hjarta.height*hlutfall);
}
