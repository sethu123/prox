<?php
// Include Medoo (configured)
include '../../bootstrap.php';
 
// Initialize
$database = new medoo();
 
$POST = json_decode(json_encode($_POST));
$data['title'] = $POST->title;
$data['description'] = $POST->description;
$data['posted_on'] = date( 'Y-m-d H:i:s');
$data['posted_by'] = 'Admin';
$data['expires'] = $POST->expire;
$database->insert('coupon', $data);
