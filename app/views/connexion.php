

<head>
<link rel="stylesheet" href="css/connexion_style.css">
    <title>Sportify</title>
</head>
<!-- <?php echo $name?> -->
<body>
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div class="text w-100">
								<h2>Bienvenue</h2>
								<p>Pas encore de compte ?</p>
								<a href="/public/inscription" class="btn btn-white btn-outline-white">S'inscrire</a> <br>
								<a id="btaccueil" href="/public" class="btn btn-white btn-outline-white">Retour à l'accueil</a>
							</div>
			      </div>
						<div class="login-wrap p-4 p-lg-5">
			      	<div class="d-flex">
			      		<div class="w-100">
			      			<h3 class="mb-4">Connexion</h3>
			      		</div>
			      	</div>
							<form action="/public/verification-formulaire-connexion" class="signin-form" method="POST">
			      		<div class="form-group mb-3">
			      			<label class="label" for="name">Pseudo</label>
			      			<input name="nom" type="text" class="form-control" placeholder="Pseudo" required>
			      		</div>
		            <div class="form-group mb-3">
		            	<label class="label" for="password">Mot de passe</label>
		              <input name="mdp"type="password" class="form-control" placeholder="Mot de passe" required>
		            </div>
		            <div class="form-group">
					
		            	<button type="submit" class="form-control btn btn-primary submit px-3">Connexion</button>
						
		            </div>
		            <div class="form-group d-md-flex">
		            	<div class="w-50 text-left">
									</div>
									<div class="w-50 text-md-right">
										<a href="#">Mot de passe oublié ?</a>
									</div>
		            </div>
		          </form>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
	</body>


