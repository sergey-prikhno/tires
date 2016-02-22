<?php
    error_reporting(0);
    require_once dirname(__FILE__) . '/DBConnect.php';
    $db = new DBConnect();
    $dblink = $db->getMYSQLi();

    $carModel = $_GET["carModel"];
    $carType = $_GET["carType"];
    $carColor = $_GET["carColor"];
    $carYear = $_GET["carYear"];
    $carID = $_GET["carID"];


    $result = mysqli_query($dblink, "UPDATE cars SET model='".$carModel."', type='".$carType."', color='".$carColor."', year='".$carYear."' WHERE id='".$carID."'");

    echo $carID;

