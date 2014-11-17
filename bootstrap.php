<?php
include 'medoo.php';
	$database = new medoo(array(
		// required
		'database_type' => 'mysql',
		'database_name' => 'coupon',
		'server' => '192.168.2.113',
		'username' => 'root',
		'password' => '',

		// optional
		'port' => 3306,
		'charset' => 'utf8'
	));
?>