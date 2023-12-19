//================================================================== Ressort ==================================================================//
//================================================================== Ressort ==================================================================//
//================================================================== Ressort ==================================================================//

const ressort = document.getElementById("ressort");
var plateforme;
var rebondissement;
var ressortIsNull = false;
var ressortIsTouch = false;


function RessortIsNull(){
    return ressortIsNull; 
}
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

function afficherRessort(plateforme) {
    if (parseInt(plateforme.id.match(/\d+/), 10) == 0) {
        let nb = Math.floor(Math.random() * 2);
        if (nb == 0) {
            AjoutDuRessort();
        } else {
            SuppressionDuRessort();
        }
    }
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

//================================================================== JetPack ==================================================================//
//================================================================== JetPack ==================================================================//
//================================================================== JetPack ==================================================================//

const jetpackFixe = document.getElementById("jetpackFixe"); 
const jetpackDecollage = document.getElementById(""); 
const jetpackVole = document.getElementById(""); 
var plateforme2; 
var jetIsNull = true; 
var jetIsTouch = false; 


function getXJet(){
    return jetpackFixe.offsetLeft; 
}
function getYJet(){
    return jetpackFixe.offsetTop; 
}
function getLongueurJet(){
    return jetpackFixe.width; 
}
function getLargeurJet(){
    return jetpackFixe.height; 
}


function jetpackIsNull(){
    return jetIsNull; 
}
function setPlateformeDuJetPack(){
    plateforme2 = document.getElementById("plateforme2"); 
}

function egaliserCooJetPack() {
    if (!jetIsNull) {
        jetpackFixe.style.left = getXPlateforme(plateforme2) + 20 + "px";
        jetpackFixe.style.top = getYPlateforme(plateforme2) - getLargeurRessort() + "px";
    }
}

function AjoutDuJetPack(){
    jetIsNull = false; 
    jetpackFixe.classList.remove("invisible"); 
}
function SuppressionDuJetack(){
    jetIsNull = true; 
    jetpackFixe.classList.add("invisible"); 
}
function afficherJetPack(plateforme) {
    if (parseInt(plateforme.id.match(/\d+/), 10) == 2) {
        let nb = Math.floor(Math.random() * 2);
        if (nb == 0) {
            AjoutDuJetPack();
        } else {
            SuppressionDuJetack();
        }
    }
}