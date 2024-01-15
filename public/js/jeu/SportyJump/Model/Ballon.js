const ballonImage = document.getElementById("ballonImage");
const ballonHitBoxSaut = document.getElementById("ballonHitBoxSaut");
const ballonHitBoxGet = document.getElementById("ballonHitBoxGet");
const vitesseAbscisse = 16 / getFacteur() * 1.25;
const typeBallon = getType();
var jump = 40 / getFacteur();
var gravity = 0;
var monstreTouch = false;
let reinitialiseBallon;
var keyDroite = false;
var keyGauche = false;
var nbPlateformeTouch = 0;
var nbMonstreTouch = 0;
var invulnerable = false;
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//

function setInvulnerabiliteBallon(op) {
    invulnerable = op;
}
function BallonIsInvulnerable() {
    return invulnerable;
}
function setGravity() {
    gravity = jump;
}
function setJump(nb) {
    jump = nb;
}
function egaliserCoo() {
    ballonImage.style.left = getXBallonHitBoxSaut() - 48 / getFacteur() + "px";
    ballonImage.style.top = getYBallonHitBoxSaut() - 141 / getFacteur() + "px";

    ballonHitBoxGet.style.left = getXBallonHitBoxSaut() - 19 / getFacteur() + "px";
    ballonHitBoxGet.style.top = getYBallonHitBoxSaut() - 79 / getFacteur() + "px";
}

//Définir l'apparence du ballon selon le sport;
function setImageBallon(type) {
    switch (typeBallon) {
        case 2: ballonImage.src = "Dessin/Ballon/ballon_basket.png";
            break;
        case 3: ballonImage.src = "Dessin/Ballon/ballon_tennis.png";
            break;
        case 4: ballonImage.src = "Dessin/Ballon/ballon_baseball.png";
            break;
        case 5: ballonImage.src = "Dessin/Ballon/ballon_rugby.png";
            break;
        case 6: ballonImage.src = "Dessin/Ballon/ballon_bowling.png";
            break;
        default: ballonImage.src = "Dessin/Ballon/ballon_foot.png";
            break;
    }
}
function setRebond(type) {
    switch (typeBallon) {
        case 2: ballonImage.src = "Dessin/Ballon/ballon_basket.gif";
            break;
        case 3: ballonImage.src = "Dessin/Ballon/ballon_tennis.gif";
            break;
        case 4: ballonImage.src = "Dessin/Ballon/ballon_baseball.gif";
            break;
        case 5: ballonImage.src = "Dessin/Ballon/ballon_rugby.gif";
            break;
        case 6: ballonImage.src = "Dessin/Ballon/ballon_bowling.gif";
            break;
        default: ballonImage.src = "Dessin/Ballon/ballon_foot.gif";
            break;
    }
    startTimerRebond();
}

function startTimerRebond() {
    reinitialiseBallon = setInterval(function () {
        setImageBallon(typeBallon);
        stopTimerRebond();
    }, 440);
}

function stopTimerRebond() {
    clearInterval(reinitialiseBallon);
}
//Obtenir les coordonées de l'image du ballon; 
function getXBallonImage() {
    return ballonImage.offsetLeft;
}
function getYBallonImage() {
    return ballonImage.offsetTop;
}
//Obtenir les coordonées de l'image de la HiBox de saut du ballon; 
function getXBallonHitBoxSaut() {
    return ballonHitBoxSaut.offsetLeft;
}
function getYBallonHitBoxSaut() {
    return ballonHitBoxSaut.offsetTop;
}
function getLongueurHitBoxSaut() {
    return ballonHitBoxSaut.width;
}
function getLargeurHitBoxSaut() {
    return ballonHitBoxSaut.height;
}
//Obtenir les coordonées de l'image de la HitBox d'obtention du ballon; 
function getXBallonHitBoxGet() {
    return ballonHitBoxGet.offsetLeft;
}
function getYBallonHitBoxGet() {
    return ballonHitBoxGet.offsetTop;
}
function getLongueurHitBoxGet() {
    return ballonHitBoxGet.width;
}
function getLargeurHitBoxGet() {
    return ballonHitBoxGet.height;
}

