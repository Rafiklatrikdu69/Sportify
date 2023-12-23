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
document.querySelector(".tutoType").classList.add("invisible"); 
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
    bloque(); 
});
tuto.addEventListener("click", function () {
    stopTimerDefilementTuto(); 
    tutoClick = !tutoClick;
    if(tutoClick){
        debloque();
        document.querySelector(".tutoType").classList.remove("invisible"); 
    }
    startTimerDefilementTuto();
});
document.querySelector(".interfaceJeu").addEventListener("click", function(){
        stopTimerDefilementTuto(); 
        tutoClick = false; 
        startTimerDefilementTuto();
}); 
document.querySelector("header").addEventListener("click", function(){
    stopTimerDefilementTuto(); 
    tutoClick = false; 
    startTimerDefilementTuto();
}); 

function debloque() {
    var rectangle = document.getElementById("rectangle");
    rectangle.classList.add("expanded");
}

function bloque(){
    var rectangle = document.getElementById("rectangle");
    if(!tutoClick){
        rectangle.classList.remove("expanded");
    }
}

const rect = document.getElementById("rectangle");
var timerTuto;

function startTimerDefilementTuto() {
    timerTuto = setInterval(function () {
        if (tutoClick) {
            if (rect.offsetLeft >= 0) {
                stopTimerDefilementTuto(); 
                rectangle.classList.add("expanded");
            } else {
                rect.style.left = rect.offsetLeft + 25 + "px";
            }
        } else {
            if (rect.offsetLeft <= -690) {
                stopTimerDefilementTuto(); 
                rect.style.left = -690 + "px";
                document.querySelector(".tutoType").classList.add("invisible"); 
                rectangle.classList.remove("expanded");
            } else {
                rect.style.left = rect.offsetLeft - 25 + "px";
            }
        }
    }, getRafraichissement());
}
function stopTimerDefilementTuto(){
    clearInterval(timerTuto); 
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
    for(let i=0; i<6; i++){
        mode.push(document.createElement("a")); 
        mode[i].classList.add("text"); 
    }
    mode[0].textContent = "Foot => Mode Normale (Mode le mieux équilibré, fonctionnalité classique)";  
    mode[1].textContent = "Basket => Mode HardCore (Fréquence des monstres très élevés)"
    mode[2].textContent = "Tennis => Mode Vitesse (Vitesse de la balle augmentées)"; 
    mode[3].textContent = "Baseball => Mode Richesse (Fréquence des pieces très élevées)"; 
    mode[4].textContent = "Rugby => Mode Difficile (Moins de plateformes, 12 au lieu de 20)"; 
    mode[5].textContent = "Bowling => Mode Mouvement (Toutes les plateformes se déplacent)"; 
    for(let i=0; i<mode.length; i++){
        tuto.appendChild(document.createElement("br"));
        tuto.appendChild(mode[i]);
    }

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
