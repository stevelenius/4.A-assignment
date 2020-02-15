// 4.A-assignment-memory-game.js
//
// Memory game phase I
// 

// set up some variables for square starting position and size;
// initialize click counter to zero;
// set up empty speed variable (will be assigned a value later)
let rectX = 0;
let rectWidth = 50;
let rectY = 0;
let rectHeight = 50;
let clickCount = 0;
let speed;

// setup
function setup () {
	createCanvas(800, 600);
}
    
// draw
function draw () {
	// light gray background
	background(192);
	// row 1 cards
	rect(20, 20, 110, 160, 10);
	rect(150, 20, 110, 160, 10);
	rect(280, 20, 110, 160, 10);
	rect(410, 20, 110, 160, 10);
	rect(540, 20, 110, 160, 10);
	rect(670, 20, 110, 160, 10);
	// row 2 cards
	rect(20, 200, 110, 160, 10);
	rect(150, 200, 110, 160, 10);
	rect(280, 200, 110, 160, 10);
	rect(410, 200, 110, 160, 10);
	rect(540, 200, 110, 160, 10);
	rect(670, 200, 110, 160, 10);
	// row 3 cards
	rect(20, 380, 110, 160, 10);
	rect(150, 380, 110, 160, 10);
	rect(280, 380, 110, 160, 10);
	rect(410, 380, 110, 160, 10);
	rect(540, 380, 110, 160, 10);
	rect(670, 380, 110, 160, 10);
	// tally area
	rect(20, 560, 760, 20);
	// label tally area
	text('TALLY AREA', 25, 575);
}
	
