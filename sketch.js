// Enzo batuigas
// Final Project CS30

// Bowling Game
// Created with p5play
let state = 0;
let bg;
let player, floor, smiley;
let bricks, tilesGroup;
let score = 0; // Initialize score variable
let scoreText;

function preload(){
	bg = loadImage('assets/bg.png');
}

function setup() {
	p5play.renderStats = true;

    resizeCanvas(windowWidth, windowHeight, 'pixelated');


	world.gravity.y = 10;

	player = new Sprite();
	player.x = 100;
	player.diameter = 50;

	floor = new Sprite(100, 625, 200*200, 40, 'static');

	bricks = new Group();
	bricks.w = 30;
	bricks.h = 20;
	bricks.tile = '=';
	bricks.image = '🍄';


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
    
	scoreText = new Sprite(10, 30, 'static'); // Create a sprite object for the text
	scoreText.scale = 1; // Set text scale
	scoreText.x = 650;
	scoreText.scale.x = 10;

}

function draw() {
    if(state === 0) {
		background(0)
		scoreText.applyForceScaled(0, -10);
		
		if (kb.pressing('space') || mouse.pressing()) {
			state =1;
		}
	}
	else if(state === 1) {


		clear();
		scoreText.fill = 255;
		scoreText.textFont = "Comic Sans MS";
		scoreText.textSize = 32;
		scoreText.text = 'Score: ' + score, 0, 0; // Display the score at the specified position
	
		clear();

		player.image = '😧';
		
		if (player.mouse.hovers()) {
			player.image = '😲';
		} else {
			player.image = '😧';
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
	
		//Check for collisions
		for (let tile of tilesGroup) {
			if (player.overlaps(tile)) {
				score++; //Increment score
				tile.remove(); // Optionally remove the tile to avoid counting it again
			}
		}
	}


}

function windowResized() { 
    resizeCanvas(windowWidth / 2, windowHeight / 2); 
} 