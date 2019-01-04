	// statische achtergrond
	var bgImage1 = new Image();
	
	bgImage1.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-1.png";
	
	//eerste helft van plaatjes	
	var bgImage2 = new Image();
	var bgImage3 = new Image();		
	var bgImage4 = new Image();
	var bgImage5 = new Image();	
	
	bgImage2.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-2.png";
	bgImage3.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-3.png";
	bgImage4.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-4.png";
	bgImage5.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-5.png";
	
	// tweede helft van plaatjes
	var bgImage2s = new Image();
	var bgImage3s = new Image();		
	var bgImage4s = new Image();
	var bgImage5s = new Image();

	bgImage2s.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-2.png";
	bgImage3s.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-3.png";
	bgImage4s.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-4.png";
	bgImage5s.src = "https://sm2018b12.infhaarlem.nl/Images/background/plx-5.png";	
	
	var bgX1, bgX2, bgX3, bgX4, bgX5;
	var bgX2s, bgX3s, bgX4s, bgX5s;
	
	bgX1 = 0;
	bgX2 = 0;
	bgX3 = 0;
	bgX4 = 0;
	bgX5 = 0;
	
	bgX2s = 1280;
	bgX3s = 1280;
	bgX4s = 1280;
	bgX5s = 1280;
		
	
	// grond sprites voor bewegende grond;
	var grondImg1 = new Image();
	var grondImg2 = new Image();
	var grondImg3 = new Image();
	
	grondImg1.src = "https://sm2018b12.infhaarlem.nl/Images/jungleTileset/grond.png";
	grondImg2.src = "https://sm2018b12.infhaarlem.nl/Images/jungleTileset/grond.png";
	grondImg3.src = "https://sm2018b12.infhaarlem.nl/Images/jungleTileset/grond.png";
	
	
	var grondX1, grondX2, grondX3;
	
	grondX1 = 0;
	grondX2 = 640;
	grondX3 = 1280;
	
	
	function drawBackground(){
		
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		var width = canvas.getAttribute('width');
		var height = canvas.getAttribute('height');

		context.drawImage(bgImage1, bgX1, 0, width, height);
		
		context.drawImage(bgImage2, bgX2, 0, width, height);
		context.drawImage(bgImage2s, bgX2s, 0, width, height);
		
		context.drawImage(bgImage3, bgX3, 0, width, height);
		context.drawImage(bgImage3s, bgX3s, 0, width, height);
		
		context.drawImage(bgImage4, bgX4, 0, width, height);
		context.drawImage(bgImage4s, bgX4s, 0, width, height);
		
		context.drawImage(bgImage5, bgX5, 0, width, height);
		context.drawImage(bgImage5s, bgX5s, 0, width, height);
		
		
		context.drawImage(grondImg1, grondX1, 700,  640, 59);
		context.drawImage(grondImg2, grondX2, 700,  640, 59);
		context.drawImage(grondImg3, grondX3, 700,  640, 59);
		
		
		bgX2 -= 2;  // was 2, 2, 3, 4 van boven naar beneden
		bgX3 -= 3;
		bgX4 -= 3;
		bgX5 -= 4;
		
		bgX2s -= 2;  // was 2, 2, 3, 4 van boven naar beneden
		bgX3s -= 2;
		bgX4s -= 3;
		bgX5s -= 4;
		
		grondX1 -= 4; // was 2, 2, 2 van boven naar beneden
		grondX2 -= 4;
		grondX3 -= 4;
		
		if(bgX2 <= -1279){bgX2 = 1280; }
		if(bgX3 <= -1279){bgX3 = 1280; }
		if(bgX4 <= -1279){bgX4 = 1280; }
		if(bgX5 <= -1279){bgX5 = 1280; }
		
		if(bgX2s <= -1279){bgX2s = 1280; }
		if(bgX3s <= -1279){bgX3s = 1280; }
		if(bgX4s <= -1279){bgX4s = 1280; }
		if(bgX5s <= -1279){bgX5s = 1280; }
		
		if(grondX1 <= -639){grondX1 = 1280}
		if(grondX2 <= -639){grondX2 = 1280}
		if(grondX3 <= -639){grondX3 = 1280}
	}


