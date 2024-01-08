var TimerDeplacementGauche;

function deplacementGauche() {
    if (getType() >= 1 && getType() <= 5) {
        defilementBanderoleGauche();
        switch (getType()) {
            case 1:
                if (getXBanderole() >= getXTerrain()) {
                    setXBanderole(getXTerrain());
                    stopTimerDeplacementGauche();
                }
                break;
            case 2:
                if (getXBanderole() >= -getLongueurTerrain() + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() + getXTerrain());
                    stopTimerDeplacementGauche();
                }
                break;
            case 3:
                if (getXBanderole() >= -getLongueurTerrain() * 2 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 2 + getXTerrain());
                    stopTimerDeplacementGauche();
                }
                break;
            case 4:
                if (getXBanderole() >= -getLongueurTerrain() * 3 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 3 + getXTerrain());
                    stopTimerDeplacementGauche();
                }
                break;
            case 5:
                if (getXBanderole() >= -getLongueurTerrain() * 4 + getXTerrain()) {
                    setXBanderole(-getLongueurTerrain() * 4 + getXTerrain());
                    stopTimerDeplacementGauche();
                }
                break;
            default:
                break;
        }
    }
}


function startTimerDeplacementGauche() {
    TimerDeplacementGauche = setInterval(function () {
        deplacementGauche();
    }, getRafraichissement());
}

function stopTimerDeplacementGauche() {
    clearInterval(TimerDeplacementGauche);
}



