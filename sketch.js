var engine, world;
var backgroundImg;
var snow,snowfall1,snowfall2;

function preload() {
    backgroundImg = loadImage("snow1.jpg");
    snowfall1 = loadAnimation("snow4.webp");
    snowfall2 = loadAnimation("snow5.webp");
}

function setup(){
    var canvas = createCanvas(1300,600);
    
    var snow = new Snow;
    var snow = new Snow;
}

function draw(){
    background(backgroundImg);
    drawSprites();
      //creating continous snowfall
  var select_snowfall = Math.round(random(1,3));
  
  if (world.frameCount % 150 == 0) {
     select_snowfall == snowfall1;
      elseif(world.frameCount % 150 == 1)
        select_snowfall == snowfall2; 
      }
      
      
     }
     
    



 
