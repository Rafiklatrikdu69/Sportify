let ballonDeplacement;
const plateforms = document.querySelectorAll(".plateforme");

function startTimerBallonDeplacement() {
    ballonDeplacement = setInterval(function () {
        ActionBoutonBallon();
        Fall();
        GameOver();
        for (let i = 0; i < getNbPlateforme(); i++) {
            let j = i + 1;
            let p = document.querySelector(".plateforme:nth-child(" + j + ")");
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
            isSupperposed(p);
        }
    }, getRafraichissement());
}

function stopTimerBallonDeplacement() {
    clearInterval(ballonDeplacement);
}


