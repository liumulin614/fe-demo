<?php 

$array = array("3"=>array("我是三安","我十四"));
$id = $_GET['id'];

echo json_encode($array[$id]);

?>