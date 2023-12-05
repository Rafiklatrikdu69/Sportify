document.getElementById("actu").addEventListener('mouseover', chbgon);
document.getElementById("actu").addEventListener('mouseout', chbgout);
document.getElementById("boutique").addEventListener('mouseover', chbgon);
document.getElementById("boutique").addEventListener('mouseout', chbgout);
document.getElementById("deconnexion").addEventListener('mouseover', chbgon);
document.getElementById("deconnexion").addEventListener('mouseout', chbgout);
const prono = document.getElementById("prono");
function chbgon() { 
    //Fonction qui restylise boutique dans header lorsque la souris passe sur une autre categorie   
    prono.style.backgroundColor = 'black';
    prono.style.color = 'white';
    prono.style.transitionDelay = "0s";
}

function chbgout() {    
    //Fonction qui restylise boutique dans header lorsque la souris quitte une autre categorie
    prono.style.transitionDuration = ".5s";
    prono.style.backgroundColor = '#40A798';
    prono.style.color = 'black';
    prono.style.marginLeft = "10%"
    prono.style.marginRight = "10%"
}
