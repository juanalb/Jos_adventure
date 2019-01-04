<?php
ini_set('display_errors', 'On');

$name = $_POST['postUser'];
$score = $_POST['postScore'];
$hands = $_POST['postHands'];
$conn = mysqli_connect('localhost','sm2018b12_Hossam', 'Abcd123', 'sm2018b12_Admins');
				if ($conn->connect_error) {
					die("Connection failed: " . $conn->connect_error);
				} 
				else{
					echo '<script>console.log("ophalen succesvol")</script>';	
				}
				
				$stmt = $conn->prepare("UPDATE Players
										SET score = ? , hands = ?
										WHERE name = ?;");
				$stmt->bind_param("iis", $score, $hands, $name);
				
				$stmt->execute();
				
				/*
				$sql = "UPDATE Players
						SET score = '$score' , hands = '$hands'
						WHERE name = '$name';";
				$conn->query($sql);
				*/
				$stmt->close();
				$conn->close();
?>