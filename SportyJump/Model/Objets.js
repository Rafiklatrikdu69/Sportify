//================================================================== Objet ==================================================================//
//================================================================== Objet ==================================================================//
//================================================================== Objet ==================================================================//
const ressort = document.getElementById("ressort");
var rebondissement;
var ressortIsNull = true;
var ressortIsTouch = false;

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
function AjoutDuRessort() {
    const plateforme = document.getElementById("plateforme0");
    ressort.style.left = getXPlateforme(plateforme) + 10 + "px";
    ressort.style.top = getYPlateforme(plateforme) - getLargeurRessort() + 3 + "px";
}

function RessortIsTouch() {
    if (!ressortIsTouch && gravity > 8 &&
        getXBallonHitBoxSaut() + getLongueurHitBoxSaut() >= getXRessort() && getXBallonHitBoxSaut() <= getXRessort() + getLongueurRessort() &&
        getYBallonHitBoxSaut() + getLargeurHitBoxSaut() >= getYRessort() && getYBallonHitBoxSaut() <= getYRessort() + getLargeurRessort() + 10) {
        makeJump();
        setRebond(getType());
        setRebondissement();
        startTimerRebondissementRessort();
        ressortIsTouch = true;

    }
}

