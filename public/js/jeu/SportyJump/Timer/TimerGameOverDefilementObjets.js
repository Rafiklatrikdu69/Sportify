let defilementObjets;
function startTimerDefilementObjets() {
    defilementObjets = setInterval(function () {
        redressementBallon();
        deplacementDroiteGauche();
        reculerMonstreGameOver();
        reculerPieceGameOver();
        if (getYTitre() > 140 / getFacteur()) {
            setYTitre();
        }
        if (getYScoreActuel() > 1000 / getFacteur()) {
            setYScoreActuel();
            setYScorePersonnel();
            setYScoreGlobal();
        }else{
            centrerScore(document.getElementById("actuelScore")); 
            centrerScore(document.getElementById("meilleurScorePersonnel")); 
            centrerScore(document.getElementById("meilleurScore"));
        }
        if (getYScorePiece() > 1400 / getFacteur()) {
            setYScorePiece();
            setYPieceImage();
        }
        if (getYBtJouer() > 1350 / getFacteur()) {
            setYBtJouer();
        }
        if (getYBtMenu() > 1650 / getFacteur()) {
            setYBtMenu();
        } else {
            supprimerMonstreGameOver();
            stopTimerDefilementObjets();
        }
    }, getRafraichissement());
}
function stopTimerDefilementObjets() {
    clearInterval(defilementObjets);
}

function centrerScore(police){
    var interface = document.getElementById("terrain");
    var interfaceWidth = interface.width; 
    var policeWidth = police.offsetWidth; 
    var centreX = (interfaceWidth - policeWidth) / 2; 
    police.style.left = centreX + "px"; 
}