// const fetchHighScores = require('./fetch.js');
// const addHighScores = require("./add.js");
// import {fetchHighScores} from "./fetch.js";
// import {addHighScores} from "./add.js";

// import SupabaseClient from "./node_modules/@supabase/supabase-js/dist/module/SupabaseClient";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// import { supabase } from '@/supabase';
// import(createClient);
// const { createClient } = supabase


// import { createClient } from "@supabase/supabase-js"
// const supabaseUrl = 'https://mclocptznsrsjhomxkyo.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbG9jcHR6bnNyc2pob214a3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyOTg2NDQsImV4cCI6MjAzNTg3NDY0NH0.TwuqIwoGOaAx31XpxA2CVvxu5QWLeRyeyhXHxpt4-yA"
// console.log(supabaseKey);
// console.log("test");
// const supabase = createClient(supabaseUrl, supabaseKey);
// console.log('Supabase Instance: ', supabase);


// let { data: High_Scores, error } = await supabase
//   .from('High_Scores')
//   .select('*')
//   .order('score', { ascending: false });


// import { createClient } from '@supabase/supabase-js'
const { createClient } = supabase
const supabaseUrl = 'https://mclocptznsrsjhomxkyo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbG9jcHR6bnNyc2pob214a3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyOTg2NDQsImV4cCI6MjAzNTg3NDY0NH0.TwuqIwoGOaAx31XpxA2CVvxu5QWLeRyeyhXHxpt4-yA"
const _supabase = createClient(supabaseUrl, supabaseKey)
console.log('Supabase Instance: ', _supabase)
// let { data: High_Scores, error } = await _supabase
//   .from('High_Scores')
//   .select('*')
//   .order('score', { ascending: false });
// const { data, error } = await _supabase
//   .from('High_Scores')
//   .select('*')
//   .order('score', { ascending: false });

async function fetchHighScores() {
	const { data: High_Scores, error } = await _supabase
	.from('High_Scores')
	.select()
	.order('score', { ascending: false });

	if (error) {
		console.error('Error fetching high scores:', error);
		return;
	}
	// console.log(JSON.stringify(High_Scores, null, 2));
	// const High_Scores_String = JSON.stringify(High_Scores, null, 2);
	return High_Scores;
	// return High_Scores_String;
}
/* VARIABLES */
//sprites
let catcher, fallingObject, badFallingObject;
let playButton, directionsButton, backButton, viewLeaderboard, restartButton;
//ints
let score = 0;
let buttonsShown = false;
let highScore = 0;
let screen = 0;
var time;
let newHighScore = false;
let lives = 3;
let level = 1;
let fallingObjectSpeed = 0;
let catcherSpeed = 0;
let wait = 250;
let timeUntilPlay, loadTime;
let fallen = false;
let test = "test";
let myInput;
let myArray = [
	{color1: 'deeppink', color2: 'darkorchid', color3: 'magenta'},
	{color1: 'pink', color2: 'orchid', color3: 'mag'}
]
	;
//images
var backgroundImg;
var catcherImg;
var fallingObjectImg1;
var fallingObjectImg2;
var badFallingObjectImg;
var heartImg;
//colors
let rebeccaPurple = '#6c5190';
let greenColor = '#519053';
var bgColor = '#4ECDC4';
let textColor = '#008080';
let highScoreColor = '#d3eddc';
let highScores;
let firstHighScore;

let ball;


function preload() {
	backgroundImg = loadImage('assets/burritoCat.png');
    backgroundImg = loadImage('/assets/burritoCat.png');
	catcherImg = loadImage('assets/plate.png');
	fallingObjectImg1 = loadImage('assets/tacoCat1.png');
	fallingObjectImg2 = loadImage('assets/tacoCat2.png');
	badFallingObjectImg = loadImage('assets/pugBurger.png');
	heartImg = loadImage('assets/health.png');
}

