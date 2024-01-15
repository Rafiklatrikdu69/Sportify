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
    document.getElementById('prono').style.backgroundColor = '#40A798';
    document.getElementById('prono').style.color = 'black';
}

function getClassement(nom){
    fetch('/public/json-classement', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({nom: nom})
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      window.location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  
  
  
  
  // clique sur le bouton de la photo de profil
  // ouvre la fenetre modal
  let buttonpdp = document.getElementById('buttonpdp');
  let modalpdp = document.getElementById('modalpdp');
  let closemodalpdp = document.getElementById('closemodalpdp');
  let submitpdp = document.getElementById('submitpdp');
  
  buttonpdp.addEventListener('click', function () {
    modalpdp.classList.add('open');
  }
  );
  
  closemodalpdp.addEventListener('click', function () {
    modalpdp.classList.remove('open');
  }
  );
  
  // clique sur une image de la modal
  // change la photo de profil
  let images = document.querySelectorAll('.imgpdp');
  let pdp;
  let imageSelected;
  
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      // Supprimer la classe 'image-selected' de toutes les images
      images.forEach(function(img) {
        img.classList.remove('image-selected');
        img.classList.remove('selected');
      });
      
      // Ajouter les classes 'image-selected' et 'selected' à l'image cliquée
      // L'ajout de deux classes est nécessaire pour que l'image soit correctement stylisée
      // Car une même propriété peut être définie dans deux classes différentes
      // Le problème ici venait de l'opacité qui était définie dans les deux classes
      // Avec ces deux classes (à première vue inutiles), la classe selected devient plus précis
      // Et donc l'opacité prise en compte est celle de la classe selected
      image.classList.add('image-selected');
      image.classList.add('selected');
      
      // Mettre à jour l'image sélectionnée
      imageSelected = image;
      pdp = image.src;
    });
  });
  
  
  
  // clique sur le bouton submit de la modal
  // change la photo de profil dans la base de données
  submitpdp.addEventListener('click', function () {
    fetch('/public/json-pdp', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({pdp: pdp})
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      window.location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  );