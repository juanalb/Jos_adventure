var score = 0; 
var scoreHolder = new Image();
scoreHolder.src =  "https://sm2018b12.infhaarlem.nl/Images/Button/Blank/BlankText (1).png";

function highscore(x, y)
{
	this.scoreX = x;
	this.scoreY = y;
	
	this.drawScore = function()
	{
					
			var canvas = document.getElementById("myCanvas");
			var context = canvas.getContext("2d");
			context.drawImage(scoreHolder, this.scoreX, this.scoreY, 188, 96); 
	
			context.font = "20px Consolas"; 
			context.fillStyle = "Black"; 
			context.fillText("SCORE: " + score , this.scoreX + 24, this.scoreY + 53);
	}
	
	this.addScore = function(){
		score++
	}
}

