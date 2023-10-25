class Pins{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            density:1.0,
            restitution:0.8,
            fricition:1
        }
        this.r = r
        this.body = Bodies.circle(x,y,r,options)
        this.image = loadImage("bowlingpinbg.png")
        World.add(world,this.body)
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