var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor = "green";

  movingrectangle = createSprite(300,300,50,50);
  movingrectangle.shapeColor = "green";
}

function draw() {
  background(0); 
  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

if(movingrectangle.x - fixedrectangle.x <movingrectangle.width/2 + fixedrectangle.width/2
  && fixedrectangle.x - movingrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2
  && movingrectangle.y - fixedrectangle.y < movingrectangle.width/2 + fixedrectangle.width/2
  && fixedrectangle.y - movingrectangle.y < fixedrectangle.width/2 + fixedrectangle.width/2){
  movingrectangle.shapeColor = "red";
  fixedrectangle.shapeColor = "red";
}
else{
  movingrectangle.shapeColor = "green";
  fixedrectangle.shapeColor = "green"
}


  drawSprites();
}