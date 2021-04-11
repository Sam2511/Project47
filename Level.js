class Level{
    constructor(){
      
        //Variable for number of enemies
      



    }

    level1Setup(){
        player = new Player();

        enemy1 = new Enemy(1255,50);
        enemy2 = new Enemy(1255,150);
        enemy3 = new Enemy(1255,250);
        enemy4 = new Enemy(1255,350);
        enemy5 = new Enemy(1255,450);

    }

    level1Draw(){
        if(gameState === "play"){

            fill("Orange");
            textSize(15);
            if(player.health > 0){
              fill("green");
              rect(20,20,player.health,10);
              text("HP: "+player.health,35,15);
            }
            player.move();
            player.shoot();
            player.destroy();
           
            enemy1.shoot(10);
            enemy1.move();
            enemy1.destroy();
            enemy2.shoot(10);
            enemy2.move();
            enemy2.destroy();
            enemy3.shoot(10);
            enemy3.move();
            enemy3.destroy();
            enemy4.shoot(10);
            enemy4.move();
            enemy4.destroy();
            enemy5.shoot(10);
            enemy5.move();
            enemy5.destroy();
          }
          else if(gameState === "lost"){
            enemyLaserG.destroyEach();
            heroLaserG.destroyEach();
            text("GAME OVER", 600,255);
          }
          else if(gameState = "win"){
            enemyLaserG.destroyEach();
            heroLaserG.destroyEach();
            gameState = "Aplay";
            noLevel = 2;
          }

         
        
          console.log("gameState: " + gameState);
    }

    level2Setup(){
      player = new Player();

        enemy1 = new Enemy(1255,100);
        enemy2 = new Enemy(1255,200);
        enemy3 = new Enemy(1255,300);
        enemy4 = new Enemy(1255,400);
        enemy5 = new Enemy(1255,500);
        enemy6 = new Enemy(1255,50);
        enemy7 = new Enemy(1255,150);
        enemy8 = new Enemy(1255,250);
        enemy9 = new Enemy(1255,350);
        enemy10 = new Enemy(1255,450);
        
        
    }

    level2Draw(){
      if(gameState === "Aplay"){

       

        fill("Orange");
        textSize(15);
        if(player.health > 0){
          fill("green");
          rect(20,20,player.health,10);
          text("HP: "+player.health,35,15);
        }
        
      player.move();
      player.shoot();
      player.destroy();
  
      enemy1.shoot(20);
      enemy1.move();
      enemy1.destroy();
      enemy2.shoot(20);
      enemy2.move();
      enemy2.destroy();
      enemy3.shoot(20);
      enemy3.move();
      enemy3.destroy();
      enemy4.shoot(20);
      enemy4.move();
      enemy4.destroy();
      enemy5.shoot(20);
      enemy5.move();
      enemy5.destroy();
     

      }
      console.log("gameState: " + gameState);

    }

    level3Setup(){
        player = new Player();
        enemy1 = new Enemy(1255,100);
        enemy2 = new Enemy(1255,200);
        enemy3 = new Enemy(1255,300);
        enemy4 = new Enemy(1255,400);
        enemy5 = new Enemy(1255,500);
        enemy6 = new Enemy(1255,50);
        enemy7 = new Enemy(1255,150);
        enemy8 = new Enemy(1255,250);
        enemy9 = new Enemy(1255,350);
        enemy10 = new Enemy(1255,450);
        


    }

    level3Draw(){
      player.move();
      player.shoot();
      player.destroy();
  
      enemy1.shoot(30);
      enemy1.move();
      enemy1.destroy();
      enemy2.shoot(30);
      enemy2.move();
      enemy2.destroy();
      enemy3.shoot(40);
      enemy3.move();
      enemy3.destroy();
      enemy4.shoot(50);
      enemy4.move();
      enemy4.destroy();
      enemy5.shoot(60);
      enemy5.move();
      enemy5.destroy();
      enemy6.shoot(30);
      enemy6.move();
      enemy6.destroy();
      enemy7.shoot(30);
      enemy7.move();
      enemy7.destroy();
      enemy8.shoot(40);
      enemy8.move();
      enemy8.destroy();
      enemy9.shoot(50);
      enemy9.move();
      enemy9.destroy();
      enemy10.shoot(60);
      enemy10.move();
      enemy10.destroy();





    }


    

}