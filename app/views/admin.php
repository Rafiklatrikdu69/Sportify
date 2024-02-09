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

		<button class="button" id="events">
			<ion-icon name="calendar-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/calendar-outline.svg" alt="photo user">
				Evenements
			</span>
		</button>

		<button class="button" id="equipe">
		<ion-icon name="people-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/people-outline.svg" alt="photo user">
				Equipe
			</span>
		</button>
		<button class="button" id="cat">
		<ion-icon name="apps-outline"></ion-icon>
			<span class="button-flex">
				<img src="images/apps-outline.svg" alt="photo user">
				Categorie
			</span>
		</button>
	</div>
	<div class="part-middle" id="part-5">
		<li id="liste">Inserer une equipe</li>
		
			<div class="form-pos">
			<form action="/public/insert-equipe" method="POST">

				<label for="">Equipe</label>
				<input type="text" name="equipe">
			
				<input type="submit" value="Valider">
			</form>
			</div>
</div>
<div class="part-middle" id="part-6">
		<li id="liste">Inserer une categorie</li>
		
			<div class="form-pos">
			<form action="/public/insert-cat" method="POST">

				
				<label for="">Categorie sport</label>
				<input type="text" name="cat">
				<input type="submit" value="Valider">
			</form>
			</div>
</div>
	<div class="part-middle" id="part-4">
		<li id="liste">Inserer un match</li>
		
			<div class="form-pos">
			<form action="/public/insert-prono" method="POST">
				<label for="">Ligue </label>
				<select name="nom" >
					<option value="LIGA">LIGA</option>
					<option value="LIGUE 1">LIGUE 1</option>
					<option value="PREMIERE LEAGUE">PREMIERE LEAGUE</option>
					<option value="BUNDESLIGA">BUNDESLIGA</option>
				</select>
				<label for="">Date evenements</label>
				<input type="date" name="date">
				<label for="">Equipe domicile</label>
				<select name="equD">
					<?php foreach($equipe as $elements){?>
						<option value="<?php  echo $elements->getEquipe()?>" ><?php  echo $elements->getEquipe()?></option>
					
					<?php }?>
				</select>
				<label for="">Equipe Exterieur</label>
				<select name="equG">
					<?php foreach($equipe as $elements){?>
						<option value="<?php  echo $elements->getEquipe()?>" ><?php  echo $elements->getEquipe()?></option>
					
					<?php }?>
				</select>
			

				<label for="" >Cote domicile</label>
				<input type="number" name="coteD">
				<label for="">Cote exterieur</label>
				<input type="number" name="coteE">
				<label for="">Categorie sport</label>
				<select name="cat">
					<?php foreach($cat as $elements){?>
						<option value="<?php  echo $elements->getCat()?>" ><?php  echo $elements->getCat()?></option>
					
					<?php }?>
				</select>
				
				<input type="submit" value="Valider">
			</form>
			</div>
	
	
	</div>

	<div class="part-middle" id="part-1">
		<li id="liste">Liste des utilisateurs</li>
		<div class="user">
			
			<div class="id">ID</div>
			<div class="pseudo">Pseudo</div>
			<div class="adresse-mail">Email</div>
			<div class="point">Point actuel</div>
			<div class="point-class">Point Classement</div>
			<div class="score">Score</div>
			<div class="dropdown">
					<button class="dropbtn" id="ajout-util">Ajouter</button>
					
				</div>
		</div>
	
	
		<?php foreach($users as $user){?>
			<div class="user">
				<div class="id" id="<?php echo $user->getUtilisateurId();?>"><?php echo $user->getUtilisateurId();?></div>
				<div class="pseudo"><?php echo $user->getPseudo();?></div>
				<div class="adresse-mail"><?php echo $user->getEmail();?></div>
				<div class="point"><?php echo (int)$user->getPointActuel();?></div>
				<div class="point-class"><?php echo $user->getPointClassement();?></div>
				<div class="score"><?php  echo $user->getScoreJeu()?></div>
				<div class="dropdown">
					<button class="dropbtn">Actions</button>
					<div class="dropdown-content">
						<ul>
							<!-- <li>Modifier</li> -->
							<li id="supp">Supprimer</li>
						</ul>
					</div>
				</div>
			</div>
		<?php } ?>
	</div>

	<div class="part-middle" id="ajout">
<form action="/public/	verification-formulaire-inscription" method="POST">
	<label for="">Le pseudo</label>
	<input type="text" name="username">
	<label for="">Le mot de passe</label>
	<input type="password" name="password">
	<label for="">Adresse mail</label>
	<input type="text" name="email">
	<input type="submit" value="Terminer">
</form>
</div>
	
 </div>  
		<main>
            <!-- la section avec les pronostics est ici -->
            
        </main>

		<div class="part-middle" id="part-3">
		<li id="liste">Liste des matchs</li>
		<div class="pronostique">
			<div class="id">ID</div>
			<div class="equipe_d">equipe 1</div>
			<div class="equipe_e">equipe 2</div>
			<div class="nom_even">Ligue</div>
			<div class="cat_sport">categorie</div>
			<div class="date">Date</div>
			<div class="cote_d">Cote domicile</div>
			<div class="cote_e">Cote Exterieur</div>
		</div>
	
	
		<?php foreach($evenement as $evenements){?>
			<div class="pronostique">
				<div class="id" id="<?php echo $evenements->getId();?>"><?php echo $evenements->getId();?></div>
				<div class="equipe_d"><?php echo $evenements->getEquipe_domicile();?></div>
				<div class="equipe_e"><?php echo $evenements->getEquipe_exterieur();?></div>
				<div class="nom_even"><?php echo $evenements->getNomEvenement();?></div>
				<div class="cat_sport"><?php echo $evenements->getCatSport();?></div>
				<div class="date"><?php  echo $evenements->getDate_evenement()?></div>
				<div class="cote_d"><?php  echo $evenements->getCote_domicile()?></div>
				<div class="cote_e"><?php  echo $evenements->getCote_exterieur()?></div>
				<div class="dropdown">
					<button class="dropbtn">Actions</button>
					<div class="dropdown-content">
						<ul>
							<li class="myBtn" id="<?php echo $evenements->getId();?>">Terminer</li>
							
						</ul>
					</div>
				</div>
			</div>
		
	
	
		
	<!-- Trigger/Open The Modal -->
<!-- <button id="myBtn">Open Modal</button> -->

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content" id="<?php echo $evenements->getId();?>">
    <!-- <span class="close">&times;</span> -->
   <input class="<?php  echo $evenements->getCote_domicile()?>" type="submit" value="<?php  echo $evenements->getCote_domicile()?>" id="btn-terminer">
   <input class="<?php  echo $evenements->getCote_exterieur()?>" type="submit" value="<?php  echo $evenements->getCote_exterieur()?>" id="btn-terminer">
  </div>

</div>
		<?php } ?>
		
		</div>

	<script src="../../public/js/admin.js">

		
	</script>
</body>
</html>
