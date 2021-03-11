class CannonBall{
    constructor(x, y, width, height, angle){
        var options = {
            'friction':0.005,
            'density':1.0

    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/Superhero-01.png")
    World.add(world, this.body);

}
display(){
    var angle = this.body.angle;
    var pos = this.body.position
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER)
    strokeWeight(1)
    stroke("green")
    fill("white")
    image(this.image, -40, -20, this.width, this.height);
    pop();

}
}