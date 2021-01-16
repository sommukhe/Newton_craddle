class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        var options = {
          bodyA: body1,
          bodyB: body2,
          pointB:{x:this.offsetX,y:this.offsetY}
        }
    
     this.rope = Constraint.create(options);
     World.add(world, this.rope);
    }
    display(){
        var posA= this.rope.bodyA.position;
        //console.log(posA);
        var posB= this.rope.bodyB.position;
        //console.log(posB);

        var PosX1 = posA.x
        var PosY1 = posA.y
        
        var PosX2 = posB.x + this.offsetX
        var PosY2 = posB.y + this.offsetY
        
        line(PosX1, PosY1, PosX2, PosY2);
    }
}