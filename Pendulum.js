class Pendulum{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var pendulumPos=this.body.position;	
		push()
		translate(pendulumPos.x, pendulumPos.y);
		// rectMode(CENTER);
		fill('pink');
		rotate(this.body.angle)
		ellipseMode(CENTER);
		ellipse(0, 0, this.r)
		pop()
 }
}