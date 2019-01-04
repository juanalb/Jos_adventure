 function enemy(x, y){
	
	this.x = (x + 75);
	this.y = y;
	this.dX = -5;
	this.width = 200;
	this.height = 200;
	
	this.left = 0;
	this.right = 0;
	this.roof = 0;
	this.bottom = 0;
	
	this.enemyImage = new Image();
	this.enemyImage.src = "https://sm2018b12.infhaarlem.nl/Images/Enemies/enemy1.png";
	
	this.currentFrame = 0;
	this.enemyFrame = 0;
	
	this.drawEnemy = function(){
	
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		
		// to compensate for high framerate
		if(this.enemyFrame == 10){
			this.currentFrame = ++this.currentFrame % 11;
			this.enemyFrame = 0;
		}
		this.enemyFrame++;
			
		this.sheetWidth = 1056;
		this.sheetHeight = 96;
		this.scrW = 96;
		this.scrX = this.currentFrame * this.scrW;
		
		//context.fillStyle="#FF0000";
		//context.fillRect(this.x + 40, this.y +80, this.width - 80, this.height - 130); 
		context.drawImage(this.enemyImage,this.scrX, 0, this.scrW, this.sheetHeight, this.x, this.y, this.width, this.height);
	}
	
	this.setHitbox = function(){
		this.left = this.x + 40;
		this.right =  this.left + this.width - 80;
		this.roof = this.y + 80;
		this.bottom =  this.roof + this. height - 130;
	}
	
	this.moveEnemy = function(){
		this.x += this.dX;
	}
	
	this.updateEnemy = function(){
		this.moveEnemy();
		this.setHitbox();
		this.drawEnemy();
	}

}