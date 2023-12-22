const monstreImage = document.getElementById("monstreImage");
const monstreHitBoxAttack = document.getElementById("monstreHitBoxAttack");
const monstreHitBoxVulnerable = document.getElementById("monstreHitBoxVulnerable");
var typeMonstre = 0;
var reculementMonstre = 0;
var vitesseMonstre = 10 / getFacteur();
var gravityMonstre = vitesseMonstre;
var deplacementMonstreDroite = true;
var deplacementMonstreGauche = false;
var monstreIsNull = true;
var isElimine;
var ballonTouch = false;
var activerMonstre = false;

//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//

function setXHitBoxAttack(new_x) {
    monstreHitBoxAttack.style.left = new_x + "px";
}
function setYHitBoxAttack(new_y) {
    monstreHitBoxAttack.style.top = new_y + "px";
}
//Coordonnées de l'image du monstre;
function getXMonstreImage() {
    return monstreImage.offsetLeft;
}
function getYMonstreImage() {
    return monstreImage.offsetTop;
}
//Coordonnées de la HitBox d'attaque du monstre;
function getXMonstreHitBoxAttack() {
    return monstreHitBoxAttack.offsetLeft;
}
function getYMonstreHitBoxAttack() {
    return monstreHitBoxAttack.offsetTop;
}
function getLongueurHitBoxAttack() {
    return monstreHitBoxAttack.width;
}
function getLargeurHitBoxAttack() {
    return monstreHitBoxAttack.height;
}
//Coordonnées de la HitBox de vulnérabilité du monstre; 
function getXMonstreHitBoxVulnerable() {
    return monstreHitBoxVulnerable.offsetLeft;
}
function getYMonstreHitBoxVulnerable() {
    return monstreHitBoxVulnerable.offsetTop;
}
function getLongueurHitBoxVulnerable() {
    return monstreHitBoxVulnerable.width;
}
function getLargeurHitBoxVulnerable() {
    return monstreHitBoxVulnerable.height;
}
//Egaliser les coordonées de chaques élèments pour qu'il se supperpose correctement; 
function egaliserCooMonstre() {
    monstreImage.style.left = getXMonstreHitBoxAttack() - 30 / getFacteur() + "px";
    monstreImage.style.top = getYMonstreHitBoxAttack() - 54 / getFacteur() + "px";
    monstreHitBoxVulnerable.style.left = getXMonstreImage() + 30 / getFacteur() + "px";
    monstreHitBoxVulnerable.style.top = getYMonstreImage() + "px";
}

//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//

//Definir une image aléatoire du monstre; 
function setImageMonstre() {
    let nb = Math.floor(Math.random() * 5);
    switch (nb) {
        case 1: monstreImage.src = "Dessin/Monstre/Italie.png";
            typeMonstre = 1;
            break;
        case 2: monstreImage.src = "Dessin/Monstre/Allemagne.png";
            typeMonstre = 2;
            break;
        case 3: monstreImage.src = "Dessin/Monstre/France.png";
            typeMonstre = 3;
            break;
        case 4: monstreImage.src = "Dessin/Monstre/Algerie.png";
            typeMonstre = 4;
            break;
        default: monstreImage.src = "Dessin/Monstre/Albanie.png";
            typeMonstre = 0;
            break;
    }
}
//Méthode defilement du monstre; 
function setReculementMonstre() {
    reculementMonstre = getVitesse();
}
function MonstreIsNull() {
    return monstreIsNull;

}
function ReculerMonstre() {
    monstreHitBoxAttack.style.top = getYMonstreHitBoxAttack() + reculementMonstre + "px";
    reculementMonstre = reculementMonstre - 1;
    egaliserCooMonstre();
}
function ActivationMonstre() {
    activerMonstre = true;
    setReculementMonstre();
}
function DescenteMonstre() {
    if (activerMonstre) {
        ReculerMonstre();
        if (reculementMonstre <= 0) {
            activerMonstre = false;
        }
    }
}
function AffichageMonstre() {
    let nb = Math.floor(Math.random() * 8);
    if (nb == 0 || getType() == 2) {
        setImageMonstre();
        setXHitBoxAttack(Math.floor(Math.random() * 1000 / getFacteur()) + 60 / getFacteur());
        setYHitBoxAttack(-500 / getFacteur());
        egaliserCooMonstre();
        setReculementMonstre();
        monstreIsNull = false;
        monstreImage.classList.remove("invisible");
    }
}
function supprimerMonstre() {
    if (getYMonstreHitBoxVulnerable() >= getYTerrain() + getLargeurTerrain()) {
        monstreIsNull = true;
        monstreImage.classList.add("invisible");
        isElimine = false;
    }
}
//Animation du monstre; 
function deplacementDroiteGauche() {
    if (deplacementMonstreDroite) {
        monstreHitBoxAttack.style.left = getXMonstreHitBoxAttack() + gravityMonstre + "px";
        gravityMonstre = gravityMonstre + 1;
        if (gravityMonstre > vitesseMonstre) {
            gravityMonstre = -vitesseMonstre;
            deplacementMonstreDroite = false;
            deplacementMonstreGauche = true;
        }
    }
    if (deplacementMonstreGauche) {
        monstreHitBoxAttack.style.left = getXMonstreHitBoxAttack() - gravityMonstre + "px";
        gravityMonstre = gravityMonstre + 1;
        if (gravityMonstre > vitesseMonstre) {
            gravityMonstre = -vitesseMonstre;
            deplacementMonstreDroite = true;
            deplacementMonstreGauche = false;
        }
    }
    egaliserCooMonstre();
}

