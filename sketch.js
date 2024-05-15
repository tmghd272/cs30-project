// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(100,100,100);

//   circle(mouseX, mouseY, 50);
//   console.log(mouseX, mouseY);
// }

let player, floor;

function setup() {
	new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	player = new Sprite(50, 0);
	floor = new Sprite(250, 500, 'Infinity', 40, 'static');
}

function draw() {
	clear();
	if (mouse.presses()) {
		player.vel.y = -4;
		player.vel.x = 3;
	}

	camera.x = player.x;
}