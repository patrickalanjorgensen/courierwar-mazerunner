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
