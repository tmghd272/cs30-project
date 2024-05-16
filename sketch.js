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
let bricks, tilesGroup;

function setup() {
	new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	player = new Sprite(50, 0);
	floor = new Sprite(250, 500, 1000, 40, 'static');

	bricks = new Group();
	bricks.w = 20;
	bricks.h = 10;
	bricks.tile = '=';

	tilesGroup = new Tiles(
		[
			'=====...======...===........====...................',
			'======..======...===..............................',
			'==..==..==.......===..............................',
			'==..==..==.......===..............................',
			'======..=====....===....========...................',
			'=====...======...===..............................',
			'==..........==...===..............................',
			'==..........==...===..............................',
			'==......======...==========.......................',
			'==......=====....==========........................'
		],
		100,
		40,
		bricks.w + 4,
		bricks.h + 4
	);
}

function draw() {
	clear();
	if (key === 'a') {
		player.vel.y = -3;
		player.vel.x = -3;
	} else if (key === 'd') {
		player.vel.y = -7;
		player.vel.x = 3;
	}
	


	camera.x = player.x;

	clear();

	for (let brick of bricks) {
		if (brick.mouse.hovers()) {
			brick.color = '#AA4A44';
		}
	}
}