function setup() {
	// new Canvas(500, 500);
	new Canvas(400, 400);

	// ball = new Sprite();
	// ball.diameter = 50;
	time = millis();
  
	homeScreen();
  
	loadTime = millis();
    // firstHighScore = fetchHighScores()
    // fetchHighScores()
    //     .then(result => {
    //         console.log(result)
    //         console.log(result[1]['id'])
    //         // let hi = result[1]['id']
    //         log(result[1]['id'])
            
    //      })
    // function log(x) {
    //     // document.write(x)
    // }
    
    // console.log(firstHighScore);
    
	// highScores = fetchHighScores();
	// fetchHighScores();
	// firstHighScore = Object.values(highScores);
	// console.log(firstHighScore);

}

function draw() {

	// background('skyblue');

	// if (mouse.presses()) {
	// 	ball.speed = 10;
	// 	ball.moveTo(mouse);
	// }

	// background(127); // grey
//   fill(255, 0, 0); // red
//   noStroke();
//   rectMode(CENTER);
//   rect(width / 2, height / 2, 50, 50);
	if (screen == 0) {
    	if (directionsButton.mouse.pressed()) {
      		screen = 1;
      		directionsScreen();
    	} else if (playButton.mouse.pressed()) {
      		screen = 2;

      		playScreenAssets();
    	}
  	}

  	if (screen == 1) {
    	if (backButton.mouse.pressed()) {
      		screen = 0;
      		backButton.pos = {x: -900, y: -900};
      		homeScreen();
    	}
  	}

    if (screen == 2) {

      //set up screen
      background(bgColor);

      //Draw background image
      image(backgroundImg, 330, 5, 60, 79.711);

      //draw lives
      	if (lives >= 2) {
        	image(heartImg, 140, 5, 50, 39.808);
        		if (lives >= 3) {
          			image(heartImg, 200, 5, 50, 39.808);
          			if (lives >= 4) {
            		image(heartImg, 260, 5, 50, 39.808);
          			}
        		}
     	}

      	if (((millis() - loadTime - timeUntilPlay) > wait) && (!fallen)) {
        	badFallingObject.vel.y = 2;
        	fallen = true;
      	}

      	if (fallingObject.img == fallingObjectImg1) {
     		fallingObject.img.scale = 0.0223;
      	} else if (fallingObject.img == fallingObjectImg2) {
        	fallingObject.img.scale = 0.088;
      	}

      	//If fallingObject reaches bottom, move back to random position at top
      	if (fallingObject.y >= height) {
        	fallingObject.y = 0;
        	fallingObject.x = random(width);
        	fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
        	// score -= 1;
        	lives -= 1;
      	}
        //If badFallingObject reaches bottom, move back to random position at top
        if (badFallingObject.y >= height) {
          	badFallingObject.y = 0;
          	badFallingObject.x = random(width);
          	badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
        }

        //Move catcher
        if (kb.pressing("left")) {
          	catcher.vel.x = -3;
        } else if (kb.pressing("right")) {
          	catcher.vel.x = 3;
        } else {
          	catcher.vel.x = 0;
        }

        //Stop catcher at edges of screen
        if (catcher.x < 50) {
          	catcher.x = 50;
        } else if (catcher.x > 350) {
          	catcher.x = 350;
        }

        //If fallingObject collides with catcher, move back to random position at top
        if (fallingObject.collides(catcher)) {
          	fallingObject.y = 0;
          	fallingObject.x = random(width);
          	fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
          	fallingObject.direction = 'down';
          	score += 1;
        }

        //If badFallingObject collides with catcher, move back to random position at top
        if (badFallingObject.collides(catcher)) {
          	badFallingObject.y = 0;
          	badFallingObject.x = random(width);
          	badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
          	badFallingObject.direction = 'down';
          	// score -= 1;
          	lives -= 1;
        }

        if (fallingObject.collides(badFallingObject)) {
          	fallingObject.direction = 'down';
          	badFallingObject.direction = 'down';
          	print('down');
        }

        //Display score
        textAlign('left', 'bottom');
        textStyle('bold');
        textSize(16);
        fill(textColor);
        text('Score: ' + score, 10, 25);

        if (score >= highScore && score !== 0) {
          	fill(highScoreColor);
          	highScore = score; 
          	if (newHighScore == false) {
            	newHighScore = true;
          	}
        } else {
          	fill(textColor);
        }

        if (fallingObject.collides(badFallingObject)) {
          	fallingObject.direction = 'down';
          	badFallingObject.direction = 'down';
          	print('down');
        }

        text('High Score: ' + highScore, 10, 45);

        fill(textColor);
        text('Level ' + level, 10, 65);

        console.log('Level = ' + level);

        fallingObject.direction = 'down';
        badFallingObject.direction = 'down';

        checkLevel();


        //Create lose state
        if (lives < 1) {
          	catcher.x = 500;
          	fallingObject.y = -500;
          	badFallingObject.x = -500;
          	
			if (buttonsShown == false) {

				background(bgColor);
          		textSize(30);
          		textAlign('center');
          		fill(textColor);
          		text('You lost!', 200, 200);

          		textSize(15);
          		textStyle('normal');
          		fill(highScoreColor);
          		text('Click anywhere to play again', 200, 220);

        		textSize(18);
          		textStyle('bold');
          		fill(textColor);
        		text('Your score:\n'+ score, width/2 - 100, height/2 + 90)

        		text('Your high\n score:\n'+ highScore, width/2 + 100, height/2 + 100)

        		if (newHighScore == true) {
            		fill(highScoreColor);
            		text('NEW HIGH SCORE', width/2, height/2 + 140);
          		}

		  		restartButton.x = width/2 - 100;
		  		restartButton.y = height/2 - 100;

		  		viewLeaderboard.x = width/2 + 100;
		  		viewLeaderboard.y = height/2 - 100;
				buttonsShown = true;
				// restart();
			}
        	restart();
        }
			
        // youWin();

    }

	if (screen == 3) {

		catcher.x = 500;
		fallingObject.y = -500;
		badFallingObject.x = -500;
		restartButton.x = 1000;
		restartButton.y = 1000;
		viewLeaderboard.x = 1500;
		viewLeaderboard.y = 1500;
		background(bgColor);
		fill(textColor);
		textSize(40);
		textStyle('bold');
		textAlign(CENTER);
		stroke(highScoreColor);
		strokeWeight(2);
		text("Leaderboard" , 200, 70);

        fetchHighScores()
        .then(result => {
            console.log(result)
            console.log(result[1]['initals'])

            // let hi = result[1]['id']
            // log(result[1]['initals'])
            window.initals2 = result[1]['initals']
            window.initals3 = result[2]['initals']
            window.initals4 = result[3]['initals']
            window.initals5 = result[4]['initals']
            window.initals6 = result[5]['initals']

            window.score2 = result[1]['score']
            window.score3 = result[2]['score']
            window.score4 = result[3]['score']
            window.score5 = result[4]['score']
            window.score6 = result[5]['score']
            // text(result[1]['initals'], 150, 200);
        
        })
        function log(x) {
            // document.write(x)
            // text(x, 150, 200);
            // window.value = x
        }
		
		text("1", 50, 150);
		text("2", 50, 200);
		text("3", 50, 250);
		text("4", 50, 300);
		text("5", 50, 350);
		// text("6", 50, 350);
		// text("7", 50, 340);
		// text("8", 50, 100);
		// text("9", 50, 100);
		// text("10", 50, 100);
		fill(highScoreColor);
		strokeWeight(0);
		text("LSD", 150, 150);
        text(window.initals2, 150, 200);
		// text("AAA", 150, 200);
        text(window.initals3, 150, 250);
		// text("BBB", 150, 250);
        text(window.initals4, 150, 300);
		// text("CCC", 150, 300);
        text(window.initals5, 150, 350);
		// text("DDD", 150, 350);
		
		fill(textColor);
		text("1000000", 300, 150);
        text(window.score2, 300, 200);
		// text("0000000", 300, 200);
        text(window.score3, 300, 250);
		// text("0000000", 300, 250);
        text(window.score4, 300, 300);
		// text("0000000", 300, 300);
        text(window.score5, 300, 350);
        myInput = createInput('AAA');
        myInput.position(0, 400);
        myInput.size(394, 50)
        let msg = myInput.value();
        text(msg, 200, 375);
		// text("0000000", 300, 350);
		// print(data);
		// highScores = fetchHighScores();
		// console.log(highScores);
		// firstHighScore = highScores[0].initials;
		
		// print(myArray[0].color1);
		// print(JSON.stringify(highScores, null, 2));

		// print(High_Scores)
		// print(fetchHighScores().High_Scores)
	}
    //   //set up screen
    //   background(bgColor);
    //   //Draw background image
    //   image(backgroundImg, 280, 5);

    //   fill(textColor);
    //   textSize(12);
    //   // Draw directions to screen
    //   textAlign('right', 'baseline');
    //   text("Move the plate \n with the left and \n right arrow keys \n to catch the taco \n cats and avoid \n the imposters", width-10, 20);


      //debug
      // allSprites.debug = mouse.pressing();

}

