const facteur = 2;
const rafraichissement = 25;

function getFacteur() {
    return 2;
}

function getRafraichissement() {
    return rafraichissement;
}

//MODE DE JEU : 
// - MODE 1 : FOOTBALL; 
//=> MODE CLASSIQUE (MODE DE BASE, LE PLUS EQUILIBRE); 
// - MODE 2 : BASKETBALL; 
//=> MODE HARDCORE (FREQUENCE DES MONSTRES TRES ELEVE); 
// - MODE 3 : TENNIS; 
//=> MODE VITESSE (FREQUENCE DES RESSORT ELEVE, VITESSE ET DEFILEMENT DES PLATEFORMES AUGMENTES); 
// - MODE 4 : BASEBALL; 
//=> MODE RICHESSE (FREQUENCE DES PIECES TRES ELEVE); 
// - MODE 5 : RUGBY; 
//=> MODE DIFFICILE (MOINS DE PLATEFORMES, 12 AU LIEU DE 20); 
// - MODE 6 : BOWLING; 
//=> MODE MOUVEMENT (TOUTES LES PLATEFORMES SONT EN MOUVEMENT + FREQUENCE DU JETPACK ELEVE); 

// Definition des const qui vont être utilisées durant tout le code
const boutique = document.getElementById("boutique");
const actu = document.getElementById('actu');
const prono = document.getElementById('prono');
const jeu = document.getElementById('jeu');
const deconnexion = document.getElementById('deconnexion');

let achat = document.querySelectorAll('#achat');

// Ajout des event listener pour enlever le "surlignage" de boutique dans le header lorsque une autre categorie est selectionné
actu.addEventListener('mouseover', chbgon);
actu.addEventListener('mouseout', chbgout);
prono.addEventListener('mouseover', chbgon);
prono.addEventListener('mouseout', chbgout);
boutique.addEventListener('mouseover', chbgon);
boutique.addEventListener('mouseout', chbgout);
deconnexion.addEventListener('mouseover', chbgon);
deconnexion.addEventListener('mouseout', chbgout);

function chbgon() {
    //Fonction qui restylise boutique dans header lorsque la souris passe sur une autre categorie   
    jeu.style.backgroundColor = 'black';
    jeu.style.color = 'white';
    jeu.style.transitionDelay = "0s";
}

function chbgout() {
    //Fonction qui restylise boutique dans header lorsque la souris quitte une autre categorie
    jeu.style.transitionDuration = ".5s";
    jeu.style.backgroundColor = '#40A798';
    jeu.style.color = 'black';
    jeu.style.marginLeft = "10%"
    jeu.style.marginRight = "10%"
}









const tuto = document.getElementById("circle");
const rect = document.getElementById("rectangle");
var timerTuto;
var timerDefilementTutoD;
var timerDefilementTutoG;
var tutoType = document.querySelector(".tutoType");
tutoType.classList.add("invisible");
tutoType.style.position = "absolute";
var tutoClick = false;
var numMenu = 1;
var cirlce = [];
var tutoClass = [];
var placement = 10;
var vitesseTuto = 60;

document.querySelector(".cercle_Tuto").style.position = "absolute";

tuto.addEventListener("mouseover", function () {
    tuto.style.transitionDuration = "1s";
    document.getElementById("point").style.color = "#000";
    document.getElementById("circle").style.backgroundColor = "#40A798";
    debloque();
});
tuto.addEventListener("mouseout", function () {
    tuto.style.transitionDuration = "1s";
    document.getElementById("point").style.color = "#fff";
    document.getElementById("circle").style.backgroundColor = "#000";
    bloque();
});
tuto.addEventListener("click", function () {
    stopTimerDefilementTuto();
    tutoClick = !tutoClick;
    if (tutoClick) {
        debloque();
        tutoType.classList.remove("invisible");
    }
    startTimerDefilementTuto();
});
document.querySelector(".interfaceJeu").addEventListener("click", function () {
    stopTimerDefilementTuto();
    tutoClick = false;
    startTimerDefilementTuto();
});
document.querySelector("header").addEventListener("click", function () {
    stopTimerDefilementTuto();
    tutoClick = false;
    startTimerDefilementTuto();
});

function debloque() {
    var rectangle = document.getElementById("rectangle");
    rectangle.classList.add("expanded");
}

function bloque() {
    var rectangle = document.getElementById("rectangle");
    if (!tutoClick) {
        rectangle.classList.remove("expanded");
    }
}

function startTimerDefilementTuto() {
    timerTuto = setInterval(function () {
        if (tutoClick) {
            if (rect.offsetLeft >= 0) {
                stopTimerDefilementTuto();
                rectangle.classList.add("expanded");
            } else {
                rect.style.left = rect.offsetLeft + 30 + "px";
            }
        } else {
            if (rect.offsetLeft <= -690) {
                stopTimerDefilementTuto();
                rect.style.left = -690 + "px";
                tutoType.classList.add("invisible");
                rectangle.classList.remove("expanded");
            } else {
                rect.style.left = rect.offsetLeft - 30 + "px";
            }
        }
    }, getRafraichissement());
}
function stopTimerDefilementTuto() {
    clearInterval(timerTuto);
}

