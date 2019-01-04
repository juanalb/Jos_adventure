
 function platform(x, y){
	
	this.x = (x + 75);
	this.y = y;
	this.dX = -2;
	this.width = 160;
	this.height = 30;
	
	this.platformImage = new Image();
	this.platformImage.src = "https://sm2018b12.infhaarlem.nl/Images/jungleTileset/platform1.png";
	
	
	this.drawPlatform = function(){
	
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
	
		context.drawImage(this.platformImage, this.x, this.y, this.width, this.height);
		
	}
	
	this.movePlatform = function(){
		this.x += this.dX;
	}
	
	this.updatePlatform = function(){
		this.movePlatform();
		this.drawPlatform();
	}

}