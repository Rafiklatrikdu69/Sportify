var nbScore = 0;
var nbPiece = 0;
var point = 0;
var pointGagne = 20;
var activerScore = false;
var score = 0
const scoreTexte = document.getElementById("score");
const nbPieceTexte = document.getElementById("nbPiece");

function setPointGagner(new_valeur) {
    pointGagne = new_valeur;
}
function setPoint() {
    if (point > 0) {
        point = point + pointGagne;
    } else {
        point = pointGagne;
    }
}
function diminuerPoint() {
    point = point - 1;
}
function augmenterScore() {
    score = score + point;
    scoreTexte.innerHTML = score;
}
function augmenterNbPiece() {
    nbPiece = nbPiece + 1;
    nbPieceTexte.innerHTML = "×" + nbPiece;
}
function ActivationScore() {
    activerScore = true;
    setPoint();
}
function makeScore() {
    if (activerScore) {
        augmenterScore();
        diminuerPoint();
        if (point <= 0) {
            activerScore = false;
        }
    }
}

function TransfererScore() {
    localStorage.setItem("scoreTexte", JSON.stringify(score));
    localStorage.setItem("nbPieceTexte", JSON.stringify(nbPiece));
}


//================================================================== Score Monstre ==================================================================//
//================================================================== Score Monstre ==================================================================//
//================================================================== Score Monstre ==================================================================//

const scoreMonstre = document.getElementById("scoreMonstre");
var nbScoreMonstre = 5000;
var activerScoreMonstre = false;
var timerScoreMonstre;

function ScoreMonstreIsActif() {
    return activerScoreMonstre;
}
function getLongueurTexte() {
    var textToMeasure = scoreTexte.textContent;
    var computedStyle = window.getComputedStyle(scoreTexte);
    var fontFamily = computedStyle.getPropertyValue('font-family');
    var fontSize = computedStyle.getPropertyValue('font-size');
    var font = fontSize + ' ' + fontFamily;

    var canvas = document.getElementById('mesureCanvas');
    var context = canvas.getContext('2d');
    context.font = font;
    var metrics = context.measureText(textToMeasure);
    return metrics.width;
}
function CadrageScoreMonstre() {
    scoreMonstre.style.left = scoreTexte.offsetLeft + getLongueurTexte() + 10 + "px";
}
function AfficherScoreMonstre() {
    nbScoreMonstre = 5000;
    scoreMonstre.innerHTML = "+" + nbScoreMonstre;
    scoreMonstre.classList.remove("invisible");
}
function ActiverScoreMonstre() {
    activerScoreMonstre = true;
}
function DesactiverScoreMonstre() {
    activerScoreMonstre = false;
    scoreMonstre.classList.add("invisible");
}
function AjoutPointMonstre() {
    var nb;
    if (nbScoreMonstre > 4000 && nbScoreMonstre <= 5000) {
        nb = 400;
    } else if (nbScoreMonstre > 1000 && nbScoreMonstre <= 4000) {
        nb = 200;
    } else if (nbScoreMonstre > 100 && nbScoreMonstre <= 1000) {
        nb = 100;
    } else if (nbScoreMonstre <= 100) {
        nb = 10;
    }
    score = score + nb;
    scoreTexte.innerHTML = score;
    nbScoreMonstre = nbScoreMonstre - nb;
    scoreMonstre.innerHTML = "+" + nbScoreMonstre;
    if (nbScoreMonstre <= 0) {
        DesactiverScoreMonstre();
    }
}

function startTimerScoreMonstre() {
    timerScoreMonstre = setInterval(function () {
        ActiverScoreMonstre();
        stopTimerScoreMonstre();
    }, 470);
}
function stopTimerScoreMonstre() {
    clearInterval(timerScoreMonstre);
}

//================================================================== Score JetPack ==================================================================//
//================================================================== Score JetPack ==================================================================//
//================================================================== Score JetPack ==================================================================//

var pointJet = 0; 
function augmenterScoreJet() {
    if(pointJet < 20){
        pointJet ++; 
    }
    score = score + pointJet;
    scoreTexte.innerHTML = score;
}