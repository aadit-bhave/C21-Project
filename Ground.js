class Ground {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var options = {isStatic:true, density : 0.5}


        this.body = Bodies.rectangle(x,y,width,height, options)
        World.add(world, this.body);
    }




display() {
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
}



}