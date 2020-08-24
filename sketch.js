var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(400, 200, 20, 70);

  fixedRect.shapeColor = "pink";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
   fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
   movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
   fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "pink";

   }else {
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "blue";
   }



  drawSprites();
}