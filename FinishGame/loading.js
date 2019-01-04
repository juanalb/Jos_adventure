
$(document).ready(function(){
			
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var width = canvas.getAttribute('width');
	var height = canvas.getAttribute('height');
		
	//
	var bgImage = new Image();
	var loadingBarBG = new Image();
	var loadingBarBar = new Image();
	var loadingBarTitle = new Image();
	var loadingBarChar = new Image();
	var loadingTextFieldBG = new Image();
	var loadingTextFieldFG = new Image();
	//
	bgImage.src = "https://sm2018b12.infhaarlem.nl/Images/BG/Landscape.png";
	loadingBarBG.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Preloader/BG.png";
	loadingBarBar.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Preloader/Bar.png";
	loadingBarTitle.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Preloader/Title.png";
	loadingBarChar.src = "https://sm2018b12.infhaarlem.nl/Images/Character/sprites/run.gif";
	loadingTextFieldBG.src = "https://sm2018b12.infhaarlem.nl/Images/Window/5/BGnoHeader.png";
	loadingTextFieldFG.src = "https://sm2018b12.infhaarlem.nl/Images/Window/5/FG.png";
	//		
	window.onload = function(){
		context.drawImage(bgImage, 0, 0, 1280, 759);
		context.drawImage(loadingBarBG, 146, 25, 971, 141);	
		context.drawImage(loadingBarTitle, 578, 47, 95, 24);		
		// de volgende 2 items moeten bewegen tijdens het laden
		context.drawImage(loadingBarBar, 166, 96, 539, 31);	
		context.drawImage(loadingBarChar, 716, 91, 27, 43);		
		// hierboven zijn 2 dingen die werkend moeten
		context.drawImage(loadingTextFieldBG, 255, 187, 741, 516);
		context.drawImage(loadingTextFieldFG, 343, 235, 561, 423);
		
	}
});