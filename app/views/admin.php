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
<input id="searchbar" onkeyup="" type="text"
        name="search" placeholder="Chercher ...">
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


	<button class="button" id="items">
	<ion-icon name="bag-handle-outline"></ion-icon>
		<span class="button-flex">
			<img src="images/bag-handle-outline.svg" alt="photo user">
			Items
		</span>
	</button>

	</div>


	<div class="part-middle">
		<li>Liste des utilisateurs</li>

		<div class="user">
			<div class="prenom">
				Rafik
			</div>
			<div class="nom">
				Bouchenna
			</div>
			<div class="adresse-mail">
				rafik.bouchenna050@gmail.com
			</div>
		<div class="dropdown">
			<button class="dropbtn">Actions</button>
			<div class="dropdown-content">
				<ul>
					<li>Modifier</li>
					<li>Supprimer</li>
				</ul>
			</div>
		</div>

	</div>



<div class="part-right">

</div>

	<script src="../../public/js/admin.js"></script>
</body>
</html>