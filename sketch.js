var sr,mr;

function setup() {

  createCanvas(800,400);
  sr = createSprite(400, 200, 50, 50);
  mr = createSprite(600, 200, 60, 30);
  mr.shapeColor ="blue";
  sr.shapeColor ="blue";
}

function draw() {
  background(255,255,255);
    mr.x= World.mouseX;
    mr.y= World.mouseY;
    if(mr.x-sr.x<sr.width/2+mr.width/2 &&
      sr.x-mr.x<sr.width/2+mr.width/2 &&
      mr.y-sr.y<sr.height/2+mr.height/2 &&
      sr.y-mr.y<sr.height/2+mr.height/2){
      mr.shapeColor ="red";
      sr.shapeColor ="red";

    }
    else{
      mr.shapeColor ="blue";
      sr.shapeColor ="blue";
    }
  drawSprites();
}