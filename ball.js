class Ball{


    constructor(x,y){

        var options = {

            restitution : 0.04,
            friction : 0.0
            
        }
        this.polygon = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.polygon)
    }

    display(){

        fill("red");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }



}