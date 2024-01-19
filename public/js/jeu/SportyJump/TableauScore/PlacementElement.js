function PlacementBallonHitBoxSaut() {
    var hitBox = document.getElementById("ballonHitBoxSaut");
    // Positionner l'image par rapport aux coordonnées spécifiques;
    hitBox.style.position = "absolute";
    hitBox.style.left = getXTerrain() + 320 / getFacteur() + "px";
    hitBox.style.top = getYTerrain() + 1680 / getFacteur() + "px";
}
function PlacementBallonHitBoxGet() {
    var hitBox = document.getElementById("ballonHitBoxGet");
    hitBox.style.position = "absolute";
}
function PlacementBallonImage() {
    var ballon = document.getElementById("ballonImage");
    ballon.style.position = "absolute";
    ballon.style.zIndex = "-2"; 
    egaliserCoo();
}

function PlacementJetPack() {
    var jet = document.getElementById("jet");
    jet.style.position = "absolute";
    jet.style.zIndex = "-1"; 
    var l = jet.width / getFacteur();  
    var h = jet.height / getFacteur(); 
    jet.style.width = l + "px"; 
    jet.style.height = h + "px"; 

    var interface = document.getElementById("terrain");
    var interfaceWidth = interface.width;  
    var centreX = (interfaceWidth - jet.width) / 2; 
    document.getElementById("ballonHitBoxSaut").style.left = centreX + 87 + "px";
    egaliserCoo();
    egaliserCooJetWithBall(); 
}