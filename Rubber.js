class Rubber{
	constructor(x,y,r)
	{
	var options={
		'restitution':0.3,
		'friction':5,
		'density':1
	}
		this.x=500;
		this.y=100;
		this.r=50;
		this.body=Bodies.circle(x, y, (5-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r)

			pop()
	}

}