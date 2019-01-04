<?php 
header("Content-Type: application/json", true);
				ini_set('display_errors', 'On');
				// Create connection
				$conn = mysqli_connect('localhost','sm2018b12_Hossam', 'Abcd123', 'sm2018b12_Admins');
				if ($conn->connect_error) {
					die("Connection failed: " . $conn->connect_error);
				} 
				else{
					//echo '<script>console.log("ophalen succesvol")</script>';	
				}
				//mysqli_select_db("sm2018b12_Admins");
				
				$sql = "SELECT name FROM Players";
				$result = $conn->query($sql);
				//echo "<script>console.log(".json_encode($result).")</script>";
				
				$rows = array();
				
				if ($result->num_rows > 0) {
					// output data of each row
					while($row = $result->fetch_assoc()) {
						//echo "id: " . $row["id"]. "Name: " . $row["name"]. " -Score " . $row["score"]. " -Hands " . $row["hands"]. "<br>";
						$rows[] = $row;
					}
				} else {
					echo "0 results";
				}
				$json = json_encode($rows);
				//echo "<script>console.log(".json_encode($rows).")</script>";
				echo $json;
				$conn->close();
?>