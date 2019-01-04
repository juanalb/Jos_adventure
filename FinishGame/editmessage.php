<?php
// session_start();
// if (!isset($_SESSION['login_username']))
// {
	// header('Location: http://sm2018b12.infhaarlem.nl/Hossam/login.php');
// }
// include_once('getmessages_process.php');
	$id = $_GET['id'];
	$dbc = mysqli_connect('localhost','sm2018b12_Hossam', 'Abcd123', 'sm2018b12_Admins') OR die('Something went wrong while trying to connect to the database.'. mysqli_connect_error());
	$query = "SELECT * from Messages where ID = '$id';";
	$result = $dbc->query($query);
	$message = "";
	while($row = mysqli_fetch_assoc($result))
	{
		$message = $row['Message'];
	}
	
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset= "UTF-8"/>
<link rel="stylesheet" href="style.css" type="text/css">
<title>edit messages</title>
<body>
<div class="container">
  <form id="contact" action="editmessage_process.php" method="post">
    <h3>Welcome <?= $_SESSION['login_username']?></h3>
	<br/>

    <fieldset>
		<input placeholder="<?= $message ?>" type="textarea" name="message" tabindex="1" autofocus required>
    </fieldset>
	<fieldset>
		<input type="hidden" name="id" value="<?= $id ?>">
    </fieldset>
    <fieldset>
		<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Save</button>
    </fieldset>
	<fieldset>
		<br/>
		<a href='mainmenu.php'>Go back</a>
		<br/>
		<a href='logout.php'>Log out</a>
	</fieldset>
  </form>
</div>
</body>
</html>