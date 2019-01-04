var scoreCount = 0; 
var handCount = 0;

function hand(x, y, place, playerDrop) {
	this.x = x;
	this.y = y;
	this.width = 60;
	this.height = 60;
	this.place = place; 
	
	this.startx = x; 
	this.starty = y;
	this.dx = -2;
	this.dy = 0;
	
	this.isCollected = false; 
		
	this.handImage = new Image();
	this.handImage.src =  "https://sm2018b12.infhaarlem.nl/Images/Elements/Icons/spr_hand_strip12.png";	
	this.partImage = new Image();
	this.partImage.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Icons/onderdelen.png";
	
	this.updateHands = function() {
		this.moveInSwirl(); 
		this.moveHand(); 
		this.checkCollisionPlayer(); 
		this.drawHands();
	}

	this.drawHands = function()
	{		
			var canvas = document.getElementById("myCanvas");
			var context = canvas.getContext("2d");
			
			if(playerDrop == false){
				context.drawImage(this.partImage, this.x, this.y, this.width, this.height); 			
			}else{
				context.drawImage(this.handImage, this.x, this.y, this.width, this.height);
			}
	}
	
	this.moveHand = function()
	{
		this.x += this.dx;
		this.y += this.dy; 
	}
	
	this.moveInSwirl = function()
	{
		if(this.x < this.startx - (100 * place))
		{
			if(this.dy == 0){this.dy = -1;}
			
			if(this.y >= this.starty + 20 )
			{
				this.dy = -1;
			}else if(this.y <= this.starty - 20){
				this.dy = 1;
			}
			
		}
	}
	
	this.checkCollisionPlayer = function() {
        var left = playerX;
        var right = playerX + (playerWidth);
        var roof = playerY + (playerHeight);
        var bottom = playerY;

		var hLeft = this.x;
		var hRight = this.x +  this.width;
		var hBottom = this.y +  this.height;
		var hRoof =  this.y;
		if(playerDrop == false){	
			if ((left > hLeft && left < hRight ||
				right < hRight && right > hLeft) &&
				(bottom > hRoof && bottom < hBottom ||
				bottom < hBottom && bottom > hRoof)) {		
					this.isCollected = true;
					partCount += 1;
			}
		}


    }
}
