const actu = document.getElementById("actu")
const prono = document.getElementById("prono")
const boutique = document.getElementById("boutique")
const jeu = document.getElementById("jeu")
const deconnexion = document.getElementById("deconnexion")

// listener
actu.addEventListener('mouseover', chbgon);
actu.addEventListener('mouseout', chbgout);
boutique.addEventListener('mouseover', chbgon);
boutique.addEventListener('mouseout', chbgout);
jeu.addEventListener('mouseover', chbgon);
jeu.addEventListener('mouseout', chbgout);
deconnexion.addEventListener('mouseover', chbgon);
deconnexion.addEventListener('mouseout', chbgout);

function chbgon() { 
    //Fonction qui restylise prono dans header lorsque la souris passe sur une autre categorie   
    prono.style.backgroundColor = 'black';
    prono.style.color = 'white';
    prono.style.transitionDelay = "0s";
}

function chbgout() {    
    //Fonction qui restylise prono dans header lorsque la souris quitte une autre categorie
    prono.style.transitionDuration = ".5s";
    prono.style.backgroundColor = '#40A798';
    prono.style.color = 'black';
    prono.style.marginLeft = "10%"
    prono.style.marginRight = "10%"
}
