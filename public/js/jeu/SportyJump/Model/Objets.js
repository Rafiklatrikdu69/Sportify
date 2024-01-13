//================================================================== Ressort ==================================================================//
//================================================================== Ressort ==================================================================//
//================================================================== Ressort ==================================================================//

const ressort = document.getElementById("ressort");
var plateforme;
var rebondissement;
var ressortIsNull = false;
var ressortIsTouch = false;


function RessortIsNull() {
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
        if (nb == 0 || getType() == 3) {
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
    if (getType() == 3) {
        if (getYBallonHitBoxSaut() > 300 + getYTerrain()) {
            setJump(60 / getFacteur());
        } else {
            setJump(35 / getFacteur());
        }
        setVitessePlateforme(120 / getFacteur());
    } else {
        if (getYBallonHitBoxSaut() > 300 + getYTerrain()) {
            setJump(50 / getFacteur());
        } else {
            setJump(25 / getFacteur());
        }
        setVitessePlateforme(110 / getFacteur());
    }
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

const jetpack = document.getElementById("jetpackFixe");

var plateforme2;
var jetIsNull = true;
var jetIsTouch = false;
var decollage;
var vole;
var fin;
var directionJet = false;
var atterissage;
var vitesseChuteJet = 1;
var chuteJet;
var compteurJetDebut = 0;
var compteurJetFin = 0;
var phaseJet = 0;
var activerChuteJetPause = false;

function getXJet() {
    return jetpack.offsetLeft;
}
function getYJet() {
    return jetpack.offsetTop;
}
function getLongueurJet() {
    return jetpack.width;
}
function getLargeurJet() {
    return jetpack.height;
}

function setDirectionJet() {
    if (getYBallonHitBoxSaut() > (getLargeurTerrain() - getYTerrain()) / 2 - (70 / getFacteur())) {
        directionJet = true;
    } else {
        directionJet = false;
    }
}

function jetpackIsNull() {
    return jetIsNull;
}
function JetIsTouch() {
    return jetIsTouch;
}
function getPhaseJet() {
    return phaseJet;
}
function setPlateformeDuJetPack() {
    plateforme2 = document.getElementById("plateforme2");
}
function egaliserCooJetPack() {
    if (!jetIsNull) {
        jetpack.style.left = getXPlateforme(plateforme2) + 20 + "px";
        jetpack.style.top = getYPlateforme(plateforme2) - getLargeurRessort() + "px";
    }
}
function AjoutDuJetPack() {
    jetIsNull = false;
    vitesseChuteJet = 1;
    jetpack.classList.remove("invisible");
}
function SuppressionDuJetack() {
    jetIsNull = true;
    jetIsTouch = false;
    compteurJetDebut = 0;
    compteurJetFin = 0;
    phaseJet = 0;
    PlacementJetPack();
    DefinirTailleJetPack();
}
function afficherJetPack(plateforme) {
    if (parseInt(plateforme.id.match(/\d+/), 10) == 2 && !jetIsTouch) {
        let nb;
        if (getType() == 6) {
            nb = Math.floor(Math.random() * 3);
        } else {
            nb = Math.floor(Math.random() * 10);
        }
        if (nb == 0) {
            AjoutDuJetPack();
        } else {
            SuppressionDuJetack();
        }
    }
}
function JetPackIsTouch() {
    if (!jetIsTouch && !jetIsNull && !IsMonstreTouch() &&
        getXBallonHitBoxSaut() + getLongueurHitBoxSaut() >= getXJet() && getXBallonHitBoxSaut() <= getXJet() + getLongueurJet() &&
        getYBallonHitBoxSaut() + getLargeurHitBoxSaut() >= getYJet() && getYBallonHitBoxSaut() <= getYJet() + getLargeurJet()) {

        jetIsTouch = true;
        jetIsNull = true;
        stopTimerBallonDeplacement();
        stopTimerConfigurationModels();
        setDirectionJet();
        gravity = 0;
        setReculement();
        setImageDecollage();
        egaliserCooJetWithBall();
        startTimerDecollage();
        phaseJet = 1;
    }
}

function setImageDecollage() {
    jetpack.src = "Dessin/Plateforme/jetpackDecollage.gif";
    jetpack.style.width = 299 / getFacteur() + "px";
    jetpack.style.height = 391 / getFacteur() + "px";
}

function egaliserCooJetWithBall() {
    jetpack.style.left = getXBallonImage() - 82 / getFacteur() + "px";
    jetpack.style.top = getYBallonImage() - 20 / getFacteur() + "px";
}

function setImageVole() {
    jetpack.src = "Dessin/Plateforme/jetpackVole.gif";
}

//Timer qui simule un décollage => PHASE 1; 
function startTimerDecollage() {
    decollage = setInterval(function () {
        compteurJetDebut++
        if (compteurJetDebut >= 36) {
            setImageVole();
            setReculement();
            startTimerVole();
            startTimerFinVole();
            stopTimerDecollage();
            phaseJet = 2;
        }
    }, getRafraichissement());
}
function stopTimerDecollage() {
    clearInterval(decollage);
}

function redressementJetPack() {
    if (directionJet) {
        if (getYBallonHitBoxSaut() > (getLargeurTerrain() - getYTerrain()) / 2 - (70 / getFacteur())) {
            ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() - gravity + "px";
            if (gravity < 30 / getFacteur()) {
                gravity = gravity + 0.4;
            }
            egaliserCoo();
        } else {
            deplacementHaut = false;
            deplacementBas = true;
            activerChuteLibre = true;
        }
    } else {
        if (getYBallonHitBoxSaut() < (getLargeurTerrain() - getYTerrain()) / 2 - (70 / getFacteur())) {
            ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() + gravity + "px";
            if (gravity < 30 / getFacteur()) {
                gravity = gravity + 0.4;
            }
            egaliserCoo();
        } else {
            deplacementHaut = true;
            deplacementBas = false;
            activerChuteLibre = true;
        }
    }
}

//Timer qui simule une volée => PHASE 2; 
function startTimerVole() {
    vole = setInterval(function () {
        ActionBoutonBallon();
        augmenterScoreJet();
        makeScore();
        if (ScoreMonstreIsActif()) {
            CadrageScoreMonstre();
            AjoutPointMonstre();
        }
        if (activerChuteLibre) {
            deplacementHautBasBallon();
        } else {
            redressementJetPack();
        }
        egaliserCooJetWithBall();
        document.querySelectorAll(".plateforme").forEach(function (p) {
            NouvelAffichagePlateformeDescente(p);
            mouvementPlateforme(p);
        });
        reculementPlateformeByJetPack();
        if (PieceIsNull()) {
            AffichagePiece();
        } else {
            reculementPieceByPiece();
            supprimerPiece();
            PieceTouchee();
        }
        if (!MonstreIsNull()) {
            reculementMonstreByJetPack();
            supprimerMonstre();
        }
    }, getRafraichissement());
}
function stopTimerVole() {
    clearInterval(vole);
}

//Timer qui simule une volée => PHASE 2; 
function startTimerFinVole() {
    fin = setInterval(function () {
        compteurJetFin++;
        if (compteurJetFin >= 250) {
            stopTimerVole();
            activerChuteLibre = false;
            setReculementWithValue(25);
            setJump(17);
            setGravity();
            startTimerAtterissage();
            jetpack.src = "Dessin/Plateforme/jetpackArret.gif";
            startTimerChuteJet();
            stopTimerFinVole();
            phaseJet = 3;
            activerChuteJetPause = true;
        }
    }, getRafraichissement());
}
function stopTimerFinVole() {
    clearInterval(fin);
}

//Timer qui simule un atterissage => PHASE 3; 
function startTimerAtterissage() {
    atterissage = setInterval(function () {
        ActionBoutonBallon();
        makeJumpAfterJetPack();
        reculementPlateformeAtterissage();
        if (PieceIsNull()) {
            AffichagePiece();
        } else {
            reculementPieceByPiece();
            supprimerPiece();
            PieceTouchee();
        }
        egaliserCooRessort();
        setReulementPieceWithValue(0);
    }, getRafraichissement());
}
function stopTimerAtterissage() {
    clearInterval(atterissage);
}
//Timer une chute du jet => PHASE 2; 
function startTimerChuteJet() {
    chuteJet = setInterval(function () {
        jetpack.style.top = getYJet() + vitesseChuteJet + "px";
        jetpack.style.left = getXJet() - 3 + "px";
        vitesseChuteJet = vitesseChuteJet + 0.8;
        if (getYJet() > getYTerrain() + getLargeurTerrain() + 20) {
            SuppressionDuJetack();
            activerChuteJetPause = false;
            clearInterval(chuteJet);
        }
    }, getRafraichissement());
}
function stopTimerChuteJet() {
    clearInterval(chuteJet);
}

function activerPauseChuteJet() {
    return activerChuteJetPause;
}