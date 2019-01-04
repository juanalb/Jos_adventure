//MARKEERDER VOOR SAMENVOEGEN 25-06-2018 !!!!!!!!!
// Script laadt de Facebook Software Development Kit
// En verwerkt de hele login flow.
var currentUser;

window.fbAsyncInit = function() {
    FB.init({
      appId      : '168688783800486',
      xfbml      : true,
      version    : 'v3.0'
    });
    FB.AppEvents.logPageView();
	
	FB.getLoginStatus(function(response) {		
		statusChangeCallback(response);	
	});
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src ="https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   function statusChangeCallback(response) {
		if (response.status === 'connected') {
			FB.api(
				'/me',
				'GET',
				{"fields":"id,name,first_name,picture"},
				function(user) {
					if (user){
						currentUser = user; 
						removeLoginUI();
					}
				});
		}		
		
  }

//Checkt de loginstatus adhv de onLogin property van de HTML button 
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
	
  }
  
  function removeLoginUI()
  {
	  var canvas = document.getElementById("myCanvas");
	  var loginButton = document.getElementById("fbButton");

	  canvas.style.opacity = 1; 
	  loginButton.style.display = "none";
	  
	  $.post('saveFacebookUser.php',{postUser:currentUser.name},
			function(data)
			{
				
			});
  }

  
  function openShareDialog(){
	  
	var shareDescription = 'Can you beat my highscore and collect more hands?';
    var shareTitle = "Jo's Adventures";
    var shareLink = 'https://apps.facebook.com/josadventure';
    var shareImage = 'https://sm2018b12.infhaarlem.nl/Images/Facebook/App_Icon.png';
	var shareImageWidth = 200;
	var shareImageHeight = 200; 
	  
	 FB.ui({
	  method: 'share_open_graph',
	  action_type: 'og.shares',
	  action_properties: JSON.stringify({
		  object: {
			  'og:url': shareLink,
			  'og:title': shareTitle,
			  'og:description': shareDescription,
			  'og:image': shareImage,
			  'og:image:width': shareImageWidth,
			  'og:image:height': shareImageHeight,

			  
		  }
	  })
	}, function(response){
		if(!response.error_code)
		{
			playerHand += 25;
		}
	}); 	  
  }
  