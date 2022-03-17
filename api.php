<?php 
header('Access-Control-Allow-Origin: *'); //Il faudrait mettre que notre site
header('Content-Type: application/json');
$db = new PDO('mysql:host=localhost;dbname=wi0d3_ally', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
//
// ─── POST INFORMATION ───────────────────────────────────────────────────────────
//
$data_receive = json_decode(file_get_contents("php://input"),true);
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── GET INFORMATIONS ─────────────────────────────────────────────────────────────
//
if(isset($_GET["select"])){
    $select=$_GET["select"];
   
   $sql = "SELECT *  FROM `$select`";
    $req = $db->query($sql);
    $data=$req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
//
// ─── GET PRESTATION ─────────────────────────────────────────────────────────────
//
}else if(isset($_GET["send"])){
    $send=$_GET["send"];
    if($send=="rdv"){
        $nom=$data_receive["nom"];
        $prenom=$data_receive["prenom"];
        $prestation=$data_receive["prestation"];
        $mail=$data_receive["mail"];
        $message=$data_receive["demande"];
        $sql = "INSERT INTO `message` (`id_message`, `msg_email`, `msg_nom`, `msg_prenom`, `msg_date`, `message`) VALUES (NULL, :mail, :nom, :prenom, current_timestamp(), :message) ";
        $req=$db->prepare($sql);
        $req->bindParam(":nom",$nom,PDO::PARAM_STR);
        $req->bindParam(":prenom",$prenom,PDO::PARAM_STR);
        $req->bindParam(":mail",$mail,PDO::PARAM_STR);
        $req->bindParam(":prestation",$prestation,PDO::PARAM_INT);
        $req->bindParam(":message",$message,PDO::PARAM_INT);
        $req->execute();
    }
}
// ────────────────────────────────────────────────────────────────────────────────
