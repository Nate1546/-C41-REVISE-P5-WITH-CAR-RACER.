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

    
    car1 = createSprite(400,200);  // My car
    car1.addImage("car1",car1_img);

    car2 = createSprite(600,200);
    car2.addImage("car2",car2_img);
    
    car3 = createSprite(800,200);
    car3.addImage("car3",car3_img);
    
    car4 = createSprite(1000,200);
    car4.addImage("car4",car4_img);
  
    car5 = createSprite(400,200);
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

      //x and y position of the cars
      var x=175;
      var y;
 

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction

        //use data form the database to display the cars in y direction
       
        // console.log(index, player.index)
       
        car5.y += random(5,10);
        car2.y += random(6,10);
        car3.y += random(6,8);
        car4.y += random(6,9);

        if (index === player.index){
          stroke(20);
          textSize(20);
          fill("cyan");
          camera.position.x = car1.x;
          camera.position.y = car1.y;
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      car1.y += -10;
      car2.y += -1;
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

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      car1.x += -5;
      car1.update();
    }
     if(car1.y<-2950){
      gameState = 2;
      player.rank +=1;
         }

         if (car2.y>700){
          car2.y = car1.y - 400;
          
       }
    
       if (car3.y>700){
        car3.y = car1.y - 400;
    }
        
      if (car4.y>700){
        car4.y = car1.y - 400
    
      }
    
      if (car5.y>700){
        car5.y = car1.y - 400
    
      }      

      
     

      var crash2 = dist(car2.x,car2.y,car1.x,car1.y);
        if(crash2<20){
          var flag=1;
        }
      var crash3 = dist(car3.x,car3.y,car1.x,car1.y);
        if(crash3<20){
          flag=1;
        }      
      var crash4 = dist(car4.x,car4.y,car1.x,car1.y);
        if(crash4<20){
          flag=1;       
        }
      var crash5 = dist(car5.x,car5.y,car1.x,car1.y);
        if(crash5<20){
          flag=1;
        }

      if(flag==1){
        flag=0;
        health=health-5;
      }

     

       if (lives === 0){
         gameState = 2;

       }       

  ellipse(car1.x,car1.y,60,60);
  var x1 =  dist (car1.x,car1.y,car2.x,car2.y);

  // console.log(x1);
  console.log(health);
  console.log(lives);
  
  text("Health : " + health,car1.x -200,car1.y + 50);
 text("Lives : " + lives,car1.x - 200,car1.y);

  // console.log(car1.y);
  // console.log(car2.y);

  drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
