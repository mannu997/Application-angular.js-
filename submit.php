<?php
$content =  file_get_contents('php://input');
$request = json_decode($content);
@$name = $request->name;
@$score = $request->score;

$dbc = mysqli_connect("localhost","root","radhaswami","app_data") or die("error");
$query = "INSERT INTO players (name,score)".
            "VALUES ('$name',$score)";
$result = mysqli_query($dbc,$query);
mysqli_close($dbc);
?>
