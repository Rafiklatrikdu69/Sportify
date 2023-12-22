var vitesse = 50 / getFacteur();
var reculement = 0;
var activerPlateforme = false;
var infoDeplacement = [];
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//
//================================================================== Configuration ==================================================================//

function getVitesse() {
    return vitesse;
}
function setReculement() {
    reculement = 0;
}
function setReculementWithValue(nb) {
    reculement = nb;
}
function getReculement() {
    return reculement;
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
    let id = parseInt(plateforme.id.match(/\d+/), 10);
    if (infoDeplacement[id] != null) {
        if (nb == 2 || getType() == 6) {
            infoDeplacement[id].isMoving = true;
        } else {
            infoDeplacement[id].isMoving = false;
        }
    }
}

function setTableauDeplacementPlateforme() {
    for (let i = 0; i < getNbPlateforme(); i++) {
        let info = {
            isMoving: false,
            direction: false, //Si false = gauche, Si true = droite; 
        }
        infoDeplacement.push(info);
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
    if (parseInt(plateforme.id.match(/\d+/), 10) == 0 && !RessortIsNull()) {
        egaliserCooRessort();
    } else if (parseInt(plateforme.id.match(/\d+/), 10) == 2 && !jetpackIsNull()) {
        egaliserCooJetPack();
    }
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

function mouvementPlateforme(p) {
    let id = parseInt(p.id.match(/\d+/), 10);
    if (infoDeplacement[id].isMoving) {
        if (infoDeplacement[id].direction) {
            p.style.left = getXPlateforme(p) + 5 + "px";
            if (getXPlateforme(p) + getLongueurPlateforme(p) >= getXTerrain() + getLongueurTerrain()) {
                infoDeplacement[id].direction = false;
            }
        } else {
            p.style.left = getXPlateforme(p) - 5 + "px";
            if (getXPlateforme(p) <= getXTerrain()) {
                infoDeplacement[id].direction = true;
            }
        }
    }
    if (id == 0) {
        egaliserCooRessort();
    } else if (id == 2 && !jetIsTouch) {
        egaliserCooJetPack();
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
        if (nb == 0) {
            setImagePlateforme(getType(), 2, plateforme);
        } else {
            setImagePlateforme(getType(), 1, plateforme);
        }
        isSupperposed(plateforme);
        setDirectionPlateformeIsMoving(plateforme);
        afficherRessort(plateforme);
        afficherJetPack(plateforme);
    }
}

function setDirectionPlateformeIsMoving(p) {
    let id = parseInt(p.id.match(/\d+/), 10);
    if (infoDeplacement[id].isMoving) {
        let x = getXPlateforme(p) + getLongueurPlateforme(p) / 2;
        let milieu = getXTerrain() + getLongueurTerrain() / 2;
        if (x > milieu) {
            infoDeplacement[id].direction = true;
        } else {
            infoDeplacement[id].direction = false;
        }
    }
}

function isSupperposed(p) {
    let op = false;
    document.querySelectorAll(".plateforme").forEach(function (plateforme) {
        if (p.id != plateforme.id &&
            getXPlateforme(p) + getLongueurPlateforme(p) >= getXPlateforme(plateforme) && getXPlateforme(p) <= getXPlateforme(plateforme) + getLongueurPlateforme(plateforme) &&
            getYPlateforme(p) + getLargeurPlateforme(p) + 10 >= getYPlateforme(plateforme) && getYPlateforme(p) <= getYPlateforme(plateforme) + getLargeurPlateforme(plateforme) + 10) {
            setXPlateforme(-100, p);
            op = true;
            infoDeplacement[parseInt(p.id.match(/\d+/), 10)].isMoving = false;
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

//=============================================================== Partie Game JetPack ===============================================================//
//=============================================================== Partie Game JetPack ===============================================================//
//=============================================================== Partie Game JetPack ===============================================================//

function reculementPlateformeByJetPack() {
    document.querySelectorAll(".plateforme").forEach(function (plateforme) {
        plateforme.style.top = getYPlateforme(plateforme) + reculement + "px";
        mouvementPlateforme(plateforme);
    });
    if (reculement < 60) {
        reculement = reculement + 0.3;
    }
}

function reculementPlateformeAtterissage() {
    if (reculement >= 0) {
        document.querySelectorAll(".plateforme").forEach(function (plateforme) {
            plateforme.style.top = getYPlateforme(plateforme) + reculement + "px";
            mouvementPlateforme(plateforme);
            NouvelAffichagePlateformeDescente(plateforme);
        });
        reculement--;
    }
}