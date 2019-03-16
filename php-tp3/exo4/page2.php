<?php
	session_start();
    if(!isset($_SESSION["login"]) || !isset($_SESSION["password"])){
		header("Location: http://localhost/adw/php-tp3/exo4/signin.php?goto=page2");
		exit();
	}
	else{
		$login = $_SESSION["login"];
	}
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>TP 3 - Exo 3</title>
		<meta name="author" content="Marc Gaetano">
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link rel="stylesheet" href="../css/tp3.css">
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<h1>TP 3 - Exo 3</h1>
		<hr>

		<div id="top">
			Utilisateur : <strong><?php echo $login; ?></strong> - <a href="signout.php">déconnexion</a>
		</div>
		<h2>Page 2</h2>
		<p>
			Ceci est la page numéro 2.
		</p>
		<div id="bottom">
			<a href="page1.php">Page 1</a>
			<a href="page3.php">Page 3</a>
		</div>
	</body>
</html>