function MonstreElimineBallon() {
    if (!ballonTouch && !BallonIsInvulnerable() &&
        getXBallonHitBoxGet() + getLongueurHitBoxGet() >= getXMonstreHitBoxAttack() && getXBallonHitBoxGet() <= getXMonstreHitBoxAttack() + getLongueurHitBoxAttack() &&
        getYBallonHitBoxGet() + getLargeurHitBoxGet() >= getYMonstreHitBoxAttack() && getYBallonHitBoxGet() <= getYMonstreHitBoxAttack() + getLargeurHitBoxAttack()) {
        ballonTouch = true;
        resetGravity();
        trueMonstreTouch();
    }
}
function EliminationDuMonstre() {
    monstreHitBoxAttack.style.top = getYMonstreHitBoxAttack() + reculementMonstre + "px";
    if (reculementMonstre < 60 / getFacteur()) {
        reculementMonstre = reculementMonstre + 1;
    }
    egaliserCooMonstre();
}
function EliminerMonstre() {
    isElimine = true;
}

function IsMonstreElimine() {
    return isElimine;
}

function reculementMonstreByJetPack() {
    monstreHitBoxAttack.style.top = getYMonstreHitBoxAttack() + getReculement() + "px";
    egaliserCooMonstre();
}
//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//

function TransfererCooMonstre() {
    let cooMonstre = [getXMonstreHitBoxAttack(), getYMonstreHitBoxAttack()];
    localStorage.setItem("cooMonstre", JSON.stringify(cooMonstre));
    localStorage.setItem("typeMonstre", JSON.stringify(typeMonstre));
    localStorage.setItem("monstreIsNull", JSON.stringify(monstreIsNull));
}
function setImageMonstreGameover() {
    var bool = JSON.parse(localStorage.getItem("monstreIsNull"));
    if (bool) {
        monstreImage.classList.add("invisible");
    } else {
        var nb = JSON.parse(localStorage.getItem("typeMonstre"));
        switch (nb) {
            case 1: monstreImage.src = "Dessin/Monstre/Italie.png";
                break;
            case 2: monstreImage.src = "Dessin/Monstre/Allemagne.png";
                break;
            case 3: monstreImage.src = "Dessin/Monstre/France.png";
                break;
            case 4: monstreImage.src = "Dessin/Monstre/Algerie.png";
                break;
            default: monstreImage.src = "Dessin/Monstre/Albanie.png";
                break;
        }
    }
}

function reculerMonstreGameOver() {
    monstreHitBoxAttack.style.top = getYMonstreHitBoxAttack() - reculementMonstre + "px";
    if (reculementMonstre < 60 / getFacteur()) {
        reculementMonstre = reculementMonstre + 1;
    }
    egaliserCooMonstre();
}
function supprimerMonstreGameOver() {
    monstreImage.classList.add("invisible");
}
