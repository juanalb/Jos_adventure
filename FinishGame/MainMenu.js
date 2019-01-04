// player stats uit db
	var playerHand = 0;
	var playerScore = 0;
	var playerName = "";

//
		var isGamestarted;
//buttons 
//[0]dropdown, [1] sound ,[2]play, [3]leaderboard, [4]info, [5]shop, [6]twit, [7]facebook,[8] close [9]btnLeft , 
//[10]btnRight [11] shopCLose[12] infoClose [13] addHands [14] gameOverShare, [15] Gameoverrestart
//[16]btShopPurchase
		var buttonX = [0,0,333,489,646,796,1188,1096,753,330,845,400,843,770,529,652,540,871,780];
		var buttonY = [0,0,441,441,441,441,0,0,109,360,360,84,160,30,506,506,602,150,145];
		var buttonWidth = [91,91,150,150,150,150,91,91,91,107.8,107.8,107.8,107.8,80,91,91,194,60,65];
		var buttonHeight = [100,100,164,164,164,168,100,100,100,117.6,117.6,117.6,117.6,80,100,100,99,60,65];
//screens that can be rendered
// [0] main, [1] high ,[2] shop,[3] info,[4] loading,5[game]6[getHands]7[gameOver]
		var states =[1,0,0,0,0,0,0,0,0];
		
//used by song		
		//var song = new sound("https://sm2018b12.infhaarlem.nl/Music/intro1.wav");
		var song = new Audio("https://sm2018b12.infhaarlem.nl/Music/intro1.wav");
		song.loop = true;
		var muted = false;
//used by mousecheck		
		var mouseX;
		var mouseY;
//frame
		var fadeId = 0;
		var frames = 30;
		var timerId = 0;
		var loadingCount =0;
//verwerking van data
		var maxPoints =[0,0,0];
		var maxIndex =[];
		var index = Math.floor(Math.random() * 2);
//shop variablen
		var collectedHands=100;
		var skin;
//higschore variablen
		var deadscore
		var hands
		var distance

//regular
		var bgImage = new Image();
		var btPlayImage = new Image();
		var btSoundImage = new Image();
		var btFacebook =  new Image();
		var btTwitter =  new Image();
		var bgTitle = new Image();
//<!-- MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!! --> 
		var tooltip2 = new Image();
		var profilePicture = new Image(); 
		var tooltip4 = new Image(); 
//<!-- TOT HIER MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!! -->
		//highscore
		var bgHighscore = new Image();
		var btClose = new Image();
		var txtHighscore = new Image();
		var bgScoreGold = new Image();
		var bgScoreSilver = new Image();
		var bgScoreBronze = new Image();
		var bgScoreNobadge = new Image();
		var bgDropDownMenu = new Image();
		//main menu
		var infoImage = new Image();
		var shopImage = new Image();
		var dropdownImage = new Image();
		var soundImage = new Image();
		//var bgPlay = new Image();
		//var playJo = new Image();
		var leaderbordImage = new Image();
		var logoImage = new Image();
		var playImage = new Image();
		//loading
		var bgLoadingBar = new Image();
		var loadingBar = new Image();
		var bgMessageOfDay = new Image();
		var loadingTitle = new Image();
		var messageOfDay = new Image();
		//shop
		var btnLeft = new Image();
		var btnRight = new Image();
		var shopItem = new Image();
		var joeBrown = new Image();
		var joeYellow = new Image();
		var titleShop = new Image();
		var noHands = new Image();
		var shopCost = new Image();
		var btShopPurchase = new Image();
		var btAddHands = new Image();
		//getHands
		var bgGetHands = new Image();
		var fgGetHands = new Image();
		var caGetHands = new Image();
		var btLike = new Image();
		var btShare = new Image();
		var btPurchase = new Image();
		var getHands = new Image();
		//GameOver
		var bgGameOver = new Image();
		var bgDeathScore = new Image();
		var bgDeathDistance = new Image();
		var bgDeathHands = new Image();
		var btShare = new Image();
		var btClose = new Image();
		var btRestart = new Image();
//state clearer
		function clearStates(){
			for (i = 0; i < states.length; i++) 
			{
				states[i]=0;
			} 
		}
		
