<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$user_id = $_GET['uid'];
$id = $_GET['id'];
$mode = $_GET['m'];

if($mode == 'img'){
	header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
	header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
	header('Pragma: public');
	header('Content-Type: image/png');
	$uri = "user_images/$user_id/$id.png";
	echo(file_get_contents($uri));	
}


if($mode == 'l'){
	$uri = "user_images/$user_id/data.json";
	$data = json_decode(file_get_contents($uri));
	$tweet_id = $data[$id]->id_str;
	$twitter_url = "https://twitter.com/#!/bot/status/$tweet_id";
	header("Location: ".$twitter_url);
	
}

?>