function cercleTutoMenu() {
    for (let i = 0; i < 5; i++) {
        var cercle = document.createElement("div");
        cercle.id = "cercle" + i;
        cercle.style.width = "10px";
        cercle.style.height = "10px";
        cercle.style.backgroundColor = "#fff";
        cercle.style.borderRadius = "50%";
        cercle.style.transition = "background-color 0.5s, color 0.5s";
        document.querySelector(".cercle_Tuto").appendChild(cercle);
        cirlce.push(cercle);
    }
}
function flecheTutoMenu() {
    var fleche1 = document.createElement("img");
    fleche1.src = "Dessin/Menu/boutonDroitePresse.png";
    fleche1.style.position = "absolute";
    fleche1.style.left = "93%";
    fleche1.style.top = "40%";
    fleche1.id = "flecheD";
    fleche1.style.opacity = "0";
    fleche1.style.transition = "opacity 0.3s";
    document.querySelector(".fleche").appendChild(fleche1);
    var fleche2 = document.createElement("img");
    fleche2.src = "Dessin/Menu/boutonGauchePresse.png";
    fleche2.style.position = "absolute";
    fleche2.style.left = "0%";
    fleche2.style.top = "40%";
    fleche2.id = "flecheG";
    fleche2.style.opacity = "0";
    fleche2.style.transition = "opacity 0.3s";
    document.querySelector(".fleche").appendChild(fleche2);
}
function ActionFleche() {
    var flecheD = document.getElementById("flecheD");
    var flecheG = document.getElementById("flecheG");
    flecheD.addEventListener("mouseover", function () {
        flecheD.style.opacity = "1";
    });
    flecheD.addEventListener("mouseout", function () {
        flecheD.style.opacity = "0";
    });
    flecheG.addEventListener("mouseover", function () {
        flecheG.style.opacity = "1";
    });
    flecheG.addEventListener("mouseout", function () {
        flecheG.style.opacity = "0";
    });
    flecheD.addEventListener("click", function () {
        switch (numMenu) {
            case 1:
                numMenu = 2;
                cirlce[0].style.backgroundColor = "#fff";
                cirlce[1].style.backgroundColor = "#000";
                break;
            case 2:
                numMenu = 3;
                cirlce[1].style.backgroundColor = "#fff";
                cirlce[2].style.backgroundColor = "#000";
                break;
            case 3:
                numMenu = 4;
                cirlce[2].style.backgroundColor = "#fff";
                cirlce[3].style.backgroundColor = "#000";
                break;
            case 4:
                numMenu = 5;
                cirlce[3].style.backgroundColor = "#fff";
                cirlce[4].style.backgroundColor = "#000";
                break;
        }
        stopTimerDefilementTutoDroite();
        startTimerDefilementTutoDroite();
    });
    flecheG.addEventListener("click", function () {
        switch (numMenu) {
            case 2:
                numMenu = 1;
                cirlce[1].style.backgroundColor = "#fff";
                cirlce[0].style.backgroundColor = "#000";
                break;
            case 3:
                numMenu = 2;
                cirlce[2].style.backgroundColor = "#fff";
                cirlce[1].style.backgroundColor = "#000";
                break;
            case 4:
                numMenu = 3;
                cirlce[3].style.backgroundColor = "#fff";
                cirlce[2].style.backgroundColor = "#000";
                break;
            case 5:
                numMenu = 4;
                cirlce[4].style.backgroundColor = "#fff";
                cirlce[3].style.backgroundColor = "#000";
                break;
        }
        stopTimerDefilementTutoGauche();
        startTimerDefilementTutoGauche();
    });
}
function startTimerDefilementTutoDroite() {
    timerDefilementTutoD = setInterval(function () {
        tutoType.style.left = tutoType.offsetLeft - vitesseTuto + "px";
        switch (numMenu) {
            case 2:
                if (tutoType.offsetLeft < -700 - 100) {
                    stopTimerDefilementTutoDroite();
                    tutoType.style.left = -700 - 100 + 10 + "px";
                }
                break;
            case 3:
                if (tutoType.offsetLeft < (-700 - 100) * 2) {
                    stopTimerDefilementTutoDroite();
                    tutoType.style.left = (-700 - 100) * 2 + 10 + "px";
                }
                break;
            case 4:
                if (tutoType.offsetLeft < (-700 - 100) * 3) {
                    stopTimerDefilementTutoDroite();
                    tutoType.style.left = (-700 - 100) * 3 + 10 + "px";
                }
                break;
            case 5:
                if (tutoType.offsetLeft < (-700 - 100) * 4) {
                    stopTimerDefilementTutoDroite();
                    tutoType.style.left = (-700 - 100) * 4 + 10 + "px";
                }
                break;
        }
    }, getRafraichissement());
}
function stopTimerDefilementTutoDroite() {
    clearInterval(timerDefilementTutoD);
}
function startTimerDefilementTutoGauche() {
    timerDefilementTutoG = setInterval(function () {
        tutoType.style.left = tutoType.offsetLeft + vitesseTuto + "px";
        switch (numMenu) {
            case 1:
                if (tutoType.offsetLeft > 10) {
                    stopTimerDefilementTutoGauche();
                    tutoType.style.left = 10 + "px";
                }
                break;
            case 2:
                if (tutoType.offsetLeft > -700 - 100) {
                    stopTimerDefilementTutoGauche();
                    tutoType.style.left = -700 - 100 + "px";
                }
                break;
            case 3:
                if (tutoType.offsetLeft > (-700 - 100) * 2) {
                    stopTimerDefilementTutoGauche();
                    tutoType.style.left = (-700 - 100) * 2 + "px";
                }
                break;
            case 4:
                if (tutoType.offsetLeft > (-700 - 100) * 3) {
                    stopTimerDefilementTutoGauche();
                    tutoType.style.left = (-700 - 100) * 3 + "px";
                }
                break;
        }
    }, getRafraichissement());
}
function stopTimerDefilementTutoGauche() {
    clearInterval(timerDefilementTutoG);
}
function TutoMenu() {
    var tuto = document.querySelector(".tutoMenu")
    var titre = document.createElement("p");
    titre.textContent = "Fonctionnement du Menu";
    titre.classList.add("titre");
    var text = document.createElement("a");
    text.textContent = 'Cliquez sur le bouton "Jouer" pour commencer une partie ou sur le bouton "Classement" pour connaitre votre rang.';
    text.classList.add("text");
    var text2 = document.createElement("a");
    text2.textContent = "Vous pouvez aussi changer le thème du jeu en choisissant différents sports:";
    text2.classList.add("text");
    var gif = document.createElement("img");
    gif.src = "Dessin/Tuto/tutoMenu.gif";
    gif.style.padding = "10px 120px";
    var text3 = document.createElement("a");
    text3.textContent = "Chaques thèmes apportent des modifications mineures dans le jeu :"
    text3.classList.add("text");
    tuto.appendChild(titre);
    tuto.appendChild(text);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text2);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(gif);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text3);

    var mode = [];
    for (let i = 0; i < 6; i++) {
        mode.push(document.createElement("a"));
        mode[i].classList.add("text");
    }
    mode[0].textContent = "Foot => Mode Normale (Mode le mieux équilibré, fonctionnalité classique)";
    mode[1].textContent = "Basket => Mode HardCore (Fréquence des monstres très élevés)"
    mode[2].textContent = "Tennis => Mode Vitesse (Vitesse de la balle augmentées)";
    mode[3].textContent = "Baseball => Mode Richesse (Fréquence des pieces très élevées)";
    mode[4].textContent = "Rugby => Mode Difficile (Moins de plateformes, 12 au lieu de 20)";
    mode[5].textContent = "Bowling => Mode Mouvement (Toutes les plateformes se déplacent)";
    for (let i = 0; i < mode.length; i++) {
        tuto.appendChild(document.createElement("br"));
        tuto.appendChild(mode[i]);
    }
}

