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
let bg;
let player, floor, smiley;
let bricks, tilesGroup;

function setup() {

	// new Canvas(windowWidth, windowHeight, "pixelated x2");
	new Canvas(windowWidth, windowHeight, 'pixelated');

	bg = loadImage('assets/bg.png');

	p5play.renderStats = true;
	world.gravity.y = 10;
	player = new Sprite();
	player.x = 10
	player.diameter = 50;
	player.image = '😧';

	floor = new Sprite(100, 725, 2000, 40, 'static');


	let smileText = `
..yyyyyy
.yybyybyy
yyyyyyyyyy
yybyyyybyy
.yybbbbyy
..yyyyyy`;

	smiley = new Sprite();
	smiley.img = spriteArt(smileText, 25);
	smiley.image = '🍄';

	bricks = new Group();
	bricks.w = 20;
	bricks.h = 10;
	bricks.image = '👺';
	bricks.tile = '=';

	tilesGroup = new Tiles(
		[
			'=====...======...=====...==........==.............',
			'======..======...======..==......======...........',
			'==..==..==.......==..==..==......==..==...........',
			'==..==..==.......==..==..==......==..==...........',
			'======..=====....======..==......======...........',
			'=====...======...=====...==......======...........',
			'==..........==...==......==......==..==...........',
			'==..........==...==......==......==..==...........',
			'==......======...==......======..==..==...........',
			'==......=====....==......======..==..==...........'
		],
		10,
		40,
		bricks.w + 4,
		bricks.h + 4,
	);
}

function draw() {

	clear();

	if (player.mouse.hovers()) {
		player.image = '😲';
		// player = loadAni('assets/guy.png', 11);
	}


	for (let brick of bricks) {
		if (brick.mouse.hovers()) {
			brick.image = '😈';
		}
	}

	if (keyIsDown(65) === true) {
		player.vel.y = -3;
		player.vel.x = -3;
	  }
	
	  if (keyIsDown(68) === true) {
		player.vel.y = -3;
		player.vel.x = 3;
	  }
	
	  if (keyIsDown(83) === true) {
	  player.vel.y = 0;
	  player.vel.x = 25;
	  }
	
	  if (keyIsDown(87) === true) {
	  player.vel.y = 0;
	  player.vel.x = -25;
    }
	if (mouseIsPressed === true) { // Mouse camera movement
		camera.x = mouseX
	    // camera.y = mouseY
	}   else {
		camera.x
	    camera.y
	}
	if (keyIsDown(38) === true) {
		camera.y--
	  }
	if (keyIsDown(40) === true) {
		camera.y++
	  }
	  if (keyIsDown(37) === true) {
		camera.x--
	  }
	  if (keyIsDown(39) === true) {
		camera.x++
	  }
	// camera.x = player.x;
	// camera.y = player.y;

	
	// clear();
	
	// // keyboard animation
	// player.stop();
	// if (kb.presses('w')) player.frame = 1;
	// if (kb.presses('a')) player.frame = 3;
	// if (kb.presses('s')) player.frame = 5;
	// if (kb.presses('d')) player.frame = 10;

	// animation(player, 250, 80);
}

// let ani;

// function setup() {
// 	new Canvas(500, 160);

// 	ani = loadAni('assets/asterisk_explode0001.png', 11);
// }

// function draw() {
// 	clear();
	
// 	// keyboard animation
// 	ani.stop();
// 	if (kb.presses('w')) ani.frame = 1;
// 	if (kb.presses('a')) ani.frame = 3;
// 	if (kb.presses('s')) ani.frame = 5;
// 	if (kb.presses('d')) ani.frame = 10;

// 	animation(ani, 250, 80);
// }