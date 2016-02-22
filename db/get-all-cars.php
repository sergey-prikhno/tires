<?php
    error_reporting(0);
    require_once dirname(__FILE__) . '/DBConnect.php';
    $db = new DBConnect();
    $dblink = $db->getMYSQLi();

    $getCars = mysqli_query($dblink, "SELECT * FROM tire ");

    $stack = array();

    while ($row = $getCars->fetch_object()){
        array_push($stack, $row);
    }

    echo json_encode($stack);


?>