//song method
			function sound(src) 
			{
			this.sound = document.createElement("audio");
			this.sound.src = src;
			this.sound.setAttribute("preload", "auto");
			this.sound.setAttribute("controls", "none");
			this.sound.style.display = "none";
			document.body.appendChild(this.sound);
			this.play = function(){
				this.sound.play();
			}
			this.stop = function(){
				this.sound.pause();
			}
			
			}
// hover method			
function checkHover()
		{
				if(mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]){
					if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]){
					//dit wordt gerunt op elke shit
					btPlayImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/LevelSelect (2).png";
					}
					else {
					btPlayImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/LevelSelect (1).png";
					}
				}
				else {
					btPlayImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/LevelSelect (1).png";
					}
				if(mouseX > buttonX[1] && mouseX < buttonX[1] + buttonWidth[1]){
					if(mouseY > buttonY[1] && mouseY < buttonY[1] + buttonHeight[1]){
					//dit wordt gerunt op elke shit
					btSoundImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Sound (2).png";
					}
					else {
					btSoundImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Sound (1).png";
					}
				}
				else {
					btSoundImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Sound (1).png";
					}
				if(mouseX > buttonX[2] && mouseX < buttonX[2] + buttonWidth[2]){
					if(mouseY > buttonY[2] && mouseY < buttonY[2] + buttonHeight[2]){
					//dit wordt gerunt op elke shit
					playImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (2).png";
					}
					else {
					playImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (1).png";
					}
				}
				else {
					playImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (1).png";
					}
				if(mouseX > buttonX[3] && mouseX < buttonX[3] + buttonWidth[3]){
					if(mouseY > buttonY[3] && mouseY < buttonY[3] + buttonHeight[3]){
					//dit wordt gerunt op elke shit
					leaderbordImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Score (2).png";
					}
					else {
					leaderbordImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Score (1).png";
					}
				}
				else {
					leaderbordImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Score (1).png";
					}
				if(mouseX > buttonX[4] && mouseX < buttonX[4] + buttonWidth[4]){
					if(mouseY > buttonY[4] && mouseY < buttonY[4] + buttonHeight[4]){
					//dit wordt gerunt op elke shit
					infoImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Info (2).png";
					}
					else {
					infoImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Info (1).png";
					}
				}
				else {
					infoImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Info (1).png";
					}
				if(mouseX > buttonX[5] && mouseX < buttonX[5] + buttonWidth[5]){
					if(mouseY > buttonY[5] && mouseY < buttonY[5] + buttonHeight[5]){
					//dit wordt gerunt op elke shit
					shopImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Shop (2).png";
					}
					else {
					shopImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Shop (1).png";
					}
				}
				else {
					shopImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Shop (1).png";
					}
			if(states[1]===1){
				if(mouseX > buttonX[8] && mouseX < buttonX[8] + buttonWidth[8]){
					if(mouseY > buttonY[8] && mouseY < buttonY[8] + buttonHeight[8]){
					//dit wordt gerunt op elke shit
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (2).png";
					}
					else {
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
					}
				}
				else {
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
					}
			}
				if(mouseX > buttonX[6] && mouseX < buttonX[6] + buttonWidth[6]){
					if(mouseY > buttonY[6] && mouseY < buttonY[6] + buttonHeight[6]){
					//dit wordt gerunt op elke shit
					btFacebook.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Facebook (2).png";
					}
					else {
					btFacebook.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Facebook (1).png";
					}
				}
				else {
					btFacebook.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Facebook (1).png";
					}
				if(mouseX > buttonX[7] && mouseX < buttonX[7] + buttonWidth[7]){
					if(mouseY > buttonY[7] && mouseY < buttonY[7] + buttonHeight[7]){
					//dit wordt gerunt op elke shit
					btTwitter.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Twitter (2).png";
					}
					else {
					btTwitter.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Twitter (1).png";
					}
				}
				else {
					btTwitter.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Twitter (1).png";
					}
			if(states[2]===1){
				if(mouseX > buttonX[11] && mouseX < buttonX[11] + buttonWidth[11]){
					if(mouseY > buttonY[11] && mouseY < buttonY[11] + buttonHeight[11]){
					//dit wordt gerunt op elke shit
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (2).png";
					}
					else {
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
					}
				}
				else {
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
					}
				if(mouseX > buttonX[9] && mouseX < buttonX[9] + buttonWidth[9]){
					if(mouseY > buttonY[9] && mouseY < buttonY[9] + buttonHeight[9]){
					//dit wordt gerunt op elke shit
					btnLeft.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Left (2).png";
					}
					else {
					btnLeft.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Left (1).png";
					}
				}
				else {
					btnLeft.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Left (1).png";
					}
				if(mouseX > buttonX[10] && mouseX < buttonX[10] + buttonWidth[10]){
					if(mouseY > buttonY[10] && mouseY < buttonY[10] + buttonHeight[10]){
					//dit wordt gerunt op elke shit
					btnRight.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (2).png";
					}
					else {
					btnRight.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (1).png";
					}
				}
				else {
					btnRight.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (1).png";
					}
			}
			if(states[3]===1){
				if(mouseX > buttonX[12] && mouseX < buttonX[12] + buttonWidth[12]){
					if(mouseY > buttonY[12] && mouseY < buttonY[12] + buttonHeight[12]){
					//dit wordt gerunt op elke shit
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (2).png";
					}
					else {
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
					}
				}
				else {
					btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
					}
			}
		}
	function checkClick(mouseEvent)
	{
			//getCurrentUserValues();
			
				if(mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]){
					if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]){
					clearStates();
					states[7] = 1;
				}
			}
			if(mouseX > buttonX[1] && mouseX < buttonX[1] + buttonWidth[1]){
					if(mouseY > buttonY[1] && mouseY < buttonY[1] + buttonHeight[1]){
					//dit wordt gerunt op elke shit
					if(muted===false)
					{
					song.stop();
					muted=true;
					}
					else
					{
					song.play();
					muted=false;
					}
					
				}
			}
			if(mouseX > buttonX[6] && mouseX < buttonX[6] + buttonWidth[6]){
					if(mouseY > buttonY[6] && mouseY < buttonY[6] + buttonHeight[6]){
					//dit wordt gerunt op elke shit
					location.href = "https://twitter.com/Childsurgery_Vi"; 
				}
			}
			if(mouseX > buttonX[7] && mouseX < buttonX[7] + buttonWidth[7]){
					if(mouseY > buttonY[7] && mouseY < buttonY[7] + buttonHeight[7]){
					//dit wordt gerunt op elke shit
					location.href = "https://www.facebook.com/childsurgeryvietnam";   
				}
			}
			if(states[0]===1){
				if(mouseX > buttonX[2] && mouseX < buttonX[2] + buttonWidth[2]){
						if(mouseY > buttonY[2] && mouseY < buttonY[2] + buttonHeight[2]){
						//dit wordt gerunt op elke shit
						
						clearStates();
						states[4] = 1
					}
				}
				if(mouseX > buttonX[3] && mouseX < buttonX[3] + buttonWidth[3]){
						if(mouseY > buttonY[3] && mouseY < buttonY[3] + buttonHeight[3]){
						//dit wordt gerunt op elke shit
						
						clearStates();
						states[1] = 1
					}
				}
				if(mouseX > buttonX[4] && mouseX < buttonX[4] + buttonWidth[4]){
						if(mouseY > buttonY[4] && mouseY < buttonY[4] + buttonHeight[4]){
						//dit wordt gerunt op elke shit
						//deze pik
						
						window.open("https://www.childsurgery-vietnam.org/doneren", "_blank");
						
					}
				}
				if(mouseX > buttonX[5] && mouseX < buttonX[5] + buttonWidth[5]){
						if(mouseY > buttonY[5] && mouseY < buttonY[5] + buttonHeight[5]){
						//dit wordt gerunt op elke shit
						clearStates();
						states[2] = 1
					}
				}
			}
			if(states[1]===1)
			{
					if(mouseX > buttonX[8] && mouseX < buttonX[8] + buttonWidth[8]){
						if(mouseY > buttonY[8] && mouseY < buttonY[8] + buttonHeight[8]){
						//dit wordt gerunt op elke shit
						
						clearStates();
						states[0] = 1
					}
				}
			}
			if(states[2]===1)
			{
					//shopping state
					if(mouseX > buttonX[11] && mouseX < buttonX[11] + buttonWidth[11]){
						if(mouseY > buttonY[11] && mouseY < buttonY[11] + buttonHeight[11]){
						//dit wordt gerunt op elke shit
						
						clearStates();
						states[0] = 1
					}
					}
					else if(mouseX > buttonX[13] && mouseX < buttonX[13] + buttonWidth[13]){
						if(mouseY > buttonY[13] && mouseY < buttonY[13] + buttonHeight[13]){
						//dit wordt gerunt op elke shit
						clearStates();
						states[6] = 1
					}
				}
					else if(mouseX > buttonX[16] && mouseX < buttonX[16] + buttonWidth[16]){
							if(mouseY > buttonY[16] && mouseY < buttonY[16] + buttonHeight[16]){
							//dit wordt gerunt op elke shit
							if(collectedHands>99)
							{
							skin =1;
							collectedHands = collectedHands-100;
							}
						}
					}
				
			}
			if(states[3]===1){
				if(mouseX > buttonX[12] && mouseX < buttonX[12] + buttonWidth[12]){
						if(mouseY > buttonY[12] && mouseY < buttonY[12] + buttonHeight[12]){
						//dit wordt gerunt op elke shit
						clearStates();
						states[0] = 1
					}
				}
			}
			if(states[6]===1){
				//fix dit
				if(mouseX > buttonX[13] && mouseX < buttonX[13] + buttonWidth[13]){
						if(mouseY > buttonY[13] && mouseY < buttonY[13] + buttonHeight[13]){
						//dit wordt gerunt op elke shit
						clearStates();
						states[6] = 1
					}
				}
				if(mouseX > [18] && mouseX < buttonX[18] + buttonWidth[18]){
						if(mouseY > buttonY[18] && mouseY < buttonY[18] + buttonHeight[18]){
						//dit wordt gerunt op elke shit
						openShareDialog(); 
					}
				}
				
				else{
						clearStates();
						states[2] = 1
				}
			}
			if(states[7]===1){
				//fix dit
				if(mouseX > buttonX[8] && mouseX < buttonX[8] + buttonWidth[8]){
						if(mouseY > buttonY[8] && mouseY < buttonY[8] + buttonHeight[8]){
						//dit wordt gerunt op elke shit
						clearStates();
						states[0] = 1
					}
				}
				if(mouseX > buttonX[14] && mouseX < buttonX[14] + buttonWidth[14]){
						if(mouseY > buttonY[14] && mouseY < buttonY[14] + buttonHeight[14]){
						//open share dialog
						clearStates();
						states[0] = 1
					}
				}
				if(mouseX > buttonX[15] && mouseX < buttonX[15] + buttonWidth[15]){
						if(mouseY > buttonY[15] && mouseY < buttonY[15] + buttonHeight[15]){
						//dit wordt gerunt op elke shit
						clearStates();
						states[5] = 1
					}
				}
			}
		}
	function setImageSources(){
		//
		bgImage.src = "https://sm2018b12.infhaarlem.nl/Images/BG/Landscape.png";
		btPlayImage.src =  "https://sm2018b12.infhaarlem.nl/Images/Button/LevelSelect (1).png";
		btSoundImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Sound (1).png";
		bgHighscore.src = "https://sm2018b12.infhaarlem.nl/Images/Window/1/BG.png";
		btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
		btFacebook.src ="https://sm2018b12.infhaarlem.nl/Images/Button/Facebook (1).png";
		btTwitter.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Twitter (1).png";
		bgTitle.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Border/LandscapeTop.png"
		//Highschores
		txtHighscore.src = "https://sm2018b12.infhaarlem.nl/Images/Window/2/Title (2).png";
		bgScoreGold.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/ScoreItems/Gold.png";
		bgScoreSilver.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/ScoreItems/Silver.png";
		bgScoreBronze.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/ScoreItems/Bronze.png";
		bgScoreNobadge.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/ScoreItems/NoBadge.png";
		bgDropDownMenu.src = "https://sm2018b12.infhaarlem.nl/Images/Window/6/Rope.png";
		
		//shop
		shopItem.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/ShopItems/ShopItem.png"
		btnLeft.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Left (1).png"
		btnRight.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Play (1).png"
		joeBrown.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/JoeBrown.png"
		joeYellow.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/scaledJoeYellow.png"
		titleShop.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/ShopCharacterName.png"
		noHands.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/HandTotal.png"
		shopCost.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/ShopCost.png"
		btShopPurchase.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/ShopPurchase.png"
		btAddHands.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Plus (1).png"
		
		//main menu
		leaderbordImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Score (1).png";
		infoImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Info (1).png";
		shopImage.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Shop (1).png";
		//bgPlay.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Tooltips/Tooltip (4).png";
		//playJo.src = "https://sm2018b12.infhaarlem.nl/Images/Character with outline/sprites/run outline.gif";
		logoImage.src = "https://sm2018b12.infhaarlem.nl/Images/BG/title_v03.png";
		playImage.src = "https://sm2018b12.infhaarlem.nl/Images/Window/7/Title.png";
//<!-- MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!! -->
		tooltip4.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Tooltips/Tooltip (4).png";
//<!-- TOT HIER MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!! -->
		//loading
		bgLoadingBar.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Preloader/BG.png"
		loadingBar.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Preloader/Bar.png"
		loadingTitle.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Preloader/Title.png"
		bgMessageOfDay.src = "https://sm2018b12.infhaarlem.nl/Images/Window/3/BGnoHeader.png"
		messageOfDay.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/messageOfDay.png"
		
		//getHands
		caGetHands.src = "https://sm2018b12.infhaarlem.nl/Images/Window/4/ContentArea.png"
		btLike.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Like (1).png"
		btShare.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Share (1).png"
		btPurchase.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Blank/BlankText (1).png"
		getHands.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/gethands.png";
		tooltip4.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Tooltips/Tooltip (4).png";
		tooltip2.src = "https://sm2018b12.infhaarlem.nl/Images/Elements/Tooltips/Tooltip (2).png";
		
		//gameOver
		bgGameOver.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/gameOverBg.png"
		bgDeathScore.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/scoreBG.png"
		bgDeathDistance.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/distanceBg.png"
		bgDeathHands.src = "https://sm2018b12.infhaarlem.nl/Images/CSVN/handsbg.png"
		btShare.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Share (1).png"
		btClose.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Cross (1).png";
		btRestart.src = "https://sm2018b12.infhaarlem.nl/Images/Button/Replay (1).png";
		}
	function checkPos(mouseEvent){
			if(mouseEvent.pageX || mouseEvent.pageY == 0){
				mouseX = mouseEvent.pageX - this.offsetLeft;
				mouseY = mouseEvent.pageY - this.offsetTop;
			}else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
				mouseX = mouseEvent.offsetX;
				mouseY = mouseEvent.offsetY;
			}
		}
	function textsplitser(tekst,widthOfBox,runningWidth){
		
				context.font = "20px Consolas"; 
				var text = tekst
				var splitText = "";
				var words = text.split(" ");
				var widthOfBox = widthOfBox;
				var runningWidth = 0;
				for (var i = 0; i < words.length; ++i){
				var width = context.measureText(words[i]).width;
				runningWidth = runningWidth+width;
				if (runningWidth<widthOfBox){
					splitText += " ";
					splitText += words[i];
				}
				else {
					splitText += "\n"
					splitText += words[i];
					runningWidth = 0;
				}
				}
				return splitText;
				
		
		}
	function messageOfDaytxt(){
				
				//desired font
				context.font = "25px Times New Roman";
				
				var text = messages[index];
				var splitText = "";
				var words = text.split(" ");
				var widthOfBox = 300;
				var runningWidth = 0;
				for (var i = 0; i < words.length; ++i){
				var width = context.measureText(words[i]).width;
				runningWidth = runningWidth+width;
				if (runningWidth<widthOfBox){
					splitText += " ";
					splitText += words[i];
				}
				else {
					splitText += "\n"
					splitText += words[i];
					runningWidth = 0;
				}
				}
				fillTextMultiLine(context,splitText,450,330);
		}
		function fillTextMultiLine(ctx, text, x, y) {
				var lineHeight = ctx.measureText("M").width * 1.2;
				var lines = text.split("\n");
				  for (var i = 0; i < lines.length; ++i) {
					context.fillStyle = "black";
					ctx.fillText(lines[i], x, y);
					y += lineHeight;
				  }
			}
		//scores to text
		function scoreToText(){
			getHighscores();
			context.font = "20px Times New Roman";
			context.fillStyle = "white";
			
			//scores
			context.fillText(maxPoints[0], 583, 272); 
			context.fillText(maxPoints[1], 583, 380);
			context.fillText(maxPoints[2], 583, 478);
			context.fillText(playerScore, 583, 576);
			//names
			context.fillText(playerNames[maxIndex[0]], 583, 242); 
			context.fillText(playerNames[maxIndex[1]], 583, 350);
			context.fillText(playerNames[maxIndex[2]], 583, 448);
			context.fillText(playerName, 583, 546);
		}
	
	
	function addBackgroundMenu(){
			messageOfDaytxt();
			context.drawImage(bgImage, 0, 0);
			context.drawImage(btPlayImage,buttonX[0],buttonY[0],buttonWidth[0],buttonHeight[0]);
			context.drawImage(btSoundImage,buttonX[1],buttonY[1],buttonWidth[1],buttonHeight[1]);
			context.drawImage(btFacebook,buttonX[6],buttonY[6],buttonWidth[6],buttonHeight[6]);
			context.drawImage(btTwitter,buttonX[7],buttonY[7],buttonWidth[7],buttonHeight[7]);
	}
	
	function drawMain(){
			
			if (states[0]===1)
			{
				addBackgroundMenu();
				context.drawImage(bgTitle,216,0,868,350);
				context.drawImage(logoImage, 402, 14, 477, 192);
				//context.drawImage(bgPlay, 426, 369, 160, 88);
				//context.drawImage(playJo, 435, 382, 30, 47);
				context.drawImage(playImage, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
				context.drawImage(leaderbordImage, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3]);
				context.drawImage(infoImage, buttonX[4], buttonY[4], buttonWidth[4], buttonHeight[4]);
				context.drawImage(shopImage, buttonX[5], buttonY[5], buttonWidth[5], buttonHeight[5]);
				//<!-- MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!! -->
				context.drawImage(tooltip4, 370, 362, 343, 100);
				if(!profilePicture.src){try{profilePicture.src = currentUser.picture.data.url;}catch(error){}}
				context.drawImage(profilePicture, 630, 375, 50, 50);
				try {context.fillText("Hey " + currentUser.first_name + ", lets play!", 405, 407); } catch(error){/*error*/ }
				//<!-- MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!! -->
			}
			else if (states[1]===1)
			{
					addBackgroundMenu();
					context.drawImage(bgHighscore,392,0,497,684);
					context.drawImage(btClose,buttonX[8],buttonY[8],buttonWidth[8],buttonHeight[8]);
					//context.drawImage(btTwitter,1096, 0);
					//context.drawImage(btFacebook,1188, 0);
					context.drawImage(txtHighscore,548,124,184,39);
					context.drawImage(bgScoreGold,486,197,264,110);
					context.drawImage(bgScoreSilver,486,299,264,110);
					context.drawImage(bgScoreBronze,486,401,264,110);
					context.drawImage(bgScoreNobadge,486,499,264,110);
					scoreToText();
			}
			else if (states[2]===1)
			{
				addBackgroundMenu();
				context.drawImage(shopItem, 370, 140, 547.15, 620);
				context.drawImage(btnLeft,buttonX[9],buttonY[9],buttonWidth[9],buttonHeight[9]);
				context.drawImage(btnRight,buttonX[10],buttonY[10],buttonWidth[10],buttonHeight[10]);
				context.drawImage(joeYellow,560,270,144,288);
				context.drawImage(titleShop,479,162,327,78);
				context.drawImage(noHands,409,12,369,113);
				context.drawImage(shopCost,547,572,188,40);
				context.drawImage(btShopPurchase,buttonX[16],buttonY[16],buttonWidth[16],buttonHeight[16]);
				context.drawImage(btClose,buttonX[11],buttonY[11],buttonWidth[11],buttonHeight[11]);
				context.drawImage(btAddHands,buttonX[13],buttonY[13],buttonWidth[13],buttonHeight[13]);
				context.fillText(collectedHands, 620, 80);
			}
			else if (states[3]===1)
			{
				addBackgroundMenu();
				context.drawImage(bgMessageOfDay,255,187,741,516);
				context.drawImage(messageOfDay,345,220,565,423);
				context.drawImage(btClose,buttonX[12],buttonY[12],buttonWidth[12],buttonHeight[12]);
				messageOfDaytxt();
			}
			else if (states[4]===1)
			{
				//jaja context load alle loading images je weet zelf
				addBackgroundMenu();
				context.drawImage(bgLoadingBar,146,25,971,141);
				if(loadingCount<=900)
				{
				loadingCount++;
				loadingCount++;
				context.drawImage(loadingBar,167,96,loadingCount,31);
				}
				else {
				clearStates()
				states[5]=1;
				loadingCount=0;
				}
				context.drawImage(loadingTitle,578,47,95,24);
				context.drawImage(bgMessageOfDay,255,187,741,516);
				context.drawImage(messageOfDay,345,220,565,423);
				messageOfDaytxt();
			}
			else if (states[6]===1)
			{
				//jaja context load alle Gethands images je weet zelf
				addBackgroundMenu();
				context.drawImage(shopItem, 370, 140, 547.15, 620);
				context.drawImage(btnLeft,buttonX[9],buttonY[9],buttonWidth[9],buttonHeight[9]);
				context.drawImage(btnRight,buttonX[10],buttonY[10],buttonWidth[10],buttonHeight[10]);
				context.drawImage(joeYellow,560,270,144,288);
				context.drawImage(titleShop,479,162,327,78);
				context.drawImage(noHands,409,12,369,113);
				context.drawImage(shopCost,547,572,188,40);
				context.drawImage(btShopPurchase,540,602,194,99);
				context.drawImage(btClose,buttonX[11],buttonY[11],buttonWidth[11],buttonHeight[11]);
				context.drawImage(btAddHands,buttonX[13],buttonY[13],buttonWidth[13],buttonHeight[13]);
				context.drawImage(tooltip2, 750, 60, 352, 218);
				context.drawImage(btShare, buttonX[18],buttonY[18],buttonWidth[18],buttonHeight[18]);
				context.drawImage(caGetHands, 860, 150, 185, 53);
				context.fillText("25", 1000, 180);
				context.fillText("Share to get 25 extra hands!", 790, 240);
				context.fillText(collectedHands, 620, 80);
				//context.drawImage(btPurchase
			}
			else if (states[7]===1)
			{
				//jaja context load alle GameOver images je weet zelf
				addBackgroundMenu();
				context.drawImage(bgGameOver,411,0,459,638);
				context.drawImage(bgDeathScore,498,195,292,89);
				context.drawImage(bgDeathDistance,498,310,292,89);
				context.drawImage(bgDeathHands,498,408,292,89);
				context.drawImage(btShare,buttonX[14],buttonY[14],buttonWidth[14],buttonHeight[14]);
				context.drawImage(btClose,buttonX[8],buttonY[8],buttonWidth[8],buttonHeight[8]);
				context.drawImage(btRestart,buttonX[15],buttonY[15],buttonWidth[15],buttonHeight[15]);
				gameOverText();
			}
		}
	function gameOverText()
		{
			getCurrentUserValues();
			
			context.fillText("Highscore", 580, 215);
			context.fillText("Distance", 580, 331);
			context.fillText("No. of Hands", 580, 430);
			//fill corect data
			context.fillText(playerScore, 583, 255);
			context.fillText(score, 583, 371);
			context.fillText(scoreCount, 583, 470);
			
		}
	
	function getCurrentUserValues(){
			var playerIndex;
			for(i=0;i < playerNames.length; i++){        
					if( playerNames[i] == currentUser.name){                               
						 playerIndex=i;
					}
				}
			playerHand = playerHands[playerIndex];
			playerScore = playerScores[playerIndex];
			playerName = playerNames[playerIndex];
	}
	
	function getHighscores()
		{
				temparr = playerScores.map(Number);
				for(i=0;i < temparr.length; i++){        
					if( temparr[i] > maxPoints[0]){                               
						 maxPoints[0] = temparr[i];
						 maxIndex[0]=i;   
					}
				}

				for(i=0;i < temparr.length; i++){        
					if( temparr[i] > maxPoints[1] && temparr[i]< maxPoints[0] ){                               
						 maxPoints[1] = temparr[i];
						 maxIndex[1]=i;   
					}            
				}

				for(i=0;i < temparr.length; i++){        
					if( temparr[i] > maxPoints[2] && temparr[i]< maxPoints[1] ){                               
						 maxPoints[2] = temparr[i];
						 maxIndex[2]=i;   
								
				}
				}
		}
