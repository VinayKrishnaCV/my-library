function isTouching(object1,object2){
    //making it touch
    if(Math.abs((object1.x - object2.x))<(object2.width/2 +object1.width/2)&&
    (Math.abs(object1.y - object2.y))<(object2.height/2 +object1.height/2)){
      return true;
    //fixedrect.x = 0;
    }
    else{
      return false;
    }
  }
  
  function bounce(object1,object2){
    if(Math.abs((object1.x - object2.x))<(object2.width/2 +object1.width/2)){
      object1.velocityX = -object1.velocityX;
      object2.velocityX = -object2.velocityX;
    }
    if(Math.abs((object1.y - object2.y))<(object2.height/2 +object1.height/2)){
      object1.velocityY = -object1.velocityY;
      object2.velocityY = -object2.velocityY;
    }
  }