
var gameMusic= new Audio("https://sm2018b12.infhaarlem.nl/Music/gameMusic.mp3");
//hint bijenhouder
var fusionHint=false;

//$(document).ready(function(){	
	
	var screen_w;
	var screen_h;
	
	var keys = {};
	var platforms = [];
	var enemies = [];
	var hands = [];
			
	var interval_keydetection;
	var interval_draw;
	var interval_platforms;
	var interval_manageEnemies;
	var interval_manageHands; 
	var interval_manageHighScore;
	
	var handCounter1;
	var player1;
	var gameHasEnded;
	var score;
	var partCount;
	var scoreCount;
	var score1;
	
		
	
	function initGame(){
		screen_w = 1280;
		screen_h = 759;
	
		keys = {};
		platforms = new Array();
		enemies = new Array();
		hands = new Array();
	
		gameHasEnded = false;
		
		//gameMusic
		//gameMusic.play();
		
		// player
		player1 = new player(100, 100);
		//score
		score1 = new highscore(1080, 10);
		// handCounter
		handCounter1 = new handCounter(800, 10); 
		partCounter1 = new handCounter(600,10);
		gameText1 = new gameText(10, 10); 
		
		//reset scores
		partCount = 0;
		scoreCount = 0;
		score = 0;
		
		// set intervals/refresh
		interval_draw = setInterval(draw, 10); 
		interval_platforms = setInterval(managePlatforms, 5000);
		interval_manageEnemies = setInterval(manageEnemies, 3000);
		interval_manageHands = setInterval(manageHands, 10000);
		interval_manageHighScore = setInterval(manageHighScore, 200);
		
	}
	
	
	function wipe()
	{
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		// wipe screen
		ctx.fillStyle="#FFFFFF";
		ctx.fillRect(0,0, screen_w, screen_h);
	}
			
	function draw(){
		
		
		// wipescreen
		wipe();
		// draw background
		drawBackground();
		// draw platforms
		drawPlatforms();
		// draw enemies
		drawEnemies();
		// check collision
		checkCollision();
		//check collected hand
		checkCollected(); 
		//draw hands
		drawHands();
		// draw player
		player1.updatePlayer();
		// draw score
		score1.drawScore(); 
		//draw hands; 
		handCounter1.updateScore(scoreCount, true);
		//score updaters
		partCounter1.updateScore(partCount, false);
		//hintchecken en printen
		printHint();
		//manage Difficulty
		manageDifficulty();
	}
	
	function clearAllIntervals(){
		//clear all intervals befor asigning a new one
			clearInterval(interval_keydetection);
			clearInterval(interval_draw);
			clearInterval(interval_platforms);
			clearInterval(interval_manageEnemies);
			clearInterval(interval_manageHands);
	}
	
	function manageDifficulty(){
		
		
		switch(score){
			case 200:
			
				clearAllIntervals();
				interval_draw = setInterval(draw, 9); 
				interval_platforms = setInterval(managePlatforms, 4500);
				interval_manageEnemies = setInterval(manageEnemies, 2700);
				interval_manageHands = setInterval(manageHands, 9000);
				break;
				
			case 500:
				clearAllIntervals();
				interval_draw = setInterval(draw, 8); 
				interval_platforms = setInterval(managePlatforms, 4000);
				interval_manageEnemies = setInterval(manageEnemies, 2400);
				interval_manageHands = setInterval(manageHands, 8000);
				break;
			case 1000:
				clearAllIntervals();
				interval_draw = setInterval(draw, 7); 
				interval_platforms = setInterval(managePlatforms, 3500);
				interval_manageEnemies = setInterval(manageEnemies, 2100);
				interval_manageHands = setInterval(manageHands, 7000);
				break;
			case 2000:
				clearAllIntervals();
				interval_draw = setInterval(draw, 6); 
				interval_platforms = setInterval(managePlatforms, 3000);
				interval_manageEnemies = setInterval(manageEnemies, 1800);
				interval_manageHands = setInterval(manageHands, 6000);
			break;
			

		}
	
	
	}
	
	function printHint(){
			if(partCount>4&&!fusionHint){
				gameText1.updateScore("press Z to fuse a new hand from the parts you collected");
			}
		}
	
	function drawHands() {
		var i;
		for(i = 0; i < hands.length; i++){	
			hands[i].updateHands();	
		}
	}
	
	function drawEnemies(){
		var i;
		for(i = 0; i < enemies.length; i++){	
			enemies[i].updateEnemy();	
		}
	}
	
	function manageHighScore(){
		score1.addScore();
	}
	
	function manageEnemies(){
		
		var hoogte = Math.floor((Math.random() * 4) + 1);
		
		switch(hoogte){
			case 1:
				enemies.push(new enemy(screen_w, 530));
				break;
			case 2:
				enemies.push(new enemy(screen_w, 380));
				break;
			case 3:
				enemies.push(new enemy(screen_w, 230));
				break;
			case 4:
				enemies.push(new enemy(screen_w, 80));

		}
		
		var i;
		for(i =0; i< enemies.length; i++){
			if(enemies[i].x < -enemies[i].width){
				enemies.splice(i, 1);
			}
		}
	}
	
	function manageHands(){
		var y = Math.floor((Math.random() * 4) + 1);
		
		switch(y){
			case 1:
				multipleHands(screen_w, 620);
				break;
			case 2: 
				multipleHands(screen_w, 440);
				break;
			case 3: 
				multipleHands(screen_w, 310);
				break;
			case 4: 
				multipleHands(screen_w, 150);
				break;
	
			var i;
			
			for(i =0; i< hands.length; i++){
				if(hands[i].x < -hands[i].width){
					hands.splice(i, 1);
				}
			}
		}
	}
	
	function multipleHands(x, y){
		for(i =0; i < 5; i++){
			hands.push(new hand(x + (i * 100), y, i, false));
		}
	}
	
	function checkCollected(){
		for(i = 0; i < hands.length; i++){
			if(hands[i].isCollected || hands[i].x < -50)
			{
				hands.splice(i, 1); 
			}
		}	
	}
	
	
	function drawPlatforms(){
		var i;
		for(i = 0; i < platforms.length; i++){	
			platforms[i].updatePlatform();	
		}
	}
	
	function managePlatforms(){
		platforms.push(new platform(screen_w, 550));
		platforms.push(new platform(screen_w + 500, 400));
		platforms.push(new platform(screen_w, 250));
		
		var i;
		for(i =0; i< platforms.length; i++){
			if(platforms[i].x < -platforms[i].width){
				platforms.splice(i, 1);
			}
		}
	
	}
	
	function checkCollision(){
		var i;
		for(i =0; i< platforms.length; i++){
			player1.crashWithPlatform(platforms[i]);
		}
		
		for(i =0; i< enemies.length; i++){
			player1.crashWithEnemy(enemies[i]);
		}
	}
	
	
	$(document).keydown(function (e) {
		keys[e.which] = true;
	});

	$(document).keyup(function (e) {
		delete keys[e.which];
	});
		
	
//});	