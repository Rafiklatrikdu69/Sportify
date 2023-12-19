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