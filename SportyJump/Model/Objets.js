//================================================================== Objet ==================================================================//
//================================================================== Objet ==================================================================//
//================================================================== Objet ==================================================================//
const ressort = document.getElementById("ressort");
var plateforme;
var rebondissement;
var ressortIsNull = false;
var ressortIsTouch = false;

function setPlateformeDuRessort() {
    plateforme = document.getElementById("plateforme0");
}
function getXRessort() {
    return ressort.offsetLeft;
}
function getYRessort() {
    return ressort.offsetTop;
}
function getLongueurRessort() {
    return ressort.offsetWidth;
}
function getLargeurRessort() {
    return ressort.offsetHeight;
}

function setRebondissement() {
    ressort.src = "Dessin/Plateforme/rebondissementRessort.gif";
}
function startTimerRebondissementRessort() {
    rebondissement = setInterval(function () {
        ressort.src = "Dessin/Plateforme/ressort.png";
        ressortIsTouch = false;
        stopTimerRebondissementRessort();
    }, 550);
}

function stopTimerRebondissementRessort() {
    clearInterval(rebondissement);
}
function egaliserCooRessort() {
    if (!ressortIsNull) {
        ressort.style.left = getXPlateforme(plateforme) + 10 + "px";
        ressort.style.top = getYPlateforme(plateforme) - getLargeurRessort() + 3 + "px";
    }
}
function AjoutDuRessort() {
    ressortIsNull = false;
    ressort.classList.remove("invisible");
}
function SuppressionDuRessort() {
    ressortIsNull = true;
    ressort.classList.add("invisible");
}
function RessortIsTouch() {
    if (!ressortIsTouch && !ressortIsNull && gravity > 8 && !IsMonstreTouch() &&
        getXBallonHitBoxSaut() + getLongueurHitBoxSaut() >= getXRessort() && getXBallonHitBoxSaut() <= getXRessort() + getLongueurRessort() &&
        getYBallonHitBoxSaut() + getLargeurHitBoxSaut() >= getYRessort() && getYBallonHitBoxSaut() <= getYRessort() + getLargeurRessort() + 10) {

        DescenteElement();
        setRebond(getType());
        setRebondissement();
        startTimerRebondissementRessort();
        ressortIsTouch = true;
        setInvulnerabiliteBallon(true);
    }
}

function DescenteElement() {
    if (getYBallonHitBoxSaut() > 300 + getYTerrain()) {
        setJump(50 / getFacteur());
    } else {
        setJump(25 / getFacteur());
    }
    setVitessePlateforme(110 / getFacteur());
    ActivationPlateforme();
    if (!PieceIsNull()) {
        ActivationPiece();
    }
    if (!MonstreIsNull()) {
        ActivationMonstre();
    }
    setPointGagner(40);
    ActivationScore();
    makeJump();
}
