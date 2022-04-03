<?php 
header('Access-Control-Allow-Origin: *'); //Il faudrait mettre que notre site
header('Content-Type: application/json');

//connexion à la base de donnée différente en focntion du serveur
if($_SERVER['SERVER_NAME']=="localhost"){
    $db = new PDO('mysql:host=localhost;dbname=wi0d3_ally', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
}else{
    $db = new PDO('mysql:host=wi0d3.myd.infomaniak.com;dbname=wi0d3_ally', 'wi0d3_icon', 'J_ASXfnFrT7', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
}

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
// ─── GET PRESTATION FROM CLIENT ─────────────────────────────────────────────────────────────
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
//
// ─── GET MESSAGE FROM CLIENT ─────────────────────────────────────────────────────────────
//
    }else if($send=="contact"){
        //mail et message contiennent les infos envoyer depuis react
        $mail=htmlspecialchars($data_receive["mail"]);
        $message=htmlspecialchars($data_receive["message"]);
        //a revoir
        $sql = "INSERT INTO `contact` (`id_contact`, `contact_email`, `contact_date`, `contact_message`) VALUES (NULL, :mail, current_timestamp(), :message) ";
        $req=$db->prepare($sql);
        $req->bindParam(":mail",$mail,PDO::PARAM_STR);
        $req->bindParam(":message",$message,PDO::PARAM_STR);
        $req->execute();
    }
}
// ────────────────────────────────────────────────────────────────────────────────
