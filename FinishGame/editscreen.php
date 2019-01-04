<?php
session_start();
require('getmessages_process.php');
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset= "UTF-8"/>
<link rel="stylesheet" href="style.css" type="text/css">
<title>edit messages</title>
<body>
<div class="container">  
  <form id="contact" action="getmessages.php" method="post">
    <h3>Welcome <?= $_SESSION['login_username']?></h3>
	<br/>

    <fieldset>
		<input placeholder="Your message..." type="textarea" name="message" value="<?= $message ?>" tabindex="1" autofocus required>
    </fieldset>
	<fieldset>
	<?php 
		$messages = $_SESSION['messages'];
		
		for($i = 0; $i < count($messages); $i++){
		echo"<input id="messagearea" type="textarea" value=" $messages[$i]->message "/>"
		
	?>
	</fieldset>
    <fieldset>
		<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
</body>
</html>