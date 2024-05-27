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


let player, floor, smiley;
let bricks, tilesGroup;

function setup() {

	new Canvas(windowWidth, windowHeight);
	p5play.renderStats = true;
	world.gravity.y = 10;
	player = new Sprite();
	player.x = 10
	player.diameter = 50;
	player.image = '😧';

	floor = new Sprite(250, 500, 2000, 40, 'static');


	let smileText = `
..yyyyyy
.yybyybyy
yyyyyyyyyy
yybyyyybyy
.yybbbbyy
..yyyyyy`;

	smiley = new Sprite();
	smiley.img = spriteArt(smileText, 25);
	smiley.image = '👺';

	bricks = new Group();
	bricks.w = 20;
	bricks.h = 10;
	bricks.image = '👺';
	bricks.tile = '=';

	tilesGroup = new Tiles(
		[
			'=====...======...===........====...................',
			'======..======...===..............................',
			'==..==..==.......===..............................',
			'==..==..==.......===..............................',
			'======..=====....===........====...................',
			'=====...======...===..............................',
			'==..........==...===..............................',
			'==..........==...===..............................',
			'==......======...==========.......................',
			'==......=====....==========........................'
		],
		10,
		40,
		bricks.w + 4,
		bricks.h + 4,
	);
}

function draw() {
	clear();
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
	camera.x = mouseX
	camera.y = mouseY
	// camera.x = player.x;
	// camera.y = player.y;

	clear();

	for (let brick of bricks) {
		if (brick.mouse.hovers()) {
			brick.color = random(255);
		}
	}
}
