class Iron{
	constructor(x,y,width,height)
	{
	var options={
		'restitution':0.8,
		'friction':3,
		'density':30
	}
		this.x = 700
		this.y = 100
		this.body=Bodies.rectangle(x, y, 100,100, options)
        
        World.add(world, this.body);
		this.width=width;
		this.height=height

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("black");
			rect(0,0, this.width, this.height);

			pop()
	}

}