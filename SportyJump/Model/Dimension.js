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
                    tutoType.style.left = -700 - 100 + 10 + "px";
                }
                break;
            case 3:
                if (tutoType.offsetLeft > (-700 - 100) * 2) {
                    stopTimerDefilementTutoGauche();
                    tutoType.style.left = (-700 - 100) * 2 + 10 + "px";
                }
                break;
            case 4:
                if (tutoType.offsetLeft > (-700 - 100) * 3) {
                    stopTimerDefilementTutoGauche();
                    tutoType.style.left = (-700 - 100) * 3 + 10 + "px";
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
    gif.src = "Dessin/Tuto/tutoMenu.gif"
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
    var p = document.createElement("p");
    p.style.float = "left";
    p.style.marginTop = "0";
    p.style.marginRight = "10px";
    p.style.marginBottom = "0";
    var piece = document.createElement("img");
    piece.src = "Dessin/Piece/piece.gif";
    p.appendChild(piece);
    var text = document.createElement("a");
    text.textContent = "Au cours de votre partie, vous pouvez obtenir des pièces en les touchant avec le ballon.";
    text.classList.add("text");
    var text2 = document.createElement("a");
    text2.textContent = "Obtenir des pieces vous permet les utilisez dans notre boutique.";
    text2.classList.add("text");
    var text3 = document.createElement("p");
    text3.textContent = "La HitBox d'obtention des pieces par la balle est representée par la zone verte, (la zone rouge étant la HitBox du saut) : ";
    text3.classList.add("text");
    var p2 = document.createElement("p");
    p2.style.float = "right";
    p2.style.marginTop = "10px";
    p2.style.marginLeft = "0";
    p2.style.marginBottom = "0";
    var ballon = document.createElement("img");
    ballon.src = "Dessin/Tuto/ballonHitBox.png";
    ballon.style.width = 150 / 2 + "px";
    ballon.style.height = 142 / 2 + "px";
    p2.appendChild(ballon);
    var text4 = document.createElement("a");
    text4.textContent = "Lorsque la HitBox verte rentre en collision avec la piece, une animation se déclenche indiquant que vous avez obtenu +1 de piece.";
    text4.classList.add("text");

    var div = document.createElement("p");
    div.classList.add("divPiece");
    div.style.padding = "0px 230px";
    var piece2 = document.createElement("img");
    piece2.src = "Dessin/Piece/piece.gif";
    piece2.style.marginTop = "0";
    var fleche = document.createElement("a");
    fleche.textContent = "=>";
    fleche.classList.add("titre");
    fleche.style.padding = "0px 5px";
    fleche.style.fontSize = "45px";
    var piece3 = document.createElement("img");
    piece3.src = "Dessin/Piece/piece_obtenu2.gif";
    piece3.style.height = "160%";
    div.appendChild(piece2);
    div.appendChild(fleche);
    div.appendChild(piece3);

    var text5 = document.createElement("a");
    text5.textContent = "Si vous ratez la piece, pas de panique. Elle continuera à défiler vers le bas jusqu'à disparaite. Lorsque la piece n'est plus disponible, à chaques sauts effectués, vous avez une chance sur trois pour qu'elle ré-apparaisse.";
    text5.classList.add("text");

    tuto.appendChild(titre);
    tuto.appendChild(p);
    tuto.appendChild(text);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text2);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(p2);
    tuto.appendChild(text3);
    tuto.appendChild(text4);
    tuto.appendChild(div);
    tuto.appendChild(text5);

}
function TutoMonstre() {
    var tuto = document.querySelector(".tutoMonstre");
    var titre = document.createElement("p");
    titre.textContent = "Monstre";
    titre.classList.add("titre");

    var p1 = document.createElement("p");
    p1.style.float = "left";
    p1.style.marginTop = "0";
    p1.style.marginRight = "15px";
    p1.style.marginBottom = "0";
    var monstre1 = document.createElement("img");
    monstre1.src = "Dessin/Monstre/France.png";
    monstre1.style.width = 238 / 3 + "px";
    monstre1.style.height = 174 / 3 + "px";
    p1.appendChild(monstre1);
    var p2 = document.createElement("p");
    p2.style.float = "right";
    p2.style.marginTop = "0";
    p2.style.marginLeft = "10px";
    p2.style.marginBottom = "0";
    var monstre2 = document.createElement("img");
    monstre2.src = "Dessin/Monstre/Algerie.png";
    monstre2.style.width = 238 / 3 + "px";
    monstre2.style.height = 174 / 3 + "px";
    p2.appendChild(monstre2);
    var text = document.createElement("a");
    text.textContent = "Il ne faut pas seulement craindre la peur du vide. Des monstres ideux arpentent le terrain et peuvent mettre fin à votre partie."
    text.classList.add("text");

    var p3 = document.createElement("p");
    p3.style.float = "left";
    p3.style.marginTop = "10px";
    p3.style.marginRight = "10px";
    p3.style.marginBottom = "0";
    var monstre3 = document.createElement("img");
    monstre3.src = "Dessin/Tuto/monstreHitBox.png";
    monstre3.style.width = 238 / 2 + "px";
    monstre3.style.height = 174 / 2 + "px";
    p3.appendChild(monstre3);
    var text2 = document.createElement("a");
    text2.textContent = "Un monstre possède deux HitBox diférentes. La zone bleu représente sa HitBox d'attaque, alors que la zone verte represente sa HitBox de vulnérabilité."
    text2.classList.add("text");

    var div = document.createElement("p");
    div.classList.add("divMonstre");
    div.style.float = "right";
    div.style.marginTop = "15px";
    div.style.marginLeft = "5px";
    div.style.marginBottom = "0";
    var ex1 = document.createElement("img");
    ex1.src = "Dessin/Tuto/MonstreElimine.gif";
    ex1.style.width = 151 / 1.3 + "px";
    ex1.style.height = 229 / 1.3 + "px";
    ex1.style.border = "3px solid #000";
    var ex2 = document.createElement("img");
    ex2.src = "Dessin/Tuto/ballonElimine.gif";
    ex2.style.width = 151 / 1.3 + "px";
    ex2.style.height = 229 / 1.3 + "px";
    ex2.style.border = "3px solid #000";
    var a1 = document.createElement("a");
    a1.textContent = "Elimination du monstre";
    a1.classList.add("text");
    a1.style.fontSize = "15px";
    a1.style.textAlign = "center";
    var a2 = document.createElement("a");
    a2.textContent = "Elimination du ballon";
    a2.classList.add("text");
    a2.style.fontSize = "15px";
    a2.style.textAlign = "center";
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(ex1);
    div.appendChild(ex2);

    var text3 = document.createElement("a");
    text3.textContent = "Lorsque le ballon rentre en collision avec l'HitBox bleu du monstre, les plateformes ne sont plus détectées et le ballon ne peut plus rebondir. La partie est donc terminée.";
    text3.classList.add("text");
    var text4 = document.createElement("a");
    text4.textContent = "Lorsque le ballon rentre en collision avec l'HitBox verte, il saute sur le monstre qui effectue une chute libre. Vous gagnez alors 5000 points supplémentaires.";
    text4.classList.add("text");

    var text5 = document.createElement("a");
    text5.textContent = "(A chaques sauts du ballon, vous avez une chance sur huit pour qu'un monstre apparaisse)";
    text5.classList.add("text");
    text5.style.fontSize = "10px";

    tuto.appendChild(titre);
    tuto.appendChild(p1);
    tuto.appendChild(p2);
    tuto.appendChild(text);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(p3);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text2);
    tuto.appendChild(div);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text3);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text4);
    tuto.appendChild(text5);

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
