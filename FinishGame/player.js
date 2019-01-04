var playerX;
var playerY;
var playerDx;
var playerDy;
var playerWidth;
var playerHeight;
var gravity;
var jumped;
var onPlatform;
var keys = {};




$(document).keydown(function (e) {
	keys[e.which] = true;
});

$(document).keyup(function (e) {
	delete keys[e.which];
});




var player = function(x, y){
	// initialize player variables
	playerX = x;
	playerY = y;
	playerWidth = 40;
	playerHeight = 80;
	playerDx = 0;
	playerDy = 0;
	gravity = 0.1;
	jumped = false;
	onPlatform = false;
	var currentFrame = 0;
	var playerFrame = 0;
	keys = {};
	
	// loading images
	this.playerRunning = new Image();
	this.playerJump = new Image();
	this.playerLand = new Image();
	
	this.playerRunning.src = "https://sm2018b12.infhaarlem.nl/Images/Character/playerRunning.png";
	this.playerJump.src = "https://sm2018b12.infhaarlem.nl/Images/Character/playerJump.png";
	this.playerLand.src = "https://sm2018b12.infhaarlem.nl/Images/Character/playerLanding.png";
	
	
	if(skin == 1){
		this.playerRunning.src = "https://sm2018b12.infhaarlem.nl/Images/Character/playerRunningalt1.png";
		this.playerJump.src = "https://sm2018b12.infhaarlem.nl/Images/Character/playerJumpalt1.png";
		this.playerLand.src = "https://sm2018b12.infhaarlem.nl/Images/Character/playerLandingalt1.png";
	}
	
	this.drawPlayer = function(){
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		// zet rectangle op nieuwe plek
		ctx.fillStyle="#FF0000";
		// placeholder player;
		//ctx.fillRect(playerX,playerY,playerWidth, playerHeight);
		
		if(playerDy > 0.1){
			ctx.drawImage(this.playerLand, playerX, playerY, playerWidth, playerHeight);
		}else if(playerDy < 0){
			ctx.drawImage(this.playerJump, playerX, playerY, playerWidth, playerHeight);
		}else{
			// to compensate for high framerate
			if(playerFrame == 10){
				currentFrame = ++currentFrame % 8;
				playerFrame = 0;
			}
			playerFrame++;
			
			var sheetWidth = 160;
			var sheetHeight = 35;
			var scrW = 21;
			var scrX = currentFrame * scrW;
			
			
			ctx.drawImage(this.playerRunning,scrX, 0, scrW, sheetHeight, playerX, playerY, playerWidth, playerHeight);
			
		}
		//ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
	}
	
	this.checkGravity = function(){
		
		if(playerY >= 700 - playerHeight || onPlatform == true){
			playerDy = 0;
			//playerY = 700 - playerHeight;
			jumped = false;
			
		}
		else{
			playerDy += gravity;
		}
	}
	
	this.playerNextPos = function(){
		
		
		playerX += playerDx;
		if(playerX <= 0){playerX = 1;}
		else if(playerX >= screen_w - playerWidth){playerX = screen_w - playerWidth - 1;}
		playerY += playerDy;
		
	}
	
	
	this.updatePlayer = function(){
		this.checkGravity();
		this.playerKeydetection();
		this.playerNextPos();
		this.drawPlayer();
	}

	this.jump = function(){
		if(!jumped){	
			playerDy = -6;
			jumped = true;
			onPlatform = false;
		}
	}
	
	this.playerKeydetection = function() {
		if(keys[38] == true && playerY > 0){
			// up
			this.jump();
		}
		else if(keys[39] == true && playerX > 0 ){
			// right
			playerDx = 3
		}
		else if(keys[37] == true && (playerX + playerWidth) < 1280 ){
			// left
			playerDx = -4;
		}
		else{
			playerDx = 0;
		}
		
		if(keys[90] == true && partCount >= 5){
			partCount -= 5;
			scoreCount++
			hands.push(new hand(playerX, playerY, i, true))
		}
	}
	
	this.crashWithPlatform = function(otherobj) {
        var myleft = playerX;
        var myright = playerX + (playerWidth);
        var mytop = playerY;
        var mybottom = playerY + (playerHeight);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        
		
        if (myright > otherleft &&
			myleft < otherright &&
			mybottom > othertop &&
			mytop < otherbottom) {
            // colission is happening
			// check if player is jumping
			onPlatform = true;
			if(playerDy > 0){
				playerY = othertop - playerHeight + 5;
				playerDy = 0;
				jumped = false;			
			}				
        }
		else{
			onPlatform = false;
		}
		
    }
	
	this.crashWithEnemy = function(obj) {
        var myleft = playerX;
        var myright = playerX + (playerWidth);
        var mytop = playerY;
        var mybottom = playerY + (playerHeight);
		var left = obj.left;
		var right = obj.right;
		var bottom = obj.bottom;
		var roof = obj.roof;

		
        if (myright > left &&
			myleft < right &&
			mybottom > roof &&
			mytop < bottom) {
            // colission is happening
			gameMusic.pause();

			clearInterval(interval_keydetection);
			clearInterval(interval_draw);
			clearInterval(interval_platforms);
			clearInterval(interval_manageEnemies);
			clearInterval(interval_manageHands); 
			clearInterval(interval_manageHighScore);
			isGamestarted = false;
			
			handCount = playerHand + handCount;
			
			if(score>playerScore){
			$.post('updateFacebookUser.php',{postUser:currentUser.name,postScore:score,postHands:handCount},
				function(data)
				{
				
			});}
			else {
				$.post('updateFacebookUser.php',{postUser:currentUser.name,postScore:playerScore,postHands:handCount},
				function(data)
				{
				
			});
			}
			collectedHands = collectedHands+handCount;
			distance = deadscore;
			
			
			clearStates();
			states[7] = 1;
        }
		
		/*
			(myleft > left && myleft < right ||
			myright < right && myright > left) &&
			(mybottom > roof && mybottom < bottom ||
			mybottom < bottom && mybottom > roof))
		*/

    }
	
}


