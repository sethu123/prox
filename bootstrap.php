<?php
include 'medoo.php';
	$database = new medoo(array(
		// required
		'database_type' => 'mysql',
		'database_name' => 'coupon',
		'server' => 'localhost',
		'username' => 'root',
		'password' => '',

		// optional
		'port' => 3306,
		'charset' => 'utf8'
	));
?>