document.getElementById("actu").addEventListener('mouseover', chbgon);
document.getElementById("actu").addEventListener('mouseout', chbgout);
document.getElementById("boutique").addEventListener('mouseover', chbgon);
document.getElementById("boutique").addEventListener('mouseout', chbgout);
document.getElementById("deconnexion").addEventListener('mouseover', chbgon);
document.getElementById("deconnexion").addEventListener('mouseout', chbgout);

function chbgon() {    
    document.getElementById('prono').style.backgroundColor = 'black';
    document.getElementById('prono').style.color = 'white';
}

function chbgout() {    
    document.getElementById('prono').style.backgroundColor = '#00838d';
    document.getElementById('prono').style.color = 'black';
}