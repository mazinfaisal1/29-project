class Slingshot{

    constructor(bodyA,pointB){


        var options = {

            bodyA:bodyA,
            poinB:pointB,
            stiffness:0.04,
            length:1
        }

        this.sling = Constraint.create();
        this.pointB = pointB
        World.add(world,this.sling)

    }
    fly(){

      this.sling.bodyA = null;



    }
    

    display(){

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = pointB;
            strokeWeight(4);
            stroke("black")         
            line(pointA.x,pointA.y,pointB.x,pointB.y) 
        }





    }





}