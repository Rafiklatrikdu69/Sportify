<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/admin_style.css"/>
	<title>Admin</title>
</head>
<body>
	<nav class="nav-bar">
		<label for="">Recherche</label>
		<input id="searchbar" onkeyup="" type="text" name="search" placeholder="Chercher ...">
	</nav>
	<div class="part-left">
		<div>Sportify</div>
		<button class="button" id="user">
			<ion-icon name="person-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/person-outline.svg" alt="photo user">
				Utilisateurs
			</span>
		</button>

		<button class="button" id="post">
			<ion-icon name="newspaper-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/newspaper-outline.svg" alt="photo user">
				Posts
			</span>
		</button>

		<button class="button" id="pronostique">
			<ion-icon name="football-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/football-outline.svg" alt="photo user">
				Pronostiques
			</span>
		</button>

		<button class="button" id="pronostique">
			<ion-icon name="calendar-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/calendar-outline.svg" alt="photo user">
				Evenements
			</span>
		</button>

		<button class="button" id="items">
			<ion-icon name="bag-handle-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/bag-handle-outline.svg" alt="photo user">
				Items
			</span>
		</button>
	</div>

	<div class="part-middle">
		<li id="liste">Liste des utilisateurs</li>
		<div class="user">
			<div class="id">ID</div>
			<div class="pseudo">Pseudo</div>
			<div class="adresse-mail">Email</div>
			<div class="point">Point actuel</div>
			<div class="point-class">Point Classement</div>
			<div class="score">Score</div>
		</div>
	
	
		<?php foreach($users as $user){?>
			<div class="user">
				<div class="id"><?php echo $user[0]->getUtilisateurId();?></div>
				<div class="pseudo"><?php echo $user[0]->getPseudo();?></div>
				<div class="adresse-mail"><?php echo $user[0]->getEmail();?></div>
				<div class="point"><?php echo $user[0]->getPointActuel();?></div>
				<div class="point-class"><?php echo $user[0]->getPointClassement();?></div>
				<div class="score"><?php  echo $user[0]->getScoreJeu()?></div>
				<div class="dropdown">
					<button class="dropbtn">Actions</button>
					<div class="dropdown-content">
						<ul>
							<li>Modifier</li>
							<li id="supp">Supprimer</li>
						</ul>
					</div>
				</div>
			</div>
		<?php } ?>
	</div>

	<script src="../../public/js/admin.js"></script>
</body>
</html>
