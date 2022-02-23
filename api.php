<?php
    header('Access-Control-Allow-Origin: *'); //Il faudrait mettre que notre site
    header('Content-Type: application/json');

    $select = $_GET["select"];
    $db = new PDO('mysql:host=wi0d3.myd.infomaniak.com;dbname=wi0d3_ally','wi0d3_icon','lhN-RYAzoU7');

    $request = "SELECT * FROM :select";
    $stmt = $db -> prepare($request);
    $stmt -> bindParam(':select', $select, PDO::PARAM_STR);
    $stmt -> execute();
    $data = $stmt -> fetchAll();
    echo json_encode($data);