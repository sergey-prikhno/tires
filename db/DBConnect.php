<?php
	class DBConnect{
		
		public $mysqli;

		function __construct(){
			
			//return $mysqli;
		}
		
		function getMYSQLi(){
			$mysqli = new mysqli('localhost', 'root', '1234');
			
			mysqli_select_db($mysqli,"crud-cars") or die ("no database crud-cars");
			mysqli_query($mysqli, " SET NAMES 'utf8'");
			
			if (mysqli_connect_error()) {
		    	die('Ошибка подключения (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
			}
			return $mysqli;
		}
	}
?>