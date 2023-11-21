document.getElementById("actu").addEventListener('mouseover', chbgon);
document.getElementById("actu").addEventListener('mouseout', chbgout);
document.getElementById("prono").addEventListener('mouseover', chbgon);
document.getElementById("prono").addEventListener('mouseout', chbgout);
document.getElementById("deconnexion").addEventListener('mouseover', chbgon);
document.getElementById("deconnexion").addEventListener('mouseout', chbgout);

function chbgon() {    
    document.getElementById('boutique').style.backgroundColor = 'black';
    document.getElementById('boutique').style.color = 'white';
}

function chbgout() {    
    document.getElementById('boutique').style.backgroundColor = '#40A798';
    document.getElementById('boutique').style.color = 'black';
}