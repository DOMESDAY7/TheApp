<?php
header('Access-Control-Allow-Origin: *'); //Il faudrait mettre que notre site
header('Content-Type: application/json');
$db = new PDO('mysql:host=localhost;dbname=wi0d3_ally', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));

if (isset($_GET["select"])) {
    $select = htmlspecialchars($_GET["select"]);
    //filter_var
    $sql = "SELECT * FROM $select ";
    $req = $db->query($sql);
    $data = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}