//================================================================== Partie Controleur ==================================================================//
//================================================================== Partie Controleur ==================================================================//
//================================================================== Partie Controleur ==================================================================//
function ActionBoutonBallon() {
    if (keyDroite) {
        setDirectionDroite();
        if (getXBallonHitBoxSaut() >= getLongueurTerrain() - getXTerrain() - getLongueurHitBoxSaut() + 20) {
            teleportationGauche();
        }
    }
    if (keyGauche) {
        setDirectionGauche();
        if (getXBallonHitBoxSaut() <= getXTerrain() - 25) {
            teleportationDroite();
        }
    }
}
function setDirectionDroite() {
    if (!monstreTouch) {
        ballonHitBoxSaut.style.left = ballonHitBoxSaut.offsetLeft + vitesseAbscisse + "px";
        egaliserCoo();
    }
}
function setDirectionGauche() {
    if (!monstreTouch) {
        ballonHitBoxSaut.style.left = ballonHitBoxSaut.offsetLeft - vitesseAbscisse + "px";
        egaliserCoo();
    }
}
function teleportationDroite() {
    ballonHitBoxSaut.style.left = getLongueurTerrain() + getXTerrain() - getLongueurHitBoxSaut() + "px";
    egaliserCoo();
}
function teleportationGauche() {
    ballonHitBoxSaut.style.left = getXTerrain() + "px";
    egaliserCoo();
}
function setKeyDroite(key) {
    keyDroite = key;
}
function setKeyGauche(key) {
    keyGauche = key;
}

//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//

function Fall() {
    ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() + gravity + "px";
    gravity = gravity + 1;
    egaliserCoo();
}
function makeJump() {
    gravity = -jump;
}
function EquilibrageJumpEtVitesse() {
    if (getType() == 3) {
        if (getYBallonHitBoxSaut() > 300 + getYTerrain()) {
            jump = 43 / getFacteur();
            setVitessePlateforme(60 / getFacteur());
        } else {
            jump = 22 / getFacteur();
            setVitessePlateforme(100 / getFacteur());
        }
    } else {
        if (getYBallonHitBoxSaut() > 300 + getYTerrain()) {
            jump = 37 / getFacteur();
            setVitessePlateforme(45 / getFacteur());
        } else {
            jump = 20 / getFacteur();
            setVitessePlateforme(70 / getFacteur());
        }
    }
    setPointGagner(20);
    setReculement();
}
function IsPlateformeTouch(plateforme) {
    let op = false;
    if (!monstreTouch && gravity > 8 &&
        getXBallonHitBoxSaut() + getLongueurHitBoxSaut() >= getXPlateforme(plateforme) && getXBallonHitBoxSaut() <= getXPlateforme(plateforme) + getLongueurPlateforme(plateforme) &&
        getYBallonHitBoxSaut() + getLargeurHitBoxSaut() >= getYPlateforme(plateforme) && getYBallonHitBoxSaut() <= getYPlateforme(plateforme) + getLargeurPlateforme(plateforme) + 10) {
        op = true;
        stopTimerRebond();
        EquilibrageJumpEtVitesse();
        makeJump();
        setRebond(typeBallon);
        nbPlateformeTouch++;
        invulnerable = false;
    }
    return op;
}
function IsMonstreTouch() {
    return monstreTouch;
}

//Collision avec le monstre; 
function BallonElimineMonstre() {
    if (gravity > 5 &&
        getXBallonHitBoxSaut() + getLongueurHitBoxSaut() >= getXMonstreHitBoxVulnerable() && getXBallonHitBoxSaut() <= getXMonstreHitBoxVulnerable() + getLongueurHitBoxVulnerable() &&
        getYBallonHitBoxSaut() + getLargeurHitBoxSaut() >= getYMonstreHitBoxVulnerable() && getYBallonHitBoxSaut() <= getYMonstreHitBoxVulnerable() + getLargeurHitBoxVulnerable()) {

        CadrageScoreMonstre();
        AfficherScoreMonstre();
        startTimerScoreMonstre();
        jump = 40 / getFacteur();
        makeJump();
        setRebond(getType());
        EliminerMonstre();
        nbMonstreTouch++;
    }
}
//Méthodes utilsées dans le fichier monstre.js; 
function resetGravity() {
    gravity = 0;
}
function trueMonstreTouch() {
    monstreTouch = true;
}

