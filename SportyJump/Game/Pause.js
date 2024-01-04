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
        pause.src = "Dessin/Terrain/ActiverPause2.png";
    } else {
        pause.src = "Dessin/Terrain/DesactiverPause2.png";
    }
}
function BoutonPauseReleased() {
    if (!pauseActif) {
        pause.src = "Dessin/Terrain/ActiverPause.png";
    } else {
        pause.src = "Dessin/Terrain/DesactiverPause.png";
    }
}

function BoutonClick() {
    if (!IsMonstreTouch() && !JetIsTouch()) {
        if (!pauseActif) {
            pauseActif = true;
            if (btEchap) {
                pause.src = "Dessin/Terrain/DesactiverPause.png";
            } else {
                pause.src = "Dessin/Terrain/DesactiverPause2.png";
            }
            stopTimerBallonDeplacement();
            stopTimerConfigurationModels();
        } else {
            pauseActif = false;
            if (btEchap) {
                pause.src = "Dessin/Terrain/ActiverPause.png";
            } else {
                pause.src = "Dessin/Terrain/ActiverPause2.png";
            }
            startTimerConfigurationModels();
            startTimerBallonDeplacement();
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