function TutoGameplay() {
    var tuto = document.querySelector(".tutoGamePlay");
    var titre = document.createElement("p");
    titre.textContent = "GamePlay";
    titre.classList.add("titre");
    var text = document.createElement("a");
    text.textContent = "Deplacez la balle en appuyant sur les flèches directonnelles du clavier. Vous pouvez changer sa direction selon la direction choisis entre la droite et la gauche.";
    text.classList.add("text");
    var touche = document.createElement("img");
    touche.src = "Dessin/Tuto/toucheClavier.gif";
    touche.style.padding = "45px 45px";
    var jeu = document.createElement("img");
    jeu.style.position = "absolute";
    jeu.src = "Dessin/Tuto/tutoGamePlay.gif";
    jeu.style.left = "29%";
    jeu.style.top = "105px";
    jeu.style.border = "5px solid #000";
    var text2 = document.createElement("a");
    text2.textContent = "A chaques plateformes touchées et de saut effectué, le score augmente de 210 point. Des pieces, des monstres et plusieurs objets aves des fonctionnalités différentes sont éparpillés sur le terrain.";
    text2.classList.add("text");
    tuto.appendChild(titre);
    tuto.appendChild(text);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(touche);
    tuto.appendChild(jeu);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text2);
}
function TutoPiece() {
    var tuto = document.querySelector(".tutoPiece");
    var titre = document.createElement("p");
    titre.textContent = "Obtention des pieces";
    titre.classList.add("titre");

    tuto.appendChild(titre);
}
function TutoMonstre() {
    var tuto = document.querySelector(".tutoMonstre");
    var titre = document.createElement("p");
    titre.textContent = "Monstre";
    titre.classList.add("titre");

    tuto.appendChild(titre);
}
function TutoObject() {
    var tuto = document.querySelector(".tutoObject");
    var titre = document.createElement("p");
    titre.textContent = "Les Objets";
    titre.classList.add("titre");

    tuto.appendChild(titre);
}
flecheTutoMenu();
ActionFleche();
cercleTutoMenu();
document.getElementById("cercle0").style.background = "#000";
TutoMenu();
TutoGameplay();
TutoPiece();
TutoMonstre();
TutoObject(); 
