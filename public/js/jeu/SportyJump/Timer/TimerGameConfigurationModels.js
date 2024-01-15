let configurationModels;
function startTimerConfigurationModels() {
    configurationModels = setInterval(function () {
        if (!IsMonstreTouch()) {
            ReculementPlateforms();
            makeScore();
        }
        if (!PieceIsNull()) {
            PieceTouchee();
            if (!IsMonstreTouch()) {
                DescentePiece();
            }
            supprimerPiece();
        }
        if (!MonstreIsNull()) {
            MonstreElimineBallon();
            BallonElimineMonstre();
            if (!IsMonstreTouch()) {
                DescenteMonstre();
            }
            deplacementDroiteGauche();
            if (IsMonstreElimine()) {
                EliminationDuMonstre();
            }
        }
        if (!MonstreIsNull()) {
            supprimerMonstre();
        }
        if (ScoreMonstreIsActif()) {
            CadrageScoreMonstre();
            AjoutPointMonstre();
        }
        RessortIsTouch();
        JetPackIsTouch();
    }, getRafraichissement());
}

function stopTimerConfigurationModels() {
    clearInterval(configurationModels);
}

