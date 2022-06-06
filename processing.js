//Initial Creation 6/5/22
/* here I will try to create the different states of the game - 
for example I want to start with a loading screen and then have person a place there bombs 
then person b place their bombs */


// location of player
int playerX = 50;
int playerY = 50;
int playerSize = 25;
int[][] bombArray;

//for some reason couldn't put in mouse pressed 
int rowdex = 100;
int coldex = 100;

int gridSizeInt = 9;
int gridSizePixels = 500;
int paddingWidth = 25;
int cellWidth = 50;


void setup() {
    bombArray = new int[gridSizeInt][gridSizeInt]; // Create
    size(500, 500);
    background(0);    
    stroke(0,0,255);
}

void draw() {
    fill(255);
    rect(paddingWidth, paddingWidth, 450, 450);
    for(int i = 1; i < 9; i++) {
      int x = i*50 + 25;
      line(x, 25, x, 475);
      line(25, x, 475, x); 
    }
    fill(255,0,0);
    ellipse(playerX, playerY, playerSize, playerSize);
    
    // draw bombs
    for(int i = 1; i < 10; i++) {
      for(int j = 1; j < 10; j++) {
        if(bombArray[i - 1][j - 1] == 1) {
          fill(0);
          int bombX = j*50;
          int bombY = i*50;
          
          if(bombX == playerX && bombY == playerY) { // track a collision between a bomb and the prayer
             if(bombArray[rowdex][coldex] == 1) { //erase the bomb
                //if true set to false/false set to true
                  bombArray[rowdex][coldex] = 0;
              } else {
                  bombArray[rowdex][coldex] = 1;
              }
              playerReset();
          } 
          fill(0);
          ellipse(bombX, bombY, 25, 25);
        }
      }
    }
    noLoop();
  
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      playerY = playerY - 50;
    } else if (keyCode == DOWN) {
      playerY = playerY + 50;
    } 
    else if (keyCode == LEFT) {
      playerX = playerX - 50;
    } else if (keyCode == RIGHT) {
      playerX = playerX + 50;
    } 
  } else {
   print("player movement error");
  }
  redraw();
}


void mousePressed() {
  // goal is to map the locations of each mouse press to a square in the grid
    for(int i = gridSizeInt; i >= 0; i--) {
      if(mouseY < i * cellWidth + paddingWidth) {
      } else {
        rowdex = i;
        break;
      }
    }
    for(int i = gridSizeInt; i >= 0; i--) {
      if(mouseX < i * cellWidth + paddingWidth) {
      } else {
        coldex = i;
        break;
      }
    }

  if(bombArray[rowdex][coldex] == 1) {     //if true set to false/false set to true
    bombArray[rowdex][coldex] = 0;
  } else {
    bombArray[rowdex][coldex] = 1;
  }
  redraw();
} 

void playerReset() {
  playerX = 50;
  playerY = 50;
  fill(255,0,0);
  ellipse(playerX, playerY, playerSize, playerSize);
  redraw();
}
