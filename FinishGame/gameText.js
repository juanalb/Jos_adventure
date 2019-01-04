function gameText(x, y)
{
	this.holderX = x;
	this.holderY = y;
	
	this.scoreHolder = new Image();
	this.scoreHolder.src =  "https://sm2018b12.infhaarlem.nl/Images/Window/7/ContentArea.png";
	
	this.updateScore = function(input)
	{
			var canvas = document.getElementById("myCanvas");
			var context = canvas.getContext("2d");
			
			
			context.drawImage(this.scoreHolder, this.holderX, this.holderY, 300, 200);
			info = textsplitser(input,150);
			context.font = "20px Consolas"; 
			context.fillStyle = "Black"; 
			//context.fillText(info, this.holderX + 10, this.holderY + 33);
			fillTextMultiLine(context,info,this.holderX+10,this.holderY+33);
	}
}