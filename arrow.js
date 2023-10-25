class Arrow{
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.arrow_image = loadImage("arrow.png");
      
    }
    display() {
      if (keyIsDown(UP_ARROW) && this.angle<70  ) {
        this.angle += 0.05;
      }
  
      if (keyIsDown(DOWN_ARROW) && this.angle>-30 ) {
        this.angle -= 0.05;
      }
  
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.arrow_image, 0, 0, this.width, this.height);
      pop();
     
    }
  }
  