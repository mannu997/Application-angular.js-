<?php

$content =  file_get_contents('php://input');
$request = json_decode($content);
 @$id = $request->id; 
$dbc = mysqli_connect("localhost","root","radhaswami","app_data") or die("error");
$query = "DELETE FROM players WHERE id = $id";
$result = mysqli_query($dbc,$query);
mysqli_close($dbc);

?>
