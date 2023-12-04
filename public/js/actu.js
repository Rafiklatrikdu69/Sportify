document.getElementById("prono").addEventListener('mouseover', chbgon);
document.getElementById("prono").addEventListener('mouseout', chbgout);
document.getElementById("boutique").addEventListener('mouseover', chbgon);
document.getElementById("boutique").addEventListener('mouseout', chbgout);
document.getElementById("deconnexion").addEventListener('mouseover', chbgon);
document.getElementById("deconnexion").addEventListener('mouseout', chbgout);

function chbgon() {    
    document.getElementById('actu').style.backgroundColor = 'black';
    document.getElementById('actu').style.color = 'white';
}

function chbgout() {    
    document.getElementById('actu').style.backgroundColor = '#00838d';
    document.getElementById('actu').style.color = 'black';
}