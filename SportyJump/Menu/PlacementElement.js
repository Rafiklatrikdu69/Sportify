function PlacementBallonHitBoxSaut() {
    var hitBox = document.getElementById("ballonHitBoxSaut");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    hitBox.style.position = "absolute";
    hitBox.style.left = getXTerrain() + 235 / getFacteur() + "px";
    hitBox.style.top = getYTerrain() + 1000 / getFacteur() + "px";
}
function PlacementBallonHitBoxGet() {
    var hitBox = document.getElementById("ballonHitBoxGet");
    hitBox.style.position = "absolute";

}
function PlacementBallonImage() {
    var ballon = document.getElementById("ballonImage");
    ballon.style.position = "absolute";
    egaliserCoo();
}

function PlacementPlateforme() {
    var plateforme = document.getElementById("plateforme");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    plateforme.style.position = "absolute";
    plateforme.style.left = getXTerrain() + 210 / getFacteur() + "px";
    plateforme.style.top = getYTerrain() + 1340 / getFacteur() + "px";
}

function PlacementTitre() {
    var titre = document.getElementById("titre");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    titre.style.position = "absolute";
    titre.style.left = getXTerrain() + 90 / getFacteur() + "px";
    titre.style.top = getYTerrain() + 80 / getFacteur() + "px";
}

function PlacementBoutonJouer() {
    var btJouer = document.getElementById("boutonJouer");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    btJouer.style.position = "absolute";
    btJouer.style.left = getXTerrain() + 820 / getFacteur() + "px";
    btJouer.style.top = getYTerrain() + 600 / getFacteur() + "px";
}
function PlacementBoutonClassement() {
    var btClassement = document.getElementById("boutonClassement");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    btClassement.style.position = "absolute";
    btClassement.style.left = getXTerrain() + 510 / getFacteur() + "px";
    btClassement.style.top = getYTerrain() + 1000 / getFacteur() + "px";
}

function PlacementFlecheDroite() {
    var fleche = document.getElementById("flecheDroite");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    fleche.style.position = "absolute";
    fleche.style.left = getXTerrain() + 1207 / getFacteur() + "px";
    fleche.style.top = getYTerrain() + 1765 / getFacteur() + "px";
}

function PlacementFlecheGauche() {
    var fleche = document.getElementById("flecheGauche");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    fleche.style.position = "absolute";
    fleche.style.left = getXTerrain() + 12 / getFacteur() + "px";
    fleche.style.top = getYTerrain() + 1765 / getFacteur() + "px";
}
function PlacementBanderole() {
    var banderole = document.getElementById("banderole");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    banderole.style.position = "absolute";
    banderole.style.left = getXTerrain() + 0 / getFacteur() + "px";
    banderole.style.top = getYTerrain() + 1672 / getFacteur() + "px";
}




