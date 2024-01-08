var pause = document.getElementById("pause");
var pauseActif = false;
var btEchap = false;

function setPauseActif() {

}
function setPauseNonActif() {

}

function ConfigurationPause() {
    pause.style.position = "absolute";
    pause.style.left = 1144 / getFacteur() + "px";
    pause.style.top = 20 / getFacteur() + "px";
    var longueur = pause.height / getFacteur() + "px";
    var hauteur = pause.width / getFacteur() + "px";
    pause.style.height = longueur;
    pause.style.width = hauteur;
    pause.style.cursor = "pointer";
}

function BoutonPausePressed() {
    if (!pauseActif) {
        pause.src = "Dessin/Pause/ActiverPause2.png";
    } else {
        pause.src = "Dessin/Pause/DesactiverPause2.png";
    }
}
function BoutonPauseReleased() {
    if (!pauseActif) {
        pause.src = "Dessin/Pause/ActiverPause.png";
    } else {
        pause.src = "Dessin/Pause/DesactiverPause.png";
    }
}

function BoutonClick() {
    if (!IsMonstreTouch()) {
        if (!JetIsTouch()) {
            if (!pauseActif) {
                pauseActif = true;
                if (btEchap) {
                    pause.src = "Dessin/Pause/DesactiverPause.png";
                } else {
                    pause.src = "Dessin/Pause/DesactiverPause2.png";
                }
                stopTimerBallonDeplacement();
                stopTimerConfigurationModels();
            } else {
                pauseActif = false;
                if (btEchap) {
                    pause.src = "Dessin/Pause/ActiverPause.png";
                } else {
                    pause.src = "Dessin/Pause/ActiverPause2.png";
                }
                startTimerConfigurationModels();
                startTimerBallonDeplacement();
            }
        } else {
            if (!pauseActif) {
                pauseActif = true;
                switch (getPhaseJet()) {
                    case 1: stopTimerDecollage();
                        jetpack.src = "Dessin/Pause/pauseJet1.png";
                        break;
                    case 2: stopTimerVole();
                        stopTimerFinVole();
                        jetpack.src = "Dessin/Pause/pauseJet2.png";
                        break;
                    case 3: stopTimerAtterissage();
                        break;
                }
                if (btEchap) {
                    pause.src = "Dessin/Pause/DesactiverPause.png";
                } else {
                    pause.src = "Dessin/Pause/DesactiverPause2.png";
                }
            } else {
                pauseActif = false;
                switch (getPhaseJet()) {
                    case 1: jetpack.src = "Dessin/Pause/jetpackDecollage.gif";
                        startTimerDecollage();
                        break;
                    case 2: jetpack.src = "Dessin/Plateforme/jetpackVole.gif";
                        startTimerVole();
                        startTimerFinVole();
                        break;
                    case 3: startTimerAtterissage();
                        break;
                }
                if (btEchap) {
                    pause.src = "Dessin/Pause/ActiverPause.png";
                } else {
                    pause.src = "Dessin/Pause/ActiverPause2.png";
                }
            }
        }
        if (activerPauseChuteJet()) {
            if (pauseActif) {
                stopTimerChuteJet();
            } else {
                startTimerChuteJet();
            }
        }
    }
}

function BoutonEchapPressed(event) {
    if (event.key === "Escape" && !btEchap) {
        btEchap = true;
        BoutonClick();
    }
}
function BoutonEchapReleased(event) {
    if (event.key === "Escape") {
        btEchap = false;
    }
}
pause.addEventListener("mouseover", BoutonPausePressed);
pause.addEventListener("mouseout", BoutonPauseReleased);
pause.addEventListener("click", BoutonClick);
document.addEventListener("keydown", BoutonEchapPressed);
document.addEventListener("keyup", BoutonEchapReleased);
