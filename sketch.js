function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed(){
	var count = int(random(5,15))
	var r = random(5,200)
	for(var i=0;i<count;i++){
		fill(random(255),random(255,255),random(100,200))
		ellipse(mouseX+i*5,mouseY,r)
		r*=0.9
	}
}