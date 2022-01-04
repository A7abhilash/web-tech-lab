<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP - Prime NOS</title>
</head>
<body>
		<form action="" method="POST">
		<label>Enter Number(s) Only:</label><input type="text" name="number_entered" id="number"/><br><br>
		<input name="form" type="submit" value="Submit"/>
		</form><br>
		
		<?php
			$number= $_POST['number_entered'];
			$form_result= $_POST['form'];

			if (isset($form_result)){
				if (is_numeric($number)) {
				echo 'The number you entered is ' . $number. '. This is a valid number.';
				}
				else {
				echo 'Error: You did not enter numbers only. Please enter only numbers.';
				}
			}
		?>
</body>
</html>