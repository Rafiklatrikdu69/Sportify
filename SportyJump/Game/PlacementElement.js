function PlacementBallonHitBoxSaut() {
    var hitBox = document.getElementById("ballonHitBoxSaut");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    hitBox.style.position = "absolute";
    hitBox.style.left = getXTerrain() + 565 / getFacteur() + "px";
    hitBox.style.top = getYTerrain() + 1200 / getFacteur() + "px";
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
function PlacementScore() {
    var score = document.getElementById("score");
    score.style.position = "absolute";
    score.style.left = getXTerrain() + 50 / getFacteur() + "px";
    score.style.top = getYTerrain() + 25 / getFacteur() + "px";
}
function PlacementScorePieceImage() {
    var piece = document.getElementById("scorePiece");
    piece.style.position = "absolute";
    let l = piece.width / getFacteur() + "px";
    let h = piece.height / getFacteur() + "px";
    piece.style.width = l;
    piece.style.height = h;
    piece.style.left = getXTerrain() + 30 / getFacteur() + "px";
    piece.style.top = getYTerrain() + 150 / getFacteur() + "px";
}
function PlacementScoreNombrePiece() {
    var scorePiece = document.getElementById("nbPiece");
    scorePiece.style.position = "absolute";
    scorePiece.style.left = getXTerrain() + 110 / getFacteur() + "px";
    scorePiece.style.top = getYTerrain() + 160 / getFacteur() + "px";
}

function PlacementPiece() {
    var piece = document.getElementById("piece");
    piece.style.position = "absolute";
    piece.classList.add("invisible");
}
function PlacementMonstreHitBoxAttack() {
    var monstreHitBoxAttack = document.getElementById("monstreHitBoxAttack");
    monstreHitBoxAttack.style.position = "absolute";
    let l = monstreHitBoxAttack.width / getFacteur() + "px";
    let h = monstreHitBoxAttack.height / getFacteur() + "px";
    monstreHitBoxAttack.style.width = l;
    monstreHitBoxAttack.style.height = h;
}
function PlacementMonstreImage() {
    var monstreImage = document.getElementById("monstreImage");
    monstreImage.style.position = "absolute";
    monstreImage.classList.add("invisible");
}
function PlacementMonstreHitBoxVulnerable() {
    var monstreHitBoxVulnerable = document.getElementById("monstreHitBoxVulnerable");
    monstreHitBoxVulnerable.style.position = "absolute";
    egaliserCooMonstre();
}
function PlacementRessort() {
    var ressort = document.getElementById("ressort");
    ressort.style.position = "absolute";
    ressort.classList.add("invisible");
}
