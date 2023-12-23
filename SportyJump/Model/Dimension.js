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
var tutoClick = false;

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
    debloque();
});
tuto.addEventListener("click", function () {
    tutoClick = !tutoClick;
    startTimerDefilementTuto();

});

function debloque() {
    var rectangle = document.getElementById("rectangle");
    if (!tutoClick) {
        rectangle.classList.toggle("expanded");
    }
}


const rect = document.getElementById("rectangle");
var timerTuto;

function startTimerDefilementTuto() {
    timerTuto = setInterval(function () {
        if (tutoClick) {
            if (rect.offsetLeft >= 0) {
                clearInterval(timerTuto);
            } else {
                rect.style.left = rect.offsetLeft + 25 + "px";
            }
        } else {
            if (rect.offsetLeft <= -490) {
                clearInterval(timerTuto);
                rect.style.left = -490 + "px";
            } else {
                rect.style.left = rect.offsetLeft - 25 + "px";
            }
        }
    }, getRafraichissement());
}

function TutoMenu() {
    var tuto = document.querySelector(".tutoMenu")
    var titre = document.createElement("p");
    titre.textContent = "Fonctionnement du Menu";
    titre.classList.add("titre");
    var text = document.createElement("a");
    text.textContent = 'Cliqué sur le bouton "Jouer" pour commencer une partie ou sur le bouton "Classement" pour connaitre votre rang.';
    text.classList.add("text");
    var text2 = document.createElement("a");
    text2.textContent = "Vous pouvez aussi changer le thème du jeu en choisissant différents sports :";
    text2.classList.add("text");
    var gif = document.createElement("img");
    gif.src = "Dessin/Tuto/tutoMenu.gif";
    gif.style.padding = "10px 32px";
    var text3 = document.createElement("a");
    text3.textContent = "Chaques thèmes apportent des modifications mineures dans le jeu. Le Foot est le mode normale, le Basket est un mode HardCore avec une fréquence d'apparition de monstre très élevé, le Tennis est un mode qui accentue la vitesse de la balle avec plein de ressort, le Baseball est un mode avec une frèquence de piece très élevé, le Rugby est mode difficile avec moins de plateforme (12 au lieu de 20), et le Bowling est un monde avec plus de jetpack où toutes les plateformes sont en mouvement.";
    text3.classList.add("text");
    tuto.appendChild(titre);
    tuto.appendChild(text);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(text2);
    tuto.appendChild(document.createElement("br"));
    tuto.appendChild(gif);
    tuto.appendChild(text3);
}
function TutoGameplay() {

}
function TutoPiece() {

}
function TutoMonstre() {

}
function TutoObject() {

}

TutoMenu(); 
