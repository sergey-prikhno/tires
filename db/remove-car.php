<?php
    error_reporting(0);
    require_once dirname(__FILE__) . '/DBConnect.php';
    $db = new DBConnect();
    $dblink = $db->getMYSQLi();

    $carID = $_GET["carID"];


    $result = mysqli_query($dblink, " DELETE FROM cars WHERE id='".$carID."' ");

    echo $carID;

