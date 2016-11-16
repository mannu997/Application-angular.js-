<?php
    header("Content-Type:application/json");
    $dbc = mysqli_connect("localhost","root","radhaswami","app_data") or die("error");
    $query = "SELECT * FROM players";
    $result = mysqli_query($dbc,$query) or die("error");
    $data=[];
    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
         $response['name']=$row['name'];
         $response['score']=$row['score'];
         $response['id'] = $row['id'];
         $data[]=$response;
    }
    
    
    echo json_encode($data);
    
?>
