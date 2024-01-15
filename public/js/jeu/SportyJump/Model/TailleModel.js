function DefinirTailleBallonHitBoxSaut() {
    var hitBox = document.getElementById("ballonHitBoxSaut");
    var nouvelleLargeur = hitBox.width / getFacteur();
    var nouvelleHauteur = hitBox.height / getFacteur();
    hitBox.style.width = nouvelleLargeur + "px";
    hitBox.style.height = nouvelleHauteur + "px";
}
function DefinirTailleBallonHitBoxGet() {
    var hitBox = document.getElementById("ballonHitBoxGet");
    var nouvelleLargeur = hitBox.width / getFacteur();
    var nouvelleHauteur = hitBox.height / getFacteur();
    hitBox.style.width = nouvelleLargeur + "px";
    hitBox.style.height = nouvelleHauteur + "px";
}
function DefinirTailleBallonImage() {
    var ballon = document.getElementById("ballonImage");
    var nouvelleLargeur = ballon.width / getFacteur();
    var nouvelleHauteur = ballon.height / getFacteur();
    ballon.style.width = nouvelleLargeur + "px";
    ballon.style.height = nouvelleHauteur + "px";
}
function DefinirTaillePlateforme() {
    var plateforme = document.getElementById("plateforme");
    var nouvelleLargeur = 160 / getFacteur();
    var nouvelleHauteur = 40 / getFacteur();
    plateforme.style.width = nouvelleLargeur + "px";
    plateforme.style.height = nouvelleHauteur + "px";
}
function DefinirTailleTitre() {
    var titre = document.getElementById("titre");
    var nouvelleLargeur = titre.width / getFacteur();
    var nouvelleHauteur = titre.height / getFacteur();
    titre.style.width = nouvelleLargeur + "px";
    titre.style.height = nouvelleHauteur + "px";
}
function DefinirTailleBoutonJouer() {
    var btJouer = document.getElementById("boutonJouer");
    var nouvelleLargeur = btJouer.width / getFacteur();
    var nouvelleHauteur = btJouer.height / getFacteur();
    btJouer.style.width = nouvelleLargeur + "px";
    btJouer.style.height = nouvelleHauteur + "px";
}
function DefinirTailleBoutonClassement() {
    var btClassement = document.getElementById("boutonClassement");
    var nouvelleLargeur = btClassement.width / getFacteur();
    var nouvelleHauteur = btClassement.height / getFacteur();
    btClassement.style.width = nouvelleLargeur + "px";
    btClassement.style.height = nouvelleHauteur + "px";
}
function DefinirTailleBoutonMenu() {
    var btMenu = document.getElementById("boutonMenu");
    var nouvelleLargeur = btMenu.width / getFacteur();
    var nouvelleHauteur = btMenu.height / getFacteur();
    btMenu.style.width = nouvelleLargeur + "px";
    btMenu.style.height = nouvelleHauteur + "px";
}
function DefinirTailleFlecheDroite() {
    var fleche = document.getElementById("flecheDroite");
    var nouvelleLargeur = fleche.width / getFacteur();
    var nouvelleHauteur = fleche.height / getFacteur();
    fleche.style.width = nouvelleLargeur + "px";
    fleche.style.height = nouvelleHauteur + "px";
}
function DefinirTailleFlecheGauche() {
    var fleche = document.getElementById("flecheGauche");
    var nouvelleLargeur = fleche.width / getFacteur();
    var nouvelleHauteur = fleche.height / getFacteur();
    fleche.style.width = nouvelleLargeur + "px";
    fleche.style.height = nouvelleHauteur + "px";
}
function DefinirTailleBanderole() {
    var banderole = document.getElementById("banderole");
    var nouvelleLargeur = banderole.width / getFacteur();
    var nouvelleHauteur = banderole.height / getFacteur();
    banderole.style.width = nouvelleLargeur + "px";
    banderole.style.height = nouvelleHauteur + "px";
}
function DefinirTaillePolice() {
    var police = document.getElementById("score");
    police.style.fontSize = 80 / getFacteur() + "px";
}
function DefinirTailleMonstre() {
    //Définition de la taille de l'HitBox Saut du monstre; 
    var monstreHitBoxAttack = document.getElementById("monstreHitBoxAttack");
    let l = monstreHitBoxAttack.width / getFacteur() + "px";
    let h = monstreHitBoxAttack.height / getFacteur() + "px";
    monstreHitBoxAttack.style.width = l;
    monstreHitBoxAttack.style.height = h;
    //Définition de la taille de l'image du monstre; 
    var monstreImage = document.getElementById("monstreImage");
    l = monstreImage.width / getFacteur() + "px";
    h = monstreImage.height / getFacteur() + "px";
    monstreImage.style.width = l;
    monstreImage.style.height = h;
    //Définition de la taille de l'HitBox Get du monstre;
    var monstreHitBoxVulnerable = document.getElementById("monstreHitBoxVulnerable");
    l = monstreHitBoxVulnerable.width / getFacteur() + "px";
    h = monstreHitBoxVulnerable.height / getFacteur() + "px";
    monstreHitBoxVulnerable.style.width = l;
    monstreHitBoxVulnerable.style.height = h;
}

function DefinirTailleRessort() {
    var ressort = document.getElementById("ressort");
    var nouvelleLargeur = ressort.width / 3;
    var nouvelleHauteur = ressort.height / 3;
    ressort.style.width = nouvelleLargeur + "px";
    ressort.style.height = nouvelleHauteur + "px";
}

function DefinirTailleJetPack() {
    var jet = document.getElementById("jetpackFixe");
    jet.src = "Dessin/Plateforme/jetpack.png";
    var nouvelleLargeur = 164 / 4;
    var nouvelleHauteur = 254 / 4;
    jet.style.width = nouvelleLargeur + "px";
    jet.style.height = nouvelleHauteur + "px";
}