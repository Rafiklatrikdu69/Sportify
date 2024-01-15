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