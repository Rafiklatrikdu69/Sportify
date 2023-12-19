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

const jetpack = document.getElementById("jetpackFixe");

var plateforme2;
var jetIsNull = true;
var jetIsTouch = false;
var decollage;
var vole;
var fin;
var directionJet = false;


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
    jetpack.classList.remove("invisible");
}
function SuppressionDuJetack() {
    jetIsNull = true;
    jetpack.classList.add("invisible");
}
function afficherJetPack(plateforme) {
    if (parseInt(plateforme.id.match(/\d+/), 10) == 2 && !jetIsTouch) {
        let nb = Math.floor(Math.random() * 2);
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
        stopTimerBallonDeplacement();
        stopTimerConfigurationModels();
        setDirectionJet();
        gravity = 0;
        setImageDecollage();
        egaliserCooJetWithBall();
        startTimerDecollage();
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

//Timer qui simule un décollage; 
function startTimerDecollage() {
    decollage = setInterval(function () {
        setImageVole();
        setReculement();
        startTimerVole();
        startTimerFinVole();
        stopTimerDecollage();
    }, 900);
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

//Timer qui simule une volée; 
function startTimerVole() {
    vole = setInterval(function () {
        if (ScoreMonstreIsActif()) {
            CadrageScoreMonstre();
            AjoutPointMonstre();
        }

        ActionBoutonBallon();
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
        if (MonstreIsNull()) {
            AffichageMonstre();
        } else {
            reculementMonstreByJetPack();
            supprimerMonstre();
        }
    }, getRafraichissement());
}
function stopTimerVole() {
    clearInterval(vole);
}

function startTimerFinVole() {
    fin = setInterval(function () {
        stopTimerVole();
        setReculement();
        PlacementJetPack();
        DefinirTailleJetPack();
        jetpack.src = "Dessin/Plateforme/jetpack.png";
        jetpack.style.left = getXTerrain() - 300 + "px";
        jetIsTouch = false;
        jetIsNull = true;
        activerChuteLibre = false;
        startTimerBallonDeplacement();
        startTimerConfigurationModels();
        stopTimerFinVole();
    }, 7000);
}
function stopTimerFinVole() {
    clearInterval(fin);
}