function restart() {


	if (restartButton.mouse.pressed()) {
	  	restartButton.x = 1000;
	  	restartButton.y = 1000;
	  	viewLeaderboard.x = 1500;
	  	viewLeaderboard.y = 1500;
	  	score = 0;
	  	lives = 3;
	  	level = 1;
	  	fallingObjectSpeed = 0;
	  	catcherSpeed = 0;
	  	newHighScore = false;
	  	catcher.x = 200;
	  	catcher.y = 370;
	  	fallingObject.y = 0;
	  	fallingObject.x = random(width);
	  	fallingObject.vel.y = 2;
	  	fallingObject.direction = 'down';
	  	badFallingObject.y = 0;
	  	badFallingObject.x = random(width);
	  	badFallingObject.color = color(0,128,128);
	  	badFallingObject.vel.y = 2;
	  	badFallingObject.direction = 'down';
		background(bgColor);
	} else if (viewLeaderboard.mouse.pressed()) {
		// restartButton.color = rebeccaPurple;
		screen = 3;



	}
  }

function youWin() {
	//Create win state
	if (score > 5) {
	  	catcher.x = 500;
	  	fallingObject.y = -500;
	  	badFallingObject.x = -500;
	  	background(bgColor);
	  	textSize(30);
	  	textAlign('center');
	  	fill(highScoreColor);
	  	text('You win!', 200, 200);
  
	  	textSize(15);
	  	textStyle('normal');
	  	fill(textColor);
	  	text('Click anywhere to play again', 200, 220);
	  	restart();
	}
}

