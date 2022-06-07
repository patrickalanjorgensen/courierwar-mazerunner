//Initial Creation 6/5/22
/* here I will try to create the different states of the game - 
for example I want to start with a loading screen and then have person a place there bombs 
then person b place their bombs */


// location of player
int playerX = 0;
int playerY = 0;
int[][] bombArray;

//for some reason couldn't put in mouse pressed 
// bombs
int rowdex = -1;
int coldex = -1;

int gridWidth = 13;
int gridHeight = 13;
int cellSize = 50;
int playerSize = cellSize/2;


int gridX = 250;
int gridY = 200;


void setup() {
    bombArray = new int[gridHeight][gridWidth]; // Create
    size(1000, 1000);
    background(0);    
    stroke(0,0,255);
}

void draw() {
    background(0);
    drawGrid();
    fill(255,0,0);
    ellipse(playerX * cellSize + gridX + cellSize/2, playerY * cellSize + gridY + cellSize/2, playerSize, playerSize);
    
    // draw bombs
    for(int i = 0; i < gridHeight; i++) {
      for(int j = 0; j < gridWidth; j++) {
        if(bombArray[i][j] == 1) {
          fill(0);
          int bombX = j*cellSize + gridX + cellSize/2;
          int bombY = i*cellSize + gridY + cellSize/2;
          
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
    //noLoop();
  
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP && playerY != 0) {
      playerY--;
    } else if (keyCode == DOWN && playerY != gridHeight - 1) {
      playerY++;
    } 
    else if (keyCode == LEFT && playerX != 0) {
      playerX--;
    } else if (keyCode == RIGHT && playerX != gridWidth - 1) {
      playerX++;
    } 
  } else {
   print("player movement error");
  }
  redraw();
}


void mousePressed() {
  // goal is to map the locations of each mouse press to a square in the grid
    for(int i = 1; i <= gridHeight; i++) {
      if(mouseY < i * cellSize + gridY) {
        rowdex = i - 1;
        break;
      }
    }
    for(int i = 1; i <= gridWidth; i++) {
      if(mouseX < i * cellSize + gridX) {
        coldex = i - 1;
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

void drawGrid() {
    fill(255);
    rect(gridX, gridY, cellSize * gridWidth, cellSize * gridHeight);
    for(int i = 1; i < gridHeight; i++) {
      int y = i*cellSize + gridY;
      line(gridX, y, cellSize * gridWidth + gridX, y); 
    }
    for(int i = 1; i < gridWidth; i++) {
      int x = i*cellSize + gridX;
      line(x, gridY, x, cellSize * gridHeight + gridY);
    }
  
}
