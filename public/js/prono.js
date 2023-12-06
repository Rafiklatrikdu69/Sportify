document.getElementById("actu").addEventListener('mouseover', chbgon);
document.getElementById("actu").addEventListener('mouseout', chbgout);
document.getElementById("boutique").addEventListener('mouseover', chbgon);
document.getElementById("boutique").addEventListener('mouseout', chbgout);
document.getElementById("jeu").addEventListener('mouseover', chbgon);
document.getElementById("jeu").addEventListener('mouseout', chbgout);
document.getElementById("deconnexion").addEventListener('mouseover', chbgon);
document.getElementById("deconnexion").addEventListener('mouseout', chbgout);

function chbgon() {    
    document.getElementById('prono').style.backgroundColor = 'black';
    document.getElementById('prono').style.color = 'white';
}

function chbgout() {    
<<<<<<< HEAD
    document.getElementById('prono').style.backgroundColor = '#00838d';
=======
    document.getElementById('prono').style.backgroundColor = '#40A798';
>>>>>>> 052995cc2fb28a6e2fd2ff638ac55f4bdf15a08e
    document.getElementById('prono').style.color = 'black';
}