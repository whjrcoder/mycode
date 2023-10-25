class Ball{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.r = 60
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("bowlingball.png")
        World.add(world,this.body)
    }

    shoot() {
        
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: 30, y:0 });  
      }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
   
}