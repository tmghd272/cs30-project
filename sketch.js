let bg;
let player, floor, smiley;
let bricks, tilesGroup;
let score = 0; // Step 1: Initialize score variable

function setup() {

	// Step 4: Display the score
	fill(255); // Ensure text color is set to white
	textSize(32); // Set text size
	text('Score: ' + score, 10, 30); // Display the score at the specified position
	


	new Canvas(windowWidth, windowHeight, 'pixelated');

	bg = loadImage('assets/bg.png');

	p5play.renderStats = true;
	world.gravity.y = 10;
	player = new Sprite();
	player.x = 100;
	player.diameter = 50;
	player.image = '😧';

	floor = new Sprite(100, 725, 200*200, 40, 'static');

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

	bricks.w = 30;
	bricks.h = 20;
	bricks.image = '♟';
	bricks.tile = '=';

	let startX = 1000; // New starting x position
	let startY = 310; // New starting y position

	tilesGroup = new Tiles(
		[
			'.........==.......................................',
			'........====......................................',
			'.......======.....................................',
			'......========....................................',
			'.....==========...................................',
			'....============..................................',
			'...==============.................................',
			'..================................................',
			'.==================...............................',
			'====================...............................'
		],
		startX, // Adjust starting x position
		startY, // Adjust starting y position
		bricks.w + 4,
		bricks.h + 4,
	);
}

function draw() {
	clear();

	if (player.mouse.hovers()) {
		player.image = '😲';
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

	if (mouseIsPressed === true) {
		camera.x = mouseX;
	} else {
		camera.x;
		camera.y;
	}
	if (keyIsDown(38) === true) {
		camera.y--;
	}
	if (keyIsDown(40) === true) {
		camera.y++;
	}
	if (keyIsDown(37) === true) {
		camera.x--;
	}
	if (keyIsDown(39) === true) {
		camera.x++;
	}

	// Step 2: Check for collisions
	for (let tile of tilesGroup) {
		if (player.overlaps(tile)) {
			score++; // Step 3: Increment score
			tile.remove(); // Optionally remove the tile to avoid counting it again
		}
	}

}
