<?php
	include 'bootstrap.php';
 	$datas = $database->select("coupon",'*');
 	print_r(json_encode($datas)); exit;
?>