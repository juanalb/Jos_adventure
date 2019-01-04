<?php
ini_set('display_errors', 'On');

$name = $_POST['postUser'];
	$conn = mysqli_connect('localhost','sm2018b12_Hossam', 'Abcd123', 'sm2018b12_Admins');
				if ($conn->connect_error) {
					die("Connection failed: " . $conn->connect_error);
				} 
				else{
					echo '<script>console.log("ophalen succesvol")</script>';	
				}
				
				$stmt = $conn->prepare("INSERT INTO `Players`(`name`, `score`, `hands`) VALUES (?,0,0);");
				$stmt->bind_param("s",$name);
				
				$stmt->execute();
				
				/*
				$sql = "INSERT INTO `Players`(`name`, `score`, `hands`) VALUES ('$name',0,0);";
				$conn->query($sql);
				*/
				$stmt->close();
				$conn->close();
?>