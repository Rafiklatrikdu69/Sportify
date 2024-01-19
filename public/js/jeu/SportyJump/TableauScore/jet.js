var jet = document.getElementById("jet"); 
var timerDecollage; 
var timerVole; 
var activerChuteJet = false; 

function startTimerDecollage(){
    timerDecollage = setInterval(function(){
        jet.src = "Dessin/Plateforme/jetpackVole.gif"
        stopTimerDecollage(); 
        startTimerVole(); 
    }, 900); 
}
function stopTimerDecollage(){
    clearInterval(timerDecollage); 
}
 
function startTimerVole(){
    timerVole = setInterval(function(){
        ActionBoutonBallon();
        if (activerChuteLibre) {
            deplacementHautBasBallon();
        } else {
            redressementJetPack();
        }
        egaliserCooJetWithBall();
    }, getRafraichissement()); 
}
function stopTimerVole(){
    clearInterval(timerVole); 
}

function egaliserCooJetWithBall() {
    jet.style.left = getXBallonImage() - 82 / getFacteur() + "px";
    jet.style.top = getYBallonImage() - 20 / getFacteur() + "px";
}

function redressementJetPack(){
    if (getYBallonHitBoxSaut() > (getLargeurTerrain() - getYTerrain()) / 2 - (70 / getFacteur())) {
        ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() - gravity + "px";
        if (gravity < 30 / getFacteur()) {
            gravity = gravity + 0.5;
        }
        egaliserCoo();
    } else {
        deplacementHaut = false;
        deplacementBas = true;
        activerChuteLibre = true;
    }
}