function homeScreen() {
	background(bgColor);
  
	fill(textColor);
	textSize(40);
	textStyle('bold');
	textAlign(CENTER);
	stroke(highScoreColor);
	strokeWeight(2);
	text("Taco Cat Catcher", width/2, height/2 - 80);
  
	textStyle('normal');
	noStroke();
  
	//navigationButtons
	directionsButton = new Sprite(width/2 - 100, height/2 + 50, 100, 70, 'k');
	directionsButton.color = textColor;
	directionsButton.text = "How to Play";
	directionsButton.textSize = 16;
	directionsButton.textColor = highScoreColor;
	directionsButton.stroke = highScoreColor;
	directionsButton.strokeWeight = 3;
  
	playButton = new Sprite(width/2 + 100, height/2 + 50, 100, 70, 'k');
	playButton.color = textColor;
	playButton.text = "Play";
	playButton.textSize = 16;
	playButton.textColor = highScoreColor;
	playButton.stroke = highScoreColor;
	playButton.strokeWeight = 3;

	restartButton = new Sprite(width/2 - 100, height/2 - 100, 110, 70, 'k');
	restartButton.color = textColor;
	restartButton.text = "Restart";
	restartButton.textSize = 16;
	restartButton.textColor = highScoreColor;
	restartButton.stroke = highScoreColor;
	restartButton.strokeWeight = 3;

	viewLeaderboard = new Sprite(width/2 + 100, height/2 - 100, 110, 70, 'k');
	viewLeaderboard.color = textColor;
	viewLeaderboard.text = "View \nLeaderboard";
	viewLeaderboard.textSize = 16;
	viewLeaderboard.textColor = highScoreColor;
	viewLeaderboard.stroke = highScoreColor;
	viewLeaderboard.strokeWeight = 3;

	restartButton.x = 1000;
	restartButton.y = 1000;

	viewLeaderboard.x = 1000;
	viewLeaderboard.y = 1000;
}

