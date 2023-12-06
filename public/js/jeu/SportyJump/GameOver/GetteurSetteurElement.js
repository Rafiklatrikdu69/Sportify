const titre = document.getElementById("titre"); 
const score = document.getElementById("actuelScore"); 
const score2 = document.getElementById("meilleurScorePersonnel"); 
const score3 = document.getElementById("meilleurScore"); 
const score4 = document.getElementById("pieceScore"); 
const pieceImage = document.getElementById("nbPiece"); 
const btJouerr = document.getElementById("boutonJouer"); 
const btMenuu = document.getElementById("boutonMenu"); 
const vitesseDefilement = 50 / getFacteur(); 

//================================================================== Partie getteur ==================================================================//
//================================================================== Partie getteur ==================================================================//
//================================================================== Partie getteur ==================================================================//

function getYTitre(){
    return titre.offsetTop; 
}
function getYScoreActuel(){
    return score.offsetTop;
}
function getYScorePersonnel(){
    return score2.offsetTop; 
}
function getYScoreGlobal(){
    return score3.offsetTop; 
}
function getYScorePiece(){
    return score4.offsetTop; 
}
function getYPieceImage(){
    return pieceImage.offsetTop; 
}
function getYBtJouer(){
    return btJouerr.offsetTop; 
}
function getYBtMenu(){
    return btMenuu.offsetTop; 
}

//================================================================== Partie setteur ==================================================================//
//================================================================== Partie setteur ==================================================================//
//================================================================== Partie setteur ==================================================================//

function setYTitre(){
    titre.style.top = getYTitre() - vitesseDefilement + "px"; 
}
function setYScoreActuel(){
    score.style.top = getYScoreActuel() - vitesseDefilement + "px"; 
}
function setYScorePersonnel(){
    score2.style.top = getYScorePersonnel() - vitesseDefilement + "px";  
}
function setYScoreGlobal(){
    score3.style.top = getYScoreGlobal() - vitesseDefilement + "px"; 
}
function setYScorePiece(){
    score4.style.top = getYScorePiece() - vitesseDefilement + "px"; 
}
function setYPieceImage(){
    pieceImage.style.top = getYPieceImage() - vitesseDefilement + "px"; 
}
function setYBtJouer(){
    btJouerr.style.top = getYBtJouer() - vitesseDefilement + "px";  
}
function setYBtMenu(){
    btMenuu.style.top = getYBtMenu() - vitesseDefilement + "px";
}