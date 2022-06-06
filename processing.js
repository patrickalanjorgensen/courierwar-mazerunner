//Initial Creation 6/5/22
/* here I will try to create the different states of the game - 
for example I want to start with a loading screen and then have person a place there bombs 
then person b place their bombs */


int Xposition = 50;
int Yposition = 50;
int[][] bombArray;

//for some reason couldn't put in mouse pressed
int rowdex = 100;
int coldex = 100;


void setup() {
    bombArray = new int[9][9]; // Create
    size(500, 500);
    background(0);    
    stroke(0,0,255);
}

void draw() {
    fill(255);
    rect(25, 25, 450, 450);
    for(int i = 1; i < 9; i++) {
      int x = i*50 + 25;
      line(x, 25, x, 475);
      line(25, x, 475, x); 
    }
    fill(255,0,0);
    ellipse(Xposition, Yposition, 50, 50);
    
    // draw bombs
    for(int i = 1; i < 9; i++) {
      for(int j = 1; j < 9; j++) {
      }
    }
    noLoop();
  
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      Yposition = Yposition - 50;
    } else if (keyCode == DOWN) {
      Yposition = Yposition + 50;
    } 
    else if (keyCode == LEFT) {
      Xposition = Xposition - 50;
    } else if (keyCode == RIGHT) {
      Xposition = Xposition + 50;
    } 
  } else {
   // fillVal = 126;
  }
  redraw();
}


void mousePressed() {
  // goal is to map the locations of each mouse press to a square in the grid
  // if mouse y is less than 76 than we're dealing with the first row and + 50 and so on
  if(mouseY < 76) {
     rowdex = 0;
  } 
  else if (mouseY < 126) {
     rowdex = 1;
  }
  else if (mouseY < 176) {
     rowdex = 2;
  }
  else if (mouseY < 226) {
    rowdex = 3;
  }
  else if (mouseY < 276) {
    rowdex = 4;
  }
  else if (mouseY < 326) {
    rowdex = 5;
  }
  else if (mouseY < 376) {
    rowdex = 6;
  }
  else if (mouseY < 426) {
    rowdex = 7;
  }
  else if (mouseY < 476) {
    rowdex = 8;
  }
  else {
    println("error mouse");
  }
  
  if(mouseX < 76) {
    coldex = 0;
    } 
    else if (mouseX < 126) {
    coldex = 1;
    }
    else if (mouseX < 176) {
    coldex = 2;
    }
    else if (mouseX < 226) {
    coldex = 3;    }
    else if (mouseX < 276) {
    coldex = 4;
    }
    else if (mouseX < 326) {
    coldex = 5;
    }
    else if (mouseX < 376) {
    coldex = 6;
    }
    else if (mouseX < 426) {
    coldex = 7;
    }
    else if (mouseX < 476) {
    coldex = 8;
    }
    else {
      println("error mouseX");
    }
    
  if(bombArray[rowdex][coldex] == 1) {
    //if true set to false/false set to true
    bombArray[rowdex][coldex] = 0;
  }
  else {
    bombArray[rowdex][coldex] = 1;
  }
  redraw();
  
  
} 

/*
void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      Yposition = Yposition - 50;
    } else if (keyCode == DOWN) {
      Yposition = Yposition + 50;
    } 
    else if (keyCode == LEFT) {
      Xposition = Xposition - 50;
    } else if (keyCode == RIGHT) {
      Xposition = Xposition + 50;
    } 
  } else {
   // fillVal = 126;
  }
} */
