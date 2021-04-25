class Stone{
	constructor(x,y,width,height)
	{
	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
    }
        this.x = 300
        this.y = 100
		this.body=Bodies.rectangle(x, y,width,height, options)
        this.width=width
        this.height=height
		

        World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0,0, this.width, this.height)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}