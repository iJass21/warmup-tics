<?php
	$conn = new MongoClient();
	
	$db = $m->proyectotics;
	
	if ($db.getCollectionNames().indexOf("usuarios") == -1) {
		$db.createColecction("usuarios");
	}
	
	$usuarios = $db->usuarios;
	$q = $usuarios->find(array("correo" => $_POST["correo"], "contrasenia" => $_POST["contrasenia"]));
	
	if (!$q->isDead()) {
		header("principal.html");
	} else {
		header("login.html");
	}
	header("3.129.149.132/principal.html");
?>