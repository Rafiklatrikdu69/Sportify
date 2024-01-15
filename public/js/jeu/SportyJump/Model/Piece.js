const piece = document.getElementById("piece");
var pieceIsNull = true;
var timerAnimationPiece;
var activerPiece = false;
var pieceTouch = false;
var reculementPiece = 0;

//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//

//Méthode pour changer l'image de la piece selon son obtention; 
function setImagePieceGif() {
    piece.src = "Dessin/Piece/piece.gif";
}
function setImageExplosion() {
    piece.src = "Dessin/Piece/piece_obtenu2.gif"
}
function startPieceObtenu() {
    timerAnimationPiece = setInterval(function () {
        piece.classList.add("invisible");
        activerPiece = false;
        if (getType() == 4) {
            reculementPiece = 0;
            piece.style.top = getYTerrain() + getLargeurTerrain() + 50 + "px";
            supprimerPiece();
            AffichagePiece();
        }
        stopPieceObtenu();
    }, 480);
}
function stopPieceObtenu() {
    clearInterval(timerAnimationPiece);
}
//Méthode getteur; 
function PieceIsNull() {
    return pieceIsNull;
}
function getXPiece() {
    return piece.offsetLeft;
}
function getYPiece() {
    return piece.offsetTop
}
function getLongueurPiece() {
    return piece.width;
}
function getLargeurPiece() {
    return piece.height;
}

//Méthode setteur; 
function setXPiece(new_x) {
    piece.style.left = new_x + "px";
}
function setYPiece(new_y) {
    piece.style.top = new_y + "px";
}

//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//

//Méthode réinitialier la piece; 
function setReculementPiece() {
    reculementPiece = getVitesse();
}
function setReulementPieceWithValue(nb) {
    reculementPiece = nb;
}
//Méthode défilement de la piece dans la page Game.html; 
function ReculerPiece() {
    piece.style.top = getYPiece() + reculementPiece + "px";
    reculementPiece = reculementPiece - 1;
}
function ActivationPiece() {
    activerPiece = true;
    setReculementPiece();
}
function DescentePiece() {
    if (activerPiece) {
        ReculerPiece();
        if (reculementPiece <= 0) {
            activerPiece = false;
        }
    }
}
function AffichagePiece() {
    let nb = Math.floor(Math.random() * 3);
    if (nb == 0 || getType() == 4) {
        pieceIsNull = false;
        setImagePieceGif();
        setXPiece(Math.floor(Math.random() * 1100 / getFacteur()) + 60 / getFacteur());
        setYPiece(-240 / getFacteur());
        setReculementPiece();
        pieceTouch = false;
        piece.classList.remove("invisible");
    }
}
function supprimerPiece() {
    if (getYPiece() >= getYTerrain() + getLargeurTerrain()) {
        pieceIsNull = true;
        piece.classList.add("invisible");
        stopPieceObtenu();
    }
}
//Collision entre la piece et le ballon; 
function PieceTouchee() {
    if (!pieceTouch &&
        getXBallonHitBoxGet() + getLongueurHitBoxGet() >= getXPiece() && getXBallonHitBoxGet() <= getXPiece() + getLongueurPiece() &&
        getYBallonHitBoxGet() + getLargeurHitBoxGet() >= getYPiece() && getYBallonHitBoxGet() <= getYPiece() + getLargeurPiece()) {
        startPieceObtenu();
        augmenterNbPiece();
        setImageExplosion();
        piece.style.left = getXPiece() - 32 + "px";
        piece.style.top = getYPiece() - 18 + "px";
        pieceTouch = true;
    }
}

function reculementPieceByPiece() {
    piece.style.top = getYPiece() + getReculement() + "px";
}
//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//
function TransfererCooPiece() {
    let cooPiece = [getXPiece(), getYPiece()];
    localStorage.setItem("cooPiece", JSON.stringify(cooPiece));
    if (pieceTouch || pieceIsNull) {
        localStorage.setItem("pieceIsNull", JSON.stringify(true));
    } else {
        localStorage.setItem("pieceIsNull", JSON.stringify(false));
    }
}
function reculerPieceGameOver() {
    piece.style.top = getYPiece() - reculementPiece + "px";
    if (reculementPiece < 60 / getFacteur()) {
        reculementPiece = reculementPiece + 1;
    }
}
function supprimerMonstreGameOver() {
    piece.classList.add("invisible");
}