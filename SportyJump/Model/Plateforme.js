var vitesse = 50 / getFacteur();
var reculement = 0;
var activerPlateforme = false;

//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//

function getVitesse() {
    return vitesse;
}
function getXPlateforme(plateforme) {
    return plateforme.offsetLeft;
}
function getYPlateforme(plateforme) {
    return plateforme.offsetTop;
}
function getLongueurPlateforme() {
    return 160 / getFacteur();
}
function getLargeurPlateforme() {
    return 20 / getFacteur();
}
function setXPlateforme(x, plateforme) {
    plateforme.style.left = x + 'px';
}
function setYPlateforme(y, plateforme) {
    plateforme.style.top = y + 'px';
}
function setReculement() {
    reculement = vitesse;
}
function setVitessePlateforme(new_vitesse) {
    vitesse = new_vitesse;
    //Manque vitesse de la piece et du monstre; 
}

function setImagePlateforme(type, nb, plateforme) {
    switch (type) {
        case 2:
            if (nb == 2) {
                plateforme.src = "Dessin/Plateforme/plateforme_basket.png";
            } else {
                plateforme.src = "Dessin/Plateforme/plateforme_basket1.png";
            }
            break;
        case 3:
            if (nb == 2) {
                plateforme.src = "Dessin/Plateforme/plateforme-classique.png";
            } else {
                plateforme.src = "Dessin/Plateforme/plateforme_tennis.png";
            }
            break;
        case 4:
            if (nb == 2) {
                plateforme.src = "Dessin/Plateforme/plateforme_foot.png";
            } else {
                plateforme.src = "Dessin/Plateforme/plateforme_baseball.png";
            }
            break;
        case 5:
            if (nb == 2) {
                plateforme.src = "Dessin/Plateforme/plateforme_rugby.png";
            } else {
                plateforme.src = "Dessin/Plateforme/plateforme-classique.png";
            }
            break;
        case 6:
            if (nb == 2) {
                plateforme.src = "Dessin/Plateforme/plateforme_bowling.png";
            } else {
                plateforme.src = "Dessin/Plateforme/plateforme_bowling1.png";
            }
            break;
        default:
            if (nb == 2) {
                plateforme.src = "Dessin/Plateforme/plateforme_foot.png";
            } else {
                plateforme.src = "Dessin/Plateforme/plateforme-classique.png";
            }
            break;
    }
}

//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//
//================================================================== Partie Game ==================================================================//

function ActivationPlateforme() {
    activerPlateforme = true;
    setReculement();
}
function ReculerPlateforme(plateforme) {
    plateforme.style.top = getYPlateforme(plateforme) + reculement + "px";
}
function ReculementPlateforms() {
    if (activerPlateforme) {
        document.querySelectorAll(".plateforme").forEach(function (plateforme) {
            ReculerPlateforme(plateforme);
        });
        reculement = reculement - 1;
        if (reculement <= 0) {
            activerPlateforme = false;
        }
    }
}
function NouvelAffichagePlateformeDescente(plateforme) {
    if (getYPlateforme(plateforme) >= getYTerrain() + getLargeurTerrain()) {
        plateforme.classList.add("invisible");
        let nb = Math.floor(Math.random() * 3);
        let x = 0;
        let y = Math.floor(-Math.random() * 100) + getYTerrain();
        if (nb == 0) {
            x = Math.floor(Math.random() * 141) + 10;
            plateforme.classList.remove("invisible");
        } else if (nb == 1) {
            x = Math.floor(Math.random() * 101) + 250;
            plateforme.classList.remove("invisible");
        } else if (nb == 2) {
            x = Math.floor(Math.random() * 51) + 450;
            plateforme.classList.remove("invisible");
        }
        setXPlateforme(x, plateforme);
        setYPlateforme(y, plateforme);
        nb = x = Math.floor(Math.random() * 4);
        if (nb == 1) {
            setImagePlateforme(getType(), 2, plateforme);
        } else {
            setImagePlateforme(getType(), 1, plateforme);
        }
    }
}
function isSupperposed(p) {
    let op = false;
    document.querySelectorAll(".plateforme").forEach(function (plateforme) {
        if (p.id != plateforme.id &&
            getXPlateforme(p) + getLongueurPlateforme(p) >= getXPlateforme(plateforme) && getXPlateforme(p) <= getXPlateforme(plateforme) + getLongueurPlateforme(plateforme) &&
            getYPlateforme(p) + getLargeurPlateforme(p) + 20 / getFacteur() >= getYPlateforme(plateforme) && getYPlateforme(p) <= getYPlateforme(plateforme) + getLargeurPlateforme(plateforme) + 20 / getFacteur()) {
            setXPlateforme(-100, p);
            op = true;
        }
    });
    return op;
}

//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//
//=============================================================== Partie Game Over ===============================================================//

function reculerPlateformeGameOver(plateforme) {
    plateforme.style.top = getYPlateforme(plateforme) - vitesse + "px";
}
function reculerAllPlateformsGameOver() {
    document.querySelectorAll(".plateforme").forEach(function (plateforme) {
        reculerPlateformeGameOver(plateforme);
        NouvelAffichagePlateformeMonte(plateforme);
        isSupperposed(plateforme);
    });
    if (reculement < 60 / getFacteur()) {
        reculement = reculement + 1;
    }
}

function NouvelAffichagePlateformeMonte(plateforme) {
    if (getYPlateforme(plateforme) < getYTerrain() - 30 / getFacteur()) {
        plateforme.classList.add("invisible");
        let nb = Math.floor(Math.random() * 3);
        let x = 0;
        let y = Math.floor(Math.random() * 80) + 20 + getYTerrain() + getLargeurTerrain();
        if (nb == 0) {
            x = Math.floor(Math.random() * 141) + 10;
            plateforme.classList.remove("invisible");
        } else if (nb == 1) {
            x = Math.floor(Math.random() * 101) + 250;
            plateforme.classList.remove("invisible");
        } else if (nb == 2) {
            x = Math.floor(Math.random() * 51) + 450;
            plateforme.classList.remove("invisible");
        }
        setXPlateforme(x, plateforme);
        setYPlateforme(y, plateforme);
        nb = x = Math.floor(Math.random() * 4);
        if (nb == 1) {
            setImagePlateforme(getType(), 2, plateforme);
        } else {
            setImagePlateforme(getType(), 1, plateforme);
        }
    }
}