function TransfererCooBallon() {
    let cooBallon = [getXBallonHitBoxSaut(), getYBallonHitBoxSaut()];
    localStorage.setItem("cooBallon", JSON.stringify(cooBallon));
}
function GameOver() {
    if (getYBallonHitBoxSaut() > getYTerrain() + getLargeurTerrain() + 100 / getFacteur()) {
        stopTimerConfigurationModels();
        stopTimerBallonDeplacement();
        TransfererCooPlateforme();
        TransfererCooBallon();
        TransfererScore();
        TransfererCooMonstre();
        TransfererCooPiece();
        localStorage.setItem("activerModification", JSON.stringify(true));
        window.location.href = "GameOver.html?entier=" + encodeURIComponent(getType());
        //console.log("nombre de plateforme touchée : " + nbPlateformeTouch);
        //console.log("nombre de monstre éliminé : " + nbMonstreTouch);
    }
}

//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//

var deplacementHaut = true;
var deplacementBas = false;
var vitesseChuteLibre = 10 / getFacteur();
var activerChuteLibre = false;

function isChuteLibreActivate() {
    return activerChuteLibre;
}
function fallGameOver() {
    ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() - gravity + "px";
    if (gravity < 40 / getFacteur()) {
        gravity = gravity + 1;
    }
    egaliserCoo();
}
function redressementBallon() {
    if (!activerChuteLibre) {
        if (getYBallonHitBoxSaut() > (getLargeurTerrain() - getYTerrain()) / 2 - (70 / getFacteur())) {
            fallGameOver();
        } else {
            gravity = -vitesseChuteLibre;
            activerChuteLibre = true;
        }
    }
}

function deplacementHautBasBallon() {
    if (deplacementHaut) {
        ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() + gravity + "px";
        gravity = gravity + 1;
        if (gravity > vitesseChuteLibre) {
            gravity = -vitesseChuteLibre;
            deplacementHaut = false;
            deplacementBas = true;
        }
    }
    if (deplacementBas) {
        ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() - gravity + "px";
        gravity = gravity + 1;
        if (gravity > vitesseChuteLibre) {
            gravity = -vitesseChuteLibre;
            deplacementHaut = true;
            deplacementBas = false;
        }
    }
    egaliserCoo();
}


//=============================================================== Partie Menu ===============================================================//
//=============================================================== Partie Menu ===============================================================//
//=============================================================== Partie Menu ===============================================================//

function IsPlateformeTouchForMenu(plateforme) {
    let op = false;
    if (!monstreTouch && gravity > 8 &&
        getXBallonHitBoxSaut() + getLongueurHitBoxSaut() >= getXPlateforme(plateforme) && getXBallonHitBoxSaut() <= getXPlateforme(plateforme) + getLongueurPlateforme(plateforme) &&
        getYBallonHitBoxSaut() + getLargeurHitBoxSaut() >= getYPlateforme(plateforme) && getYBallonHitBoxSaut() <= getYPlateforme(plateforme) + getLargeurPlateforme(plateforme) + 10) {
        op = true;
        stopTimerRebond();
        makeJump();
        setRebond(typeBallon);
    }
    return op;
}


//=============================================================== Partie JetPack ===============================================================//
//=============================================================== Partie JetPack ===============================================================//
//=============================================================== Partie JetPack ===============================================================//

function makeJumpAfterJetPack() {
    if (gravity > 0) {
        ballonHitBoxSaut.style.top = getYBallonHitBoxSaut() - gravity + "px";
        gravity = gravity - 1;
        egaliserCoo();
    } else {
        startTimerBallonDeplacement();
        startTimerConfigurationModels();
        stopTimerAtterissage();
        jetIsTouch = false;
    }
}