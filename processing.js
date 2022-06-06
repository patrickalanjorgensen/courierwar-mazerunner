//Initial Creation 6/5/22
/* here I will try to create the different states of the game - 
for example I want to start with a loading screen and then have person a place there bombs 
then person b place their bombs */


int Xposition = 50;
int Yposition = 50;

void setup() {
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
  int rowindex = 0;
  rowindex = 1;
  if(mouseY < 76) {
    rowindex = 1;
  } 
  else if (mouseY < 126) {
  }
  else if (mouseY < 176) {
  }
  else if (mouseY < 226) {
  }
  else if (mouseY < 276) {
  }
  else if (mouseY < 326) {
  }
  else if (mouseY < 376) {
  }
  else if (mouseY < 426) {
  }
  else if (mouseY < 476) {
  }
  else {
    println("error mouse");
  }
  
  if(mouseX < 76) {
    } 
    else if (mouseX < 126) {
    }
    else if (mouseX < 176) {
    }
    else if (mouseX < 226) {
    }
    else if (mouseX < 276) {
    }
    else if (mouseX < 326) {
    }
    else if (mouseX < 376) {
    }
    else if (mouseX < 426) {
    }
    else if (mouseX < 476) {
    }
    else {
      println("error mouseX");
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
