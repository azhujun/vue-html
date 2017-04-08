<?php
    $name = "无名氏";
    if(isset($_GET['name'])){
        $name = $_GET['name'].'_GET';
    }
    $parmat = file_get_contents('php://input');
    try{
      $parmat = json_decode($parmat);
    }catch(Exception $e){
      echo "<script>console.log('". $e ."')</script>";
      return;
    }
    
    if(isset($parmat->name)){
        $name = $parmat->name.'_POST';
    }
    // echo 
    echo json_encode(array(
        "name" => "test",
        "message" => $name,
        "code" => 2001
    ));
 ?>