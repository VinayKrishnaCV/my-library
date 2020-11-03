var fixedrect;
var movingrect;
var obj1,obj2,obj3;

function setup() {
  createCanvas(800,400);
  fixedrect =createSprite(400, 200, 20, 20);
  movingrect=createSprite(400, 20, 20, 20);
  obj1 =createSprite(10, 200, 10, 10);
  obj2=createSprite(40, 200, 10, 10);
  obj3 =createSprite(70, 200, 10, 10);
  obj2.velocityX = 10;
  obj3.velocityX = -10;
}

function draw() {
  background(255,255,255); 
  
  //making the moving rect move
  movingrect.y = mouseY;
  movingrect.x = mouseX;

  bounce(obj2,obj3);

  if( isTouching(movingrect,obj1)){
    obj1.shapeColor= rgb(0,0,250);
  }else{
    obj1.shapeColor= rgb(72,250,47);
  }

  console.log(movingrect.x - fixedrect.x)
  
  drawSprites();
}