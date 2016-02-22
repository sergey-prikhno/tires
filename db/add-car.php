<?php
    error_reporting(0);
    require_once dirname(__FILE__) . '/DBConnect.php';
    $db = new DBConnect();
    $dblink = $db->getMYSQLi();

    $carModel = $_GET["carModel"];
    $carType = $_GET["carType"];
    $carColor = $_GET["carColor"];
    $carYear = $_GET["carYear"];

    $isUser = mysqli_query($dblink, "INSERT INTO cars (`model`, `type`,`color`, `year`) values ('".$carModel."', '".$carType."','".$carColor."','".$carYear."')");

    echo $isUser;