function directionsScreen() {
	background(bgColor);
	playButton.pos = {x: -600, y: -600};
	directionsButton.pos = {x: -800, y: -800};
  
	backButton = new Sprite(width/2, height/2 + 80, 100, 70, 'k');
	backButton.color = textColor;
	backButton.text = "Home";
	backButton.textSize = 16;
	backButton.textColor = highScoreColor;
	backButton.stroke = highScoreColor;
	backButton.strokeWeight = 3;
  
	fill(textColor);
	stroke(highScoreColor);
	strokeWeight(2);
	textSize(40);
	textStyle('bold');
	textAlign(CENTER);
	text("How to Play", width/2, height/2 - 100);
  
	textStyle('normal');
	noStroke();
  
	// Draw directions to screen
	rectMode(CENTER);
	fill(textColor);
	textSize(18);
	textAlign(CENTER);
	text("Move the plate with the left and right arrow keys to catch the taco cats and avoid the imposters", width/2, height/2 - 20, 300, 100);
}

function playScreenAssets() {
	timeUntilPlay = millis();
	playButton.pos = {x: -600, y: -600};
	directionsButton.pos = {x: -800, y: -800};
  
	//Create catcher 
	catcher = new Sprite(catcherImg, 200, 370, 80, 50, 'k');
	catcher.color = color(95,158,160);
	catcher.img.scale = 0.1563;
  
	//Create falling objects
	fallingObject = new Sprite(fallingObjectImg1, 100, 0, 45, 42);
	// fallingObject.color = color(0,128,128);
	// fallingObject.img.scale = 0.0223;
	fallingObject.vel.y = 2;
	fallingObject.rotationLock = true;
  
	//TO-DO: figure out if I can delay the creation of this sprite for a few secs
	badFallingObject = new Sprite(badFallingObjectImg, 150, -20, 35, 40);
	badFallingObject.color = color(0,128,128);
	badFallingObject.img.scale = 0.09;
  
	badFallingObject.rotationLock = true;  
}

function checkLevel() {
	if (score % 5 == 0 && score !== 0) {
	  	if (level !== score/5 + 1) {
	    	level = score/5 + 1;
	    	fallingObjectSpeed += 0.25;
	    	console.log('increased speed to ' + fallingObjectSpeed);
	  	}
  
	  // console.log('increased speed to ' + fallingObjectSpeed);
	  // checkLevelLoop += 1
	  // console.log(checkLevelLoop);
	  // if (checkLevelLoop % 2 !== 0) {
	    // console.log('checkLevelLoop is odd');
	    // fallingObjectSpeed += 0.05;
	  // } else if (checkLevelLoop % 2 === 0) {
	    // console.log('checkLevelLoop is even');
	    // catcherSpeed += 0.10;
	  // }
	}
}

function mousePressed() {
	  console.log(`I am here at ${mouseX}:${mouseY}`);
	// addHighScores("LSD", 10);
}