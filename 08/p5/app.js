var main;
let myFont1

function preload() {
  myFont = loadFont('fonts/AltoneTrial-Regular.ttf')
  myFont1 = loadFont('fonts/LoveParade-ovG4.ttf')
}

// let movingForce = 0.95;

function setup() {
	noCursor();
	createCanvas(windowWidth, windowHeight);
	background(255);
	main = raster(windowWidth, windowHeight, 25);

	// window.addEventListener("keyup", keyPressed.bind(this))

}

function draw() {

	background(0);
	ellipse(mouseX, mouseY, 20, 20);
	fill (255);
	textSize(20);
  	textFont(myFont);

	function keyPressed() {
		console.log(keyCode)
		if (keyCode === 49) {;
		  textSize(30)
		} else if (keyCode === 50) {
			textSize(40)
		} else if (keyCode === 51) {
			textSize(50)
		} else if (keyCode === 52) {
			textSize(60)
		} else if (keyCode === 53) {
			textSize(70)
		} else if (keyCode === 54) {
		textSize(80)
		} else if (keyCode === 55) {
		textSize(90)
		} else if (keyCode === 56) {
		textSize(100)
		} else if (keyCode === 57) {
		textSize(110)
		} else if (keyCode===32){
		textSize(30)
		textFont(myFont1);
		} else if (keyCode===38){
			var mouse = new Posn(mouseX, mouseY);
			main.forEach(elem => {
		elem.applyForce(elem.pos.offset(mouse).mul(0.0001).mul(elem.pos.dist(mouse) * 0.5));
	});
		} else if (keyCode===40){
			var mouse = new Posn(mouseX, mouseY);
			main.forEach(elem => {
		elem.applyForce(elem.pos.offset(mouse).mul(0.1).mul(elem.pos.dist(mouse) * -0.01));
	});
		} else if (keyCode===13){
			var mouse = new Posn(mouseX, mouseY);
			main.forEach(elem => {
				elem.applyForce(elem.pos.offset(mouse).mul(pow(2.1, -(elem.pos.dist(mouse) * 0.04))));
			});
		}
	} keyPressed()
	
	main.forEach(elem => {
		elem.update();
		elem.draw(5);
	});

	raster();
	
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	main = raster(windowWidth, windowHeight, 25);
}

function mousePressed () {
	burst();
	ellipse(mouseX, mouseY, 20, 20);
	fill (0);
}

function mouseDragged () {
	burst();
	ellipse(mouseX, mouseY, 20, 20);
	fill (0);
}

function raster (windowWidth, windowHeight, blockSize) {
	var arr = [];
	
	for (var i = blockSize; i < windowWidth; i += blockSize) {
		for (var j = blockSize; j < windowHeight; j += blockSize) {
			arr.push(new Point(i, j, Math.random().toString(25)[10]));
		}
	}
	
	return arr;
}

function burst () {
var mouse = new Posn(mouseX, mouseY);
	main.forEach(elem => {
		elem.applyForce(elem.pos.offset(mouse).mul(pow(2.1, -(elem.pos.dist(mouse) * 0.04))));
	});
}



function Point (x, y, letter, mass) {
	this.supposed = new Posn(x, y);
	this.pos = new Posn(x, y);
	this.vel = new Posn(5, 5);
	this.acc = new Posn(-5, -5);
	this.lettering = letter != null;
	this.letter = letter;
	this.mass = mass == null ? 1 : mass;
	
	this.draw = (size) => {
		if (this.lettering) {
			text(this.letter, this.pos.x, this.pos.y);
		} else {
			ellipse(this.pos.x, this.pos.y, size, size);
			
		}
	};
	
	this.update = () => {
		this.applyForce(new Posn(random(-0.01, 0.01), random(-0.01, 0.01)));
		this.seek(this.supposed);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.vel.mul(0.95);
		this.acc.mul(0);
	};
	
	this.seek = (target) => {
		this.applyForce(this.pos.offset(target).mul(this.pos.dist(target)).mul(-0.0001));
	};
	
	this.applyForce = (force) => {
		this.acc.add(force);
	}
	
	this.click = (mousePos) => { // click (posn) -> void
		
	};
}

function Posn (x, y) {
	this.x = x;
	this.y = y;
	
	this.get = () => {
		return new Posn(this.x, this.y);
	};
	
	this.apply = (f) => {
		this.x = f(this.x);
		this.y = f(this.y);
		
		return new Posn(this.x, this.y);
	}
	
	this.add = (other) => {
		this.x += other.x;
		this.y += other.y;
		
		return this.get();
	};
	
	this.mul = (c) => {
		this.x *= c;
		this.y *= c;
		
		return this.get();
	}
	
	this.offset = (other) => {
		return new Posn(this.x - other.x, this.y - other.y);
	}
	
	this.dist = (other) => {
		return sqrt(sq(other.x - this.x) + sq(other.y - this.y));
	}
}