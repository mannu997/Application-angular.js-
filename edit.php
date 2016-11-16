<?php
$content =  file_get_contents('php://input');
$request = json_decode($content);
@$id = $request->id;
@$score= $request->score;

$dbc = mysqli_connect("localhost","root","radhaswami","app_data") or die("error");
$query = "UPDATE players SET score = $score WHERE id = $id";
$result = mysqli_query($dbc,$query);
mysqli_close($dbc);

?>
