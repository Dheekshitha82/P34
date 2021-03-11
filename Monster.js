class Monster{
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.04
    }
    this.x = x
    this.y = y
    this.r = radius
    this.body = Bodies.circle(this.x,this.y, this.r/2, options);
    this.image = loadImage("images/Monster-01.png")
    World.add(world, this.body);

}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    image(this.image, 0, -100, this.r, this.r);
    pop();

}
}