var TimerDeplacementDroite;

function deplacementDroite() {
    if (getType() >= 2 && getType() <= 6) {
        defilementBanderoleDroite();
        switch (getType()) {
            case 2:
                if (getXBanderole() <= -getLongueurTerrain() + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() + getXTerrain());
                    stopTimerDeplacementDroite();
                }
                break;
            case 3:
                if (getXBanderole() <= -getLongueurTerrain() * 2 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 2 + getXTerrain());
                    stopTimerDeplacementDroite();
                }
                break;
            case 4:
                if (getXBanderole() <= -getLongueurTerrain() * 3 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 3 + getXTerrain());
                    stopTimerDeplacementDroite();
                }
                break;
            case 5:
                if (getXBanderole() <= -getLongueurTerrain() * 4 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 4 + getXTerrain());
                    stopTimerDeplacementDroite();
                }
                break;
            case 6:
                if (getXBanderole() <= -getLongueurTerrain() * 5 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 5 + getXTerrain());
                    stopTimerDeplacementDroite();
                }
                break;
            default:
                break;
        }
    }
}


function startTimerDeplacementDroite() {
    TimerDeplacementDroite = setInterval(function () {
        deplacementDroite();
    }, getRafraichissement());
}

function stopTimerDeplacementDroite() {
    clearInterval(TimerDeplacementDroite);
}



