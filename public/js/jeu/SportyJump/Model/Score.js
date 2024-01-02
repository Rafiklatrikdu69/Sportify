var nbScore = 0;
var nbPiece = 0;
var point = 0;
var pointGagne = 40 / getFacteur();
var activerScore = false;
var score = 0
const scoreTexte = document.getElementById("score");
const nbPieceTexte = document.getElementById("nbPiece");
function setPointGagner(new_valeur) {
    point = new_valeur;
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
    // TransfererScore()
    
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