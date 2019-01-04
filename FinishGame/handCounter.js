
function handCounter(x, y)
{
	this.holderX = x;
	this.holderY = y;
	
	this.scoreHolder = new Image();
	this.scoreHolder.src =  "https://sm2018b12.infhaarlem.nl/Images/Button/Blank/BlankText (1).png";

	this.handImage = new Image(); 
	this.handImage.src =  "https://sm2018b12.infhaarlem.nl/Images/Elements/Icons/spr_hand_strip12.png";

	this.partImage = new Image();
	this.partImage.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Icons/onderdelen.png";
	
	this.updateScore = function(valuec, isHand)
	{
			var canvas = document.getElementById("myCanvas");
			var context = canvas.getContext("2d");
			
			
			context.drawImage(this.scoreHolder, this.holderX, this.holderY, 188, 96);
			if(isHand == true){
				context.drawImage(this.handImage, this.holderX + 15, this.holderY + 10, 60, 60);
			}else{
				context.drawImage(this.partImage, this.holderX + 25, this.holderY + 15, 60, 60);
			}
			context.font = "20px Consolas"; 
			context.fillStyle = "Black"; 
			context.fillText(valuec, this.holderX + 100, this.holderY + 53);
	}
}

