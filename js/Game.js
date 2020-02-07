class Game {
  constructor(){

  }
   cars=[];
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
    gameState: state
    });
  }
  
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    car1 = createSprite(400,200);
    car1.addImage("car1",car1_img);

    car2 = createSprite(600,0);
    car2.addImage("car2",car2_img);
    
    car3 = createSprite(800,200);
    car3.addImage("car3",car3_img);
    
    car4 = createSprite(1000,200);
    car4.addImage("car4",car4_img);

    car5 = createSprite(200,200);
    car5.addImage("car",car_img);
    car5.scale = 0.4;

  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsatend();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
     image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

 

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction

        //use data form the database to display the cars in y direction
       
        // console.log(index, player.index)
       
        car2.y += random(3,4);
        car3.y += random(1,3);
        car3.x += random(2,3);
        car4.y += random(1,3);
        car5.y += random(1,3);

        if (index === player.index){
          stroke(10);
          fill("cyan");
          camera.position.x = car1.x;
          camera.position.y = car1.y;
        }
      }
    }

  if(keyIsDown(UP_ARROW) && player.index !== null){
      car1.y += -10;
      player.update();
    }

  if(keyIsDown(UP_ARROW && SHIFT)){
      car1.y += -15;
      player.update();
    }
   
  if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      car1.x +=5;
      car1.update();
    }

  if (car2.y>700){
      car2.y = car1.y - 400;
      
   }

   if (car3.y>700){
    car3.y = car1.y - -400;
}
    
  if (car4.y>700){
    car4.y = car1.y - 400

  }

  if (car5.y>700){
    car5.y = car1.y - 50

  }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      car1.x += -5;
      car1.update();
    }
  if(distance < -3000){
      gameState = 2;
      player.rank +=1;
        // player.updateCarsatend(player.rank);
    }
   
  ellipse(car1.x,car1.y,60,60);

//console.log(mouseX,mouseY);
  console.log ( distance);

  drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }}