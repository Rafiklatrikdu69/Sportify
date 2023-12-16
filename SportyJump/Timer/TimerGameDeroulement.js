let ballonDeplacement;
const plateforms = document.querySelectorAll(".plateforme");

function startTimerBallonDeplacement() {
    ballonDeplacement = setInterval(function () {
        ActionBoutonBallon();
        Fall();
        GameOver();
        document.querySelectorAll(".plateforme").forEach(function (p) {
            if (IsPlateformeTouch(p)) {
                ActivationScore();
                ActivationPlateforme();
                if (!PieceIsNull()) {
                    ActivationPiece();
                } else {
                    AffichagePiece();
                }
                if (!MonstreIsNull()) {
                    ActivationMonstre();
                } else {
                    AffichageMonstre();
                }
            }
            NouvelAffichagePlateformeDescente(p);
            mouvementPlateforme(p);
        });
    }, getRafraichissement());
}

function stopTimerBallonDeplacement() {
    clearInterval(ballonDeplacement);
}


