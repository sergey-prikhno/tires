<?php
    error_reporting(0);
    require_once dirname(__FILE__) . '/DBConnect.php';
    $db = new DBConnect();
    $dblink = $db->getMYSQLi();

    $tire = $_GET["id"];

    $getCars = mysqli_query($dblink, "SELECT * FROM tire WHERE id='".$tire."'");

    $stack = array();

    $row = $getCars->fetch_object();

    echo json_encode($row);


?>