<?php
header('Access-Control-Allow-Origin: *');
// header("Content-Type: application/json");
// header('Access-Control-Allow-Methods: GET, POST');
// header("Access-Control-Allow-Headers: X-Requested-With");
if ($_SERVER['SERVER_NAME'] == "localhost") {
    $link = new PDO('mysql:host=localhost;dbname=CV1', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
} else {
    $link = new PDO('mysql:host=wi0d3.myd.infomaniak.com;dbname=wi0d3_CV', 'wi0d3_mathieu', 'TFXf_bLzcN2', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
}
if (isset($_GET["q"])) {
    $query = $_GET["q"];
    if ($query == "cv") {
        $sql = "SELECT *  FROM contenu";
        $req = $link->query($sql);
        $data = $req->fetchAll();
        echo json_encode($data);
    } else if ($query == "project") {
        $sql = "SELECT *  FROM project";
        $req = $link->query($sql);
        // while ($data = $req->fetch(PDO::FETCH_ASSOC)) {
        //     $directory = $data["imgLink"];
        //     $tabFile = array_diff(scandir($directory), array('..', '.'));
        //     $tabFile=implode("|",$tabFile);
        //     $data["directory"]=$tabFile;
        // }
        $data = $req->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